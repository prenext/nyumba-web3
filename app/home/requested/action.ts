"use server";
import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { getCookie } from "@/lib/utils/cookies.util";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

// Function to remove a request
export async function removeRequest(prevState: any, formData: any) {
  const userAddress: { name: string; value: string } | any = await getCookie(
    "wallet-address"
  );

  const requestId = formData.get("requestId");

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

  // If the user is the owner, proceed to remove the request
  await client
    .db(DATABASE_NAME)
    .collection("requests")
    .deleteOne({ _id: new ObjectId(requestId) });

  revalidatePath("/home/requested");

  return {
    success: true,
    message: "Request removed successfully.",
  };
}
