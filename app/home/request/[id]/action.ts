"use server";
import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { getCookie } from "@/lib/utils/cookies.util";
import { ObjectId } from "mongodb";

// Function to request a property
export async function requestProperty(prevState: any, formData: any) {
  const userAddress: { name: string; value: string } | any = await getCookie(
    "wallet-address"
  );

  if (!userAddress?.value) {
    return {
      success: false,
      message: "User is not authenticated.",
    };
  }

  const propertyId = formData.get("propertyId");
  const ownerAddress = formData.get("ownerAddress");

  // Fetch the property details by property ID
  const property = await client
    .db(DATABASE_NAME)
    .collection("properties")
    .findOne({ _id: new ObjectId(propertyId) });

  if (!property) {
    return {
      success: false,
      message: "Property not found.",
    };
  }

  // Check if the user is the owner of the property
  const isOwner = userAddress.value === property.ownerAddress;

  if (!isOwner) {
    return {
      success: false,
      message: "You are not authorized to request this property.",
    };
  }

  const data = {
    propertyId: propertyId,
    ownerAddress: ownerAddress,
    requestedBy: userAddress.value,
    propertyType: formData.get("propertyType"),
    status: "pending",
    requestedAt: new Date(),
  };

  // Check if the property has already been requested
  const existingRequest = await client
    .db(DATABASE_NAME)
    .collection("requests")
    .findOne({
      propertyId: data.propertyId,
      requestedBy: data.requestedBy,
    });

  if (existingRequest) {
    return {
      success: false,
      message: "You have already requested this property.",
    };
  }

  // Insert the request into the database
  const result = await client
    .db(DATABASE_NAME)
    .collection("requests")
    .insertOne(data);

  return {
    success: true,
    message: "Property requested successfully.",
  };
}
