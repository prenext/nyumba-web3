import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SecurityIcon from "@mui/icons-material/Security";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

// Define an array of features with titles, descriptions, and icons
const features = [
  {
    title: "Tokenisation",
    description:
      "Enable digital representation of assets with unique tokens on the blockchain, ensuring security and transparency.",
    icon: <AutoGraphIcon style={{ fontSize: 50 }} />,
  },
  {
    title: "Blockchain Transactions",
    description:
      "Perform secure and efficient transactions on the blockchain with high throughput and low latency.",
    icon: <SwapVertIcon style={{ fontSize: 50 }} />,
  },
  {
    title: "Secure Accessibility",
    description:
      "Guarantee secure access to blockchain services with cutting-edge authentication and encryption methods.",
    icon: <SecurityIcon style={{ fontSize: 50 }} />,
  },
  {
    title: "Blockchain Interoperability",
    description:
      "Facilitate smooth interoperability between different blockchains, enabling seamless asset transfers.",
    icon: <CompareArrowsIcon style={{ fontSize: 50 }} />,
  },
];

const Features = () => {
  return (
    <Box
      my={10}
      sx={{
        backgroundColor: "#33333320",
        py: 15,
        px: 2,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            mb: 5,
          }}
          gutterBottom
          align="center"
        >
          Blockchain Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Box
                sx={{
                  textAlign: {
                    xs: "center", // Center text on small screens
                    md: "left",   // Align text to the left on medium and larger screens
                  },
                }}
              >
                {feature.icon}
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;