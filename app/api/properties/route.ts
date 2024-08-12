import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";

export async function GET(request: Request) {
  // Query the properties collection for properties associated with the userAddress
  const userAddress = request.headers.get("Authorization")?.split(" ")[1];

  console.log("userAddress", userAddress);

  const properties = await client
    .db(DATABASE_NAME)
    .collection("properties")
    .find({ ownerAddress: userAddress }) // Filter by userAddress
    .toArray();

  // Return response
  return new Response(JSON.stringify(properties), {
    status: 200,
  });
}
