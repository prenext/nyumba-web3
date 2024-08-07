import React from 'react';
import { Box, Typography, Grid, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import BoltIcon from '@mui/icons-material/Bolt';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: 4 ,mt: 10,width: "100%" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" mb={2}>
              <BoltIcon color="primary" fontSize="large" />
              <Typography variant="h6" component="span" ml={1}>
                BuildEstate
              </Typography>
            </Box>
            <Typography variant="body1">
              The shortest distance between paradise and the place you call home.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Typography variant="body2">
              Email Marketing
            </Typography>
            <Typography variant="body2">
              Campaigns
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography variant="body2">
              Our Story
            </Typography>
            <Typography variant="body2">
              Benefits
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex">
              <IconButton color="primary" href="https://facebook.com">
                <Facebook />
              </IconButton>
              <IconButton color="primary" href="https://twitter.com">
                <Twitter />
              </IconButton>
              <IconButton color="primary" href="https://instagram.com">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
