"use server";
import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { setCookieFromString } from "@/lib/utils/cookies.util";
import { redirect } from "next/navigation";

export async function signUpUser(prevState: any, formData: any) {
  try {
    const walletAddress = formData.get("walletAddress");

    if (!walletAddress) {
      console.log("No wallet provided");
      return {
        message: "No wallet provided",
        type: "error",
      };
    }
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      walletAddress: formData.get("walletAddress"),
    };

    // Check if wallet address is already registered
    const existingUser = await client
      .db(DATABASE_NAME)
      .collection("users")
      .findOne({ walletAddress: data.walletAddress });

    if (existingUser) {
      return {
        type: "error",
        message: "Wallet address already registered",
      };
    }

    // Insert data into the database
    const result = await client
      .db(DATABASE_NAME)
      .collection("users")
      .insertOne(data);

    if (!result.insertedId) {
      return {
        type: "error",
        message: "An error occurred while registering user",
      };
    }

    setCookieFromString(`wallet-address=${data.walletAddress};path=/;`);

    // Returning the result of the insertion
    return redirect("/home");
  } finally {
    await client.close();
  }
}

export async function signInUser(prevState: any, formData: any) {
  try {
    // Extract wallet address from the form data
    const walletAddress = formData.get("walletAddress");

    if (!walletAddress) {
      console.log("No wallet provided");
      return {
        message: "No wallet provided",
        type: "error",
      };
    }
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Check if wallet address exists
    const user = await client
      .db(DATABASE_NAME)
      .collection("users")
      .findOne({ walletAddress });

    if (!user) {
      return {
        type: "error",
        message: "Wallet address not registered",
      };
    }

    setCookieFromString(`wallet-address=${walletAddress};path=/;`);

    // Returning the user data
    return redirect("/home");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


