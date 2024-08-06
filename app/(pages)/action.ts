"use server";
import prisma from "@/app/lib/utils/prismaClient";

export async function signUpUser(prevState: any, formData: any) {
  const data = {
    walletAddress: formData.get("walletAddress"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
  };

  console.log("Creating user with data:", data);  
  console.log("mongo url:", process.env.DATABASE_URL);
  return await prisma.user.create({data});
}
