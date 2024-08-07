import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const How_it_works = () => {
  return (
    <Box p={4} py={10} my={10}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Matic Architecture
          </Typography>
          <Typography variant="body1" paragraph>
            Matic Network solves the above problems by building a decentralized
            platform using an adapted version of Plasma framework that provides
            a solution for faster and extremely low cost transactions with
            finality on a main chain.
          </Typography>
          <Typography variant="body1" paragraph>
            The system ensures liveliness using PoS checkpoints which are pushed
            to the Ethereum mainchain. This enables Matic to theoretically
            achieve 2^16 transactions per block on a single plasma chain, and
            possibly millions of transactions on multiple chains in the future.
          </Typography>
          <Button variant="contained" color="primary">
            Read Whitepaper
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Placeholder for the illustration */}
          <Box display="flex" justifyContent="center">
            <img
              src="https://i.pinimg.com/564x/f8/fe/41/f8fe41d415088e6701625c054606d143.jpg"
              alt="Matic Architecture Illustration"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default How_it_works;
