import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const Features = () => {
  return (
    <Box
      my={10}
      sx={{
        backgroundColor: "#3f51b5",
        color: "white",
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
          <Grid item xs={12} md={3}>
            <Box textAlign="left">
              <AutoGraphIcon style={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom>
                Scalability
              </Typography>
              <Typography variant="body1">
                Scalability is implemented by using a decentralized Plasma
                operator mechanism with finality achieved on a main chain.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box textAlign="left">
              <SwapVertIcon style={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom>
                Transaction Throughput
              </Typography>
              <Typography variant="body1">
                Can scale to millions of transactions on a sidechain tree
                architecture. 65k transactions/second on a single Matic chain.
              </Typography>
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={2.4}>
            <Box textAlign="left">
              <DevicesIcon style={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom>
                User Experience
              </Typography>
              <Typography variant="body1">
                Smooth UX abstraction from mainchain to Matic chain. Native
                mobile apps and SDK with WalletConnect support.
              </Typography>
            </Box>
          </Grid> */}
          <Grid item xs={12} md={3}>
            <Box textAlign="left">
              <SecurityIcon style={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom>
                Security
              </Typography>
              <Typography variant="body1">
                The Matic chain(s) operators are themselves Stakers and
                Delegates in a Proof-of-Stake system in the Matic Network.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box textAlign="left">
              <CompareArrowsIcon style={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom>
                Asset Interoperability
              </Typography>
              <Typography variant="body1">
                Assets in different sidechains across various blockchains will
                be made inter-operable by Matic Network in the near future.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
