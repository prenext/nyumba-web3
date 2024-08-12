import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  // Get the property type from the request params
  const { id } = context.params;

  const userAddress = request.headers.get("Authorization")?.split(" ")[1];

  // Fetch the property details by property ID
  const property = await client
    .db(DATABASE_NAME)
    .collection("properties")
    .findOne({ _id: new ObjectId(id) });

  if (!property) {
    return new Response(JSON.stringify({ message: "Property not found" }), {
      status: 404,
    });
  }

  // Fetch the owner details
  const owner = await client
    .db(DATABASE_NAME)
    .collection("users")
    .findOne(
      { walletAddress: property.ownerAddress },
      { projection: { firstName: 1, lastName: 1, avatar: 1 } } // Fetch only necessary fields
    );

  // Return response
  return new Response(
    JSON.stringify({
      ...property,
      owner: owner || {},
      isOwner: userAddress === property.ownerAddress,
      myAddress: userAddress,
    }),
    {
      status: 200,
    }
  );
}
