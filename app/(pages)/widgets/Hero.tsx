import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box p={4}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          {/* Placeholder for the illustration */}
          <Box display="flex" justifyContent="center">
            <img src="https://i.pinimg.com/564x/82/54/87/825487d15703586f4dcd146701f2826f.jpg" alt="Why Matic Illustration" style={{ maxWidth: '100%' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Why Matic
          </Typography>
          <Typography variant="body1" paragraph>
            Decentralized Apps are making huge progress but the current blockchain ecosystem is not prepared to scale as per the demand.
          </Typography>
          <Typography variant="body1" paragraph>
            Slow block confirmations and high gas fees need to be solved before we target mass adoption by mainstream users. And most importantly, it needs awesome user experience.
          </Typography>
          <Typography variant="body1" paragraph>
            We aim to change that by simplifying the interaction between users and the decentralized world. We want to make interacting with the decentralized ecosystem so easy that anyone can do so without worrying about the complexity of the system.
          </Typography>
          <Button variant="contained" color="primary">
            Read Whitepaper
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
