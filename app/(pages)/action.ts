"use server";
import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";

export async function signUpUser(prevState: any, formData: any) {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      walletAddress: formData.get("walletAddress"),
    };

    console.log("Data to be inserted:", data);

    // Check if wallet address is already registered
    const existingUser = await client
      .db(DATABASE_NAME)
      .collection("users")
      .findOne({ walletAddress: data.walletAddress });

    if (existingUser) {
      console.log("User with that wallet address already exists");
      return {
        error: "User with that wallet address already exists",
      };
    }

    // Insert data into the database
    const result = await client
      .db(DATABASE_NAME)
      .collection("users")
      .insertOne(data);

    console.log(
      `${result} documents were inserted with the _id: ${result.insertedId}`
    );

    // Returning the result of the insertion
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "Failed to sign in");
    } else {
      throw new Error("Failed to sign in");
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function signInUser(prevState: any, formData: any) {
  try {
    // Extract wallet address from the form data
    const walletAddress = formData.get("walletAddress");

    if (!walletAddress) {
      console.log("No wallet address provided");
      return {
        error: "No wallet address provided",
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
      console.log("User not found");
      return {
        error: "User not found",
      };
    }
    console.log("User found:", user);
    // Returning the user data
    return {
      message: "User found",
    };
  } catch (error) {
    console.error("Error signing in:", error);
    if (error instanceof Error) {
      throw new Error(error.message || "Failed to sign in");
    } else {
      throw new Error("Failed to sign in");
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
