"use server";
import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { getCookie } from "@/lib/utils/cookies.util";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getCurrentUser() {
  try {
    const userAddress: { name: string; value: string } | any = await getCookie(
      "wallet-address"
    );
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
            avatar: 1,
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

    let newData: any = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
    };

    // if user has added an avatar create a formData object with it as file and upload it to cloudinary
    if (formData.get("avatar").size > 0) {
      const multipartFormData = new FormData();
      multipartFormData.append("file", formData.get("avatar") as File);
      const { url, id } = await uploadFile(multipartFormData);
      newData.avatar = { url, id };
    }

    const userAddress: { name: string; value: string } | any = await getCookie(
      "wallet-address"
    );

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

// function for user to add a new property
export async function addProperty(formData: any) {
  try {
    await client.connect();

    const userAddress: { name: string; value: string } | any = await getCookie(
      "wallet-address"
    );

    const propertyData = {
      title: formData.get("title"),
      description: formData.get("description"),
      price: formData.get("price"),
      location: formData.get("location"),
      image: formData.get("image"),
      owner: userAddress.value,
    };

    // insert property data
    await client
      .db(DATABASE_NAME)
      .collection("properties")
      .insertOne(propertyData);

    return {
      success: true,
      message: "Property added successfully",
    };
  } finally {
    await client.close();
  }
}

// Function uploadImageToCloudinary
export async function uploadFile(formData: FormData) {
  const body = {
    file: formData.get("file") as File,
  };

  let result: any = null;

  const arrayBuffer = body.file ? await body.file.arrayBuffer() : null;
  const buffer = new Uint8Array(arrayBuffer || []);
  result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          upload_preset: process.env.NEXT_MLDEFAULT_UPLOAD_PRESET,
        },
        function (error: any, result: unknown) {
          if (error) {
            reject(error);
            console.error("Cloudinary upload error: ", error);
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });

  return {
    url: result.url,
    id: result.public_id,
  };
}
