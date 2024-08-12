import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  // Extract the userAddress from the Authorization header
  const userAddress = request.headers.get("Authorization")?.split(" ")[1];

  if (!userAddress) {
    return new Response(
      JSON.stringify({ message: "User is not authenticated." }),
      { status: 401 }
    );
  }

  const { id } = context.params;

  // Query the requests collection for properties associated with the userAddress
  const requestDoc = await client
    .db(DATABASE_NAME)
    .collection("requests")
    .findOne(
      { _id: new ObjectId(id), requestedBy: userAddress },
      { projection: { requestedBy: 0 } } // Exclude requestedBy from the response
    );

  if (!requestDoc) {
    return new Response(
      JSON.stringify({ message: "Request not found or unauthorized." }),
      { status: 404 }
    );
  }

  // Fetch additional metadata for the user who made the request
  const owner = await client
    .db(DATABASE_NAME)
    .collection("users")
    .findOne(
      { walletAddress: userAddress },
      { projection: { firstName: 1, lastName: 1, avatar: 1 } }
    );

  // Fetch the property details
  const property = await client
    .db(DATABASE_NAME)
    .collection("properties")
    .findOne(
      { _id: new ObjectId(requestDoc.propertyId) },
      {
        projection: {
          name: 1,
          location: 1,
          type: 1,
          price: 1,
          images: 1,
          title: 1,
        },
      }
    );

  // Return the enhanced response
  const enhancedResponse = {
    request: requestDoc,
    owner,
    property
  };

  return new Response(JSON.stringify(enhancedResponse), {
    status: 200,
  });
}
