"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useFormState } from "react-dom";
import SubmitButton from "@/app/(pages)/widgets/SubmitButton";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Web3 from "web3";
import { makePayment } from "@/lib/utils/pay.util";
import { fetchEthToUsdRate } from "@/lib/utils/web3.utils";

interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  propertyType: string;
  images: { url: string; id: string }[];
  status: string;
  ownerAddress: string;
  owner: {
    firstName: string;
    lastName: string;
    avatar: { url: string; id: string };
  };
  isOwner: boolean;
  location: {
    latitude: number;
    longitude: number;
  };
}

interface ConfirmationPageProps {
  request: {
    _id: string;
    propertyId: string;
    ownerAddress: string;
    propertyType: string;
    requestedBy: string;
    status: string;
    requestedAt: string;
  };
  owner: {
    _id: string;
    firstName: string;
    lastName: string;
    avatar: { url: string; id: string };
  };
  property: Property;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  request,
  owner,
  property,
}) => {
  const isOwner = property.isOwner;
  const [state, action] = useFormState(() => {}, null);
  const router = useRouter();

  console.log("Request:", request);
  console.log("Owner:", owner); 
  console.log("Property:", property);

  const handlePayment = async () => {
    try {
      // Fetch the current ETH/USD exchange rate (or SFuel/USD)
      const ethToUsdRate = await fetchEthToUsdRate();

      // Convert the property price (in USD) to Ether (or SFuel)
      const priceInEth = (property.price / ethToUsdRate).toFixed(18);

      // Execute payment using the converted price
      const paymentResult = await makePayment({
        sender: request.requestedBy, 
        receiver: property.ownerAddress, // Property owner's address
        amount: priceInEth,
      });

      if (paymentResult.success) {
        toast.success("Payment successful!");
        console.log("Transaction Hash:", paymentResult.transactionHash);
        router.push("/home/success"); // Redirect or handle success
      } else {
        toast.error(paymentResult.message);
      }
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment failed. Please try again.");
    }
  };


  return (
    <Box component="form" action={action}>
      <Card sx={{ maxWidth: 600, margin: "auto" }}>
        <CardMedia>
          <Carousel showThumbs={false}>
            {property.images.map((img) => (
              <div key={img.id}>
                <img
                  style={{ height: "300px", width: "auto" }}
                  src={img.url}
                  alt={property.title}
                />
              </div>
            ))}
          </Carousel>
        </CardMedia>
        <CardContent>
          <Typography variant="h5" component="div">
            {property.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {property.description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            Price: ${property.price}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Do you want to pay for this property?
          </Typography>
          {/* hidden inputs for the form */}
          <input type="hidden" name="propertyId" value={property._id} />
          <input
            type="hidden"
            name="ownerAddress"
            value={property.ownerAddress}
          />
          <input type="hidden" name="requestedBy" value={request.requestedBy} />
          <input
            type="hidden"
            name="propertyType"
            value={property.propertyType}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {!isOwner && (
              <Button
                // @ts-ignore
                color="secondary"
                onClick={handlePayment}
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Make Payment

              </Button>
            )}
            {isOwner && (
              <Button
                // @ts-ignore
                disabled
                color="primary"
              >
                Cannot Pay for Own Property
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ConfirmationPage;
