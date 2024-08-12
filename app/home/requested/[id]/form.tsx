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
// import { requestProperty } from "./action";
import SubmitButton from "@/app/(pages)/widgets/SubmitButton";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Property {
  _id: string;
  title: string;
  description: string; // Ensure you have this field if it exists
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
  myAddress: string;
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

//   React.useEffect(() => {
//     if (state?.success) {
//       toast.success("Property requested successfully");
//       router.push("/home/requested");
//     } else if (state?.message) {
//       toast.error(state?.message);
//     }
//   }, [state]);

  const handlePayment = () => {
    // Implement your payment logic here
    console.log("Payment button clicked");
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
          <input type="hidden" name="requestedBy" value={property.myAddress} />
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
              <SubmitButton
                // @ts-ignore
                color="secondary"
              >
                Make Payment
              </SubmitButton>
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
