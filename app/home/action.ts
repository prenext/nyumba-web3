"use server";
import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { getCookie } from "@/lib/utils/cookies.util";

// Function to get properties by the current user's address
export async function getPropertiesByUserAddress() {
  try {
    //await client.connect();

    const userAddress: { name: string; value: string } | any = await getCookie(
      "wallet-address"
    );

    // Query the properties collection for properties associated with the userAddress
    const properties = await client
      .db(DATABASE_NAME)
      .collection("properties")
      .find({ ownerAddress: userAddress.value }) // Filter by userAddress
      .toArray();

    return properties;
  } catch (error) {
    console.error("Error fetching properties by user address:", error);
    return {
      success: false,
      message: "Error fetching properties. Please try again later.",
    };
  } finally {
   // await client.close();
  }
}

// Function to fetch properties by property type and their respective user data
export async function getPropertiesByType(propertyType: string) {
  try {
    //await client.connect();

    // Fetch properties based on the property type
    const properties = await client
      .db(DATABASE_NAME)
      .collection("properties")
      .find({ propertyType })
      .toArray();

    // Fetch user data for each property
    const propertiesWithUserData = await Promise.all(
      properties.map(async (property: any) => {
        const user = await client
          .db(DATABASE_NAME)
          .collection("users")
          .findOne(
            { walletAddress: property.ownerAddress },
            { projection: { firstName: 1, lastName: 1, avatar: 1 } } // Fetch only necessary fields
          );

        return { ...property, owner: user || {} };
      })
    );

    return propertiesWithUserData;
  } catch (error) {
    console.error("Error fetching properties by type:", error);
    return [];
  } finally {
   // await client.close();
  }
}
