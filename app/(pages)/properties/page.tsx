import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

interface ContentItem {
  title: string;
  description: string;
  image: string;
}

const content = [
  {
    title: "Buy Land",
    description: "Our platform allows you to buy land easily and securely.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Real Estate",
    description: "Explore various real estate options available for purchase.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Lease Land",
    description: "Lease land with flexible terms that suit your needs.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Rent Houses",
    description: "Find houses available for rent in different locations.",
    image: "https://via.placeholder.com/400x300",
  },
];

const TwoSidedLayout: React.FC = () => (
  <Box sx={{ paddingY: 4, paddingX: 2 }}>
    <Container maxWidth="xl">
      {content.map((item, index) => (
        <Grid
          container
          spacing={4}
          key={index}
          direction={index % 2 === 0 ? "row" : "row-reverse"}
          alignItems="center"
          sx={{ marginBottom: 4, my: 10 }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Grid>
        </Grid>
      ))}
    </Container>
  </Box>
);

export default TwoSidedLayout;
