import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
  Button,
  Rating,
  Grid,
} from "@mui/material";

interface Property {
  name: string;
  frontImage: string;
  backImage: string;
  price: string;
  rating: number;
  description: string;
}

const properties: Property[] = [
  {
    name: "Luxury Beachfront Villa",
    frontImage:
      "https://i.pinimg.com/736x/ec/e5/14/ece51435dc299f512ae8243352b687d3.jpg",
    backImage:
      "https://i.pinimg.com/564x/af/5c/0a/af5c0ac821f6cff10ccecb89db5b1fca.jpg",
    price: "540",
    rating: 4.0,
    description: "Exclusive real estate property with ocean view",
  },
  {
    name: "Elegant Mansion in the Countryside",
    frontImage:
      "https://i.pinimg.com/564x/6d/b1/19/6db1195024ec2f1378c7087ce8e7e9f1.jpg",
    backImage:
      "https://i.pinimg.com/564x/19/4f/55/194f551414d71c33fdf5a74f83eba35d.jpg",
    price: "540",
    rating: 4.0,
    description: "Private real estate retreat surrounded by nature",
  },
  {
    name: "Modern City Apartment",
    frontImage:
      "https://i.pinimg.com/564x/d2/46/80/d2468079cfe358de1d3e0441ac0fa973.jpg",
    backImage:
      "https://i.pinimg.com/564x/4c/41/ca/4c41ca7614354badabb8bfa6a4464db7.jpg",
    price: "540",
    rating: 4.0,
    description: "Contemporary apartment located in the city center",
  },
];

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => (
  <Card sx={{ marginBottom: 4 }}>
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {property.description}
      </Typography>
      <Typography variant="h6" component="div">
        {property.name}
      </Typography>
    </CardContent>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <CardMedia
          component="img"
          alt={`${property.name} front view`}
          height="240"
          image={property.frontImage}
        />
      </Grid>
      <Grid item xs={6}>
        <CardMedia
          component="img"
          alt={`${property.name} back view`}
          height="240"
          image={property.backImage}
        />
      </Grid>
    </Grid>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', marginY: 1 }}>
        <Rating value={property.rating} readOnly precision={0.5} size="small" />
        <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
          {property.rating}
        </Typography>
      </Box>
      <Typography variant="h6" color="text.primary">
        ${property.price} total
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <Button variant="contained" color="primary">
          Buy Now
        </Button>
        <Button variant="outlined" color="secondary">
          Add to cart
        </Button>
      </Box>
    </CardContent>
  </Card>
);

const PropertiesSection: React.FC = () => (
  <Box sx={{ paddingY: 4, paddingX: 2 }}>
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Real Estate Listings
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover stunning real estate properties with our curated listings and expert insights.
      </Typography>
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </Container>
  </Box>
);

function PropertiesPage() {
  return (
    <div>
      <PropertiesSection />
    </div>
  );
}

export default PropertiesPage;
