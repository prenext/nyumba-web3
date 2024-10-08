"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  CircularProgress,
  CardActions,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useFormState } from "react-dom";
import { requestProperty } from "./action";
import SubmitButton from "@/app/(pages)/widgets/SubmitButton";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
  myAddress: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

interface ConfirmationPageProps {
  property: Property;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ property }) => {
  const isOwner = property.isOwner;

  const [state, action] = useFormState(requestProperty, null);
  const router = useRouter();

  React.useEffect(() => {
    if (state?.success) {
      toast.success("Property requested successfully");
      router.push("/home/requested");
    } else if (state?.message) {
      toast.error(state?.message);
    }
  }, [state]);

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
            Do you want to request this property?
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
            <SubmitButton
              // disabled={isOwner}
              sx={{
                bgcolor: isOwner ? "gray" : "primary.main",
                "&:hover": {
                  bgcolor: isOwner ? "gray" : "primary.dark",
                },
              }}
            >
              {isOwner ? "Cannot Request Own Property" : "Confirm"}
            </SubmitButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ConfirmationPage;
