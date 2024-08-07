import React from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        pt: 10,
        mt: 10,
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            gap: { xs: 4, md: 0 },
          }}
        >
          <Box mb={2}>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/"
            >
              <Typography variant="h4" component="a" sx={{ color: "white" }}>
                Nyumba Blockchain
              </Typography>
            </Link>
            <Typography variant="body1" sx={{ mt: 2, maxWidth: 300 }}>
              The shortest distance between paradise and the place you call
              home.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Typography variant="body2">Email Marketing</Typography>
            <Typography variant="body2">Campaigns</Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography variant="body2">Our Story</Typography>
            <Typography variant="body2">Benefits</Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" justifyContent="center">
              <IconButton color="inherit" href="https://facebook.com">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com">
                <Instagram />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
      {/* coppy rights */}
      <Box
        sx={{
          backgroundColor: "primary.dark",
          mt: 10,
          py: 2,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "white" }}>
          &copy; 2021 Nyumba Blockchain. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
