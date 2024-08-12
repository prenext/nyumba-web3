"use server";
import { uploadFile } from "@/app/actions";
import { DATABASE_NAME } from "@/lib/config";
import client from "@/lib/mongodb";
import { getCookie } from "@/lib/utils/cookies.util";

// Function to validate each step
const validateStep = (step: number, data: any) => {
  switch (step) {
    case 0: // Step 1: Validate title, price, and property type
      if (
        !data.title ||
        typeof data.price !== "number" ||
        data.price <= 0 ||
        !data.propertyType
      ) {
        return {
          success: false,
          message:
            "Title, property type, and price must be provided, and price must be a number greater than 0",
        };
      }
      break;

    case 1: // Step 2: Validate location and images
      const images = data.images;
      if (!images || images.length === 0) {
        return { success: false, message: "At least one image is required" };
      }
      for (const image of images) {
        if (image.size === 0) {
          return {
            success: false,
            message: "Each image must be larger than 0 bytes",
          };
        }
      }
      break;

    case 2: // Step 3: Validate documents
      const { latitude, longitude } = data.location;
      if (isNaN(latitude) || isNaN(longitude)) {
        return {
          success: false,
          message: "Location must include valid latitude and longitude",
        };
      }
      break;
    case 3: // Step 4: No validation needed
      const documents = data.documents;
      if (!documents || documents.length === 0) {
        return { success: false, message: "At least one document is required" };
      }
      for (const document of documents) {
        if (document.size === 0) {
          return {
            success: false,
            message: "Each document must be larger than 0 bytes",
          };
        }
      }
      break;
    default:
      return { success: false, message: "Invalid step number" };
  }
  return { success: true };
};

// Helper function to convert files to FormData
const createFormData = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return formData;
};

// Function for user to add a new property
export async function addProperty(prevState: any, formData: any) {
  const userAddress: { name: string; value: string } | any = await getCookie(
    "wallet-address"
  );

  const currentStep = parseInt(formData.get("currentStep"), 10);

  console.log("Current step:", currentStep);

  // Extract data based on the current step
  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: parseFloat(formData.get("price")),
    propertyType: formData.get("propertyType"),
    location: {
      latitude: parseFloat(formData.get("location.latitude")),
      longitude: parseFloat(formData.get("location.longitude")),
    },
    images: formData.getAll("images") as File[],
    documents: formData.getAll("documents") as File[],
    status: "pending_Approval", // Default status
  };

  // Validate based on the current step
  const validationResult = validateStep(currentStep, data);

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.message,
    };
  }

  // Handle the final step where files are uploaded and added to the database
  if (currentStep === 3) {
    // Upload images
    const uploadedImages = await Promise.all(
      data.images.map(async (image) => {
        const formData = createFormData(image);
        return await uploadFile(formData);
      })
    );

    // Upload documents
    const uploadedDocuments = await Promise.all(
      data.documents.map(async (document) => {
        const formData = createFormData(document);
        return await uploadFile(formData);
      })
    );

    const propertyData = {
      title: data.title,
      description: data.description,
      price: data.price,
      propertyType: data.propertyType,
      location: data.location,
      images: uploadedImages,
      documents: uploadedDocuments,
      status: data.status, // Include the status in the database
      ownerAddress: userAddress.value,
    };

    // Insert property data into the database
    await client
      .db(DATABASE_NAME)
      .collection("properties")
      .insertOne(propertyData);
  }

  return {
    success: true,
    message: `Property added successfully. Current step: ${currentStep}`,
  };
}
