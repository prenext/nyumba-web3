"use server";
import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { getCookie } from "@/lib/utils/cookies.util";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

// Helper function to handle request validation and deletion
async function handleRequest(
  requestId: string,
  userAddress: string,
  action: string
) {
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

  if (request.ownerAddress !== userAddress) {
    return {
      success: false,
      message: "Unauthorized access request.",
    };
  }

  // If the user is the owner, proceed to remove the request
  await client
    .db(DATABASE_NAME)
    .collection("requests")
    .updateOne(
      { _id: new ObjectId(requestId) },
      {
        $set: { status: action },
      }
    );

  revalidatePath("/home/requested");

  return {
    success: true,
    message: "Request removed successfully.",
  };
}

// Function to decline a request
export async function declineRequest(prevState: any, formData: FormData) {
  const userAddress: any = await getCookie("wallet-address");
  const requestId = formData.get("requestId")?.toString() || "";

  if (!userAddress?.value) {
    return {
      success: false,
      message: "User is not authenticated.",
    };
  }

  return handleRequest(requestId, userAddress.value, "cancelled");
}

// Function to accept a request
export async function acceptRequest(prevState: any, formData: FormData) {
  const userAddress: any = await getCookie("wallet-address");
  const requestId = formData.get("requestId")?.toString() || "";

  if (!userAddress?.value) {
    return {
      success: false,
      message: "User is not authenticated.",
    };
  }

  return handleRequest(requestId, userAddress.value, "approved");
}

// Function to undo request and restore it to pending status
export async function undoRequest(prevState: any, formData: FormData) {
  const userAddress: any = await getCookie("wallet-address");
  const requestId = formData.get("requestId")?.toString();

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

  if (request.ownerAddress !== userAddress.value) {
    return {
      success: false,
      message: "Unauthorized access request.",
    };
  }

  // Restore the request to pending status
  await client
    .db(DATABASE_NAME)
    .collection("requests")
    .updateOne(
      { _id: new ObjectId(requestId) },
      { $set: { status: "pending" } } // Update to the correct status field
    );

  revalidatePath("/home/requested");

  return {
    success: true,
    message: "Request restored to pending status.",
  };
}
