import { ethers } from "ethers";
import dotenv from "dotenv";
import {
  RealEstateMarketPlace,
  Property,
  User,
} from "@/lib/types/Blockchain";

dotenv.config();

// Load contract ABI
const CONTRACT_ABI = require("../json/RealEstateMarketPlace.json");
const contractAbi = CONTRACT_ABI.abi;

// Load environment variables
const privateKey = process.env.SKALE_PRIVATE_KEY || "";
const contractAddress = process.env.SKALE_CONTRACT_ADDRESS || "";
const skaleProviderUrl = process.env.SKALE_PROVIDER_URL || "";

// Initialize the contract
const skaleProvider = new ethers.JsonRpcProvider(skaleProviderUrl);
const wallet = privateKey
  ? new ethers.Wallet(privateKey, skaleProvider)
  : undefined;
const contract = new ethers.Contract(
  contractAddress,
  contractAbi,
  wallet
) as unknown as RealEstateMarketPlace;

// Function to register a user
export async function registerUser(): Promise<void> {
  try {
    const tx = await contract.registerUser();
    console.log("User registered successfully.");
  } catch (error) {
    console.error("Error registering user:", error);
  }
}

// Function to add a property
export async function addProperty(
  uri: string,
  price: number,
  rent: number
): Promise<void> {
  try {
    const tx = await contract.addProperty(uri, price, rent);
    console.log("Property added successfully.");
  } catch (error) {
    console.error("Error adding property:", error);
  }
}

// Function to buy a property
export async function buyProperty(propertyId: number): Promise<void> {
  try {
    const tx = await contract.buyProperty(propertyId);
    console.log("Property bought successfully.");
  } catch (error) {
    console.error("Error buying property:", error);
  }
}

// Function to rent a property
export async function rentProperty(propertyId: number): Promise<void> {
  try {
    const tx = await contract.rentProperty(propertyId);
    console.log("Property rented successfully.");
  } catch (error) {
    console.error("Error renting property:", error);
  }
}

// Function to get a property by ID
export async function getProperty(propertyId: number): Promise<Property> {
  try {
    const property = await contract.getProperty(propertyId);
    return property;
  } catch (error) {
    console.error("Error getting property:", error);
    return {} as Property;
  }
}

// Function to get all available properties
export async function availableProperties(): Promise<Property[]> {
  try {
    const properties = await contract.availableProperties();
    return properties;
  } catch (error) {
    console.error("Error getting available properties:", error);
    return [];
  }
}

// Function to get the caller's properties
export async function getMyProperties(): Promise<Property[]> {
  try {
    const properties = await contract.getMyProperties();
    return properties;
  } catch (error) {
    console.error("Error getting my properties:", error);
    return [];
  }
}

// Function to get user information by address
export async function getUserByAddress(
  userAddress: string
): Promise<[boolean, number]> {
  try {
    const [exists, propertyCount] = await contract.getUserByAddress(
      userAddress
    );
    return [exists, propertyCount];
  } catch (error) {
    console.error("Error getting user by address:", error);
    return [false, 0];
  }
}
