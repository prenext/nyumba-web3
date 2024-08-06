import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";

interface Property {
  name: string;
  image: string;
  income: string;
  yield: string;
}

const properties: Property[] = [
  {
    name: "North Melbourne",
    image:
      "https://i.pinimg.com/736x/ec/e5/14/ece51435dc299f512ae8243352b687d3.jpg",
    income: "360,000",
    yield: "6.4",
  },
  {
    name: "Frankston Orca",
    image:
      "https://i.pinimg.com/564x/6d/b1/19/6db1195024ec2f1378c7087ce8e7e9f1.jpg",
    income: "240,000",
    yield: "5.3",
  },
  {
    name: "Potts Points Carnige",
    image:
      "https://i.pinimg.com/564x/d2/46/80/d2468079cfe358de1d3e0441ac0fa973.jpg",
    income: "320,000",
    yield: "6.4",
  },
  // Add more properties here if needed
];

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => (
  <Card>
    <CardMedia
      component="img"
      alt={property.name}
      height="240"
      image={property.image}
    />
    <CardContent>
      <Typography variant="h6" component="div">
        {property.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Net Income ${property.income} - Net Yield {property.yield}%
      </Typography>
    </CardContent>
  </Card>
);

const PropertiesSection: React.FC = () => (
  <Box sx={{ paddingY: 4, paddingX: 2 }}>
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Latest Property
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover our high-end projects for investors and individuals. With an
        in-depth knowledge of the Luxembourg market, our real estate agency is
        proud to offer a diverse selection of quality properties to suit all
        tastes and budgets.
      </Typography>
      <Grid container spacing={2}>
        {properties.map((property, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

function PropertiesPage() {
  return
  <div>
    <PropertiesSection />
  </div>;
};
export default PropertiesPage;