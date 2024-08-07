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
        { projection: { _id: 0, walletAddress: 1, firstName: 1, lastName: 1 } }
      );
    return user;
  } finally {
    await client.close();
  }
}
