"use server";
import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { getCookie } from "@/lib/utils/cookies.util";

export async function getCurrentUser() {
  try {
    const userAddress: { name: string; value: string } | any = await getCookie(
      "wallet-address"
    );
    console.log("userAddress:", userAddress);
    await client.connect();
    const user = await client
      .db(DATABASE_NAME)
      .collection("users")
      .findOne(
        { walletAddress: userAddress.value },
        {
          projection: {
            _id: 0,
            walletAddress: 1,
            firstName: 1,
            lastName: 1,
            email: 1,
          },
        }
      );
    return user;
  } finally {
    await client.close();
  }
}

// method to update user details
export async function updateUserDetails(prevState: any, formData: any) {
  try {
    await client.connect();

    const newData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
    };

    const userAddress: { name: string; value: string } | any = await getCookie(
      "wallet-address"
    );

    // update user details
    await client
      .db(DATABASE_NAME)
      .collection("users")
      .updateOne({ walletAddress: userAddress.value }, { $set: newData });

    return {
      success: true,
      message: "User details updated successfully",
    };
  } finally {
    await client.close();
  }
}
