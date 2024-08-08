"use server";
import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { getCookie } from "@/lib/utils/cookies.util";
import { ObjectId } from "mongodb";

// Function to fetch a property by its ID and the owner's details
export async function getPropertyById(propertyId: string) {
  try {
    await client.connect();

    const userAddress: { name: string; value: string } | any = await getCookie(
      "wallet-address"
    );

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

    // Fetch the owner details
    const owner = await client
      .db(DATABASE_NAME)
      .collection("users")
      .findOne(
        { walletAddress: property.ownerAddress },
        { projection: { firstName: 1, lastName: 1, avatar: 1 } } // Fetch only necessary fields
      );

    return {
      ...property,
      owner: owner || {},
      isOwner: userAddress.value === property.ownerAddress,
      myAddress: userAddress.value,
    };
  } finally {
    await client.close();
  }
}

// Function to request a property
export async function requestProperty(prevState: any, formData: any) {
  try {
    await client.connect();

    // Fetch the property details by property ID
    // const property = await client
    //   .db(DATABASE_NAME)
    //   .collection("properties")
    //   .findOne({ _id: new ObjectId(propertyId) });

    // if (!property) {
    //   return {
    //     success: false,
    //     message: "Property not found.",
    //   };
    // }

    // Update the property status to requested
    // await client
    //   .db(DATABASE_NAME)
    //   .collection("properties")
    //   .updateOne(
    //     { _id: new ObjectId(propertyId) },
    //     { $set: { status: "Requested" } }
    //   );

    // Update the property owner's request list

    return {
      success: true,
      message: "Property requested successfully.",
    };
  } finally {
    await client.close();
  }
}
