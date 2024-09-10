"use server";
import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { getCookie } from "@/lib/utils/cookies.util";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

// Function to remove a request
export async function buyProperty({
  propertyId,
  requestId,
  amount,
}: {
  propertyId: string;
  requestId: string;
  amount: number;
}) {
  const userAddress: { name: string; value: string } | any = await getCookie(
    "wallet-address"
  );

  if (!userAddress?.value) {
    return {
      success: false,
      message: "User is not authenticated.",
    };
  }

  // Check if the request exists and if the user is the owner of the request
  const request = await client
    .db(DATABASE_NAME)
    .collection("requests")
    .findOne({ _id: new ObjectId(requestId) });

  if (!request) {
    return {
      success: false,
      message: "Request not found.",
    };
  }

  if (request.requestedBy !== userAddress.value) {
    return {
      success: false,
      message: "You are not the owner of this request.",
    };
  }

  // update property status to sold and owner to the buyer
  await client
    .db(DATABASE_NAME)
    .collection("properties")
    .updateOne(
      { _id: new ObjectId(propertyId) },
      { $set: { status: "sold", ownerAddress: userAddress.value } }
    );

  // If the user is the owner, proceed to remove the request
  await client
    .db(DATABASE_NAME)
    .collection("requests")
    .updateOne(
      { _id: new ObjectId(requestId) },
      { $set: { status: "completed" } }
    );

  // save transaction details
  await client.db(DATABASE_NAME).collection("transactions").insertOne({
    propertyId: propertyId,
    requestId: requestId,
    amount: amount,
    buyer: userAddress.value,
    seller: request.ownerAddress,
    transactionDate: new Date().toISOString(),
  });

  revalidatePath("/home");

  return {
    success: true,
    message: "Property bought successfully.",
  };
}
