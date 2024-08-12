import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const How_it_works = () => {
  return (
    <Box p={4} py={10} my={10}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Revenue and Market Potential
          </Typography>
          <Typography variant="body1" paragraph>
            Our focus is on tapping into the vast $1.5 trillion market within the real estate industry. This market is ripe with opportunities, offering immense potential for growth and expansion as we introduce innovative solutions that cater to the evolving needs of modern real estate transactions.
          </Typography>
          <Typography variant="body1" paragraph>
            Our revenue model is strategically designed to capitalize on this opportunity through two primary channels: transaction fees and subscription services. By implementing a fee structure on each transaction facilitated by our platform, we ensure a steady revenue stream that scales with the volume of transactions. Additionally, subscription fees for our premium services provide a recurring revenue model, offering advanced features and exclusive benefits to our clients.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Placeholder for the illustration */}
          <Box display="flex" justifyContent="center">
            <img
              src="https://i.pinimg.com/564x/f8/fe/41/f8fe41d415088e6701625c054606d143.jpg"
              alt="Real Estate Market Analysis Illustration"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default How_it_works;