import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
  Avatar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LandscapeIcon from "@mui/icons-material/Landscape";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    name: "Buy Land",
    description: "Purchase plots of land for residential or commercial use.",
    icon: <LandscapeIcon sx={{ fontSize: 40 }} />,
  },
  {
    name: "Real Estate",
    description: "Invest in residential and commercial properties.",
    icon: <HomeIcon sx={{ fontSize: 40 }} />,
  },
  {
    name: "Lease Land",
    description: "Lease land for farming, industrial, or residential purposes.",
    icon: <BusinessCenterIcon sx={{ fontSize: 40 }} />,
  },
  {
    name: "Rent Houses",
    description: "Find houses and apartments for rent.",
    icon: <ApartmentIcon sx={{ fontSize: 40 }} />,
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <Card
    sx={{
      marginBottom: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 2,
    }}
  >
    <Avatar
      sx={{ bgcolor: "primary.main", width: 60, height: 60, marginBottom: 2 }}
    >
      {service.icon}
    </Avatar>
    <CardContent sx={{ textAlign: "center" }}>
      <Typography variant="h6" component="div" gutterBottom>
        {service.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {service.description}
      </Typography>
    </CardContent>
  </Card>
);

const ServicesSection: React.FC = () => (
  <Box sx={{ paddingY: 4, paddingX: 2 }}>
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" gutterBottom>
        Explore the range of services we offer to help you buy, sell, lease, or
        rent properties.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

function PropertiesPage() {
  return (
    <div>
      <ServicesSection />
    </div>
  );
}

export default PropertiesPage;
