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

  return (
    <Box sx={{ padding: 3 }} component="form" action={action}>
      <Card sx={{ maxWidth: 600, margin: "auto" }}>
        <CardMedia>
          <Carousel showThumbs={false}>
            {property.images.map((img) => (
              <div key={img.id}>
                <img src={img.url} alt={property.title} />
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
          <Typography variant="body2" color="text.secondary">
            Location: Latitude {property?.location?.latitude}, Longitude{" "}
            {property.location.longitude}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Do you want to request this property?
          </Typography>
        </CardContent>
        <CardActions>
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
              {isOwner ? "Cannot Perform Action on Own Property" : "Confirm"}
            </SubmitButton>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ConfirmationPage;
