import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box p={4}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          {/* Placeholder for the illustration */}
          <Box display="flex" justifyContent="center">
            <img
              src="https://i.pinimg.com/564x/82/54/87/825487d15703586f4dcd146701f2826f.jpg"
              alt="Blockchain Real Estate Illustration"
              style={{ maxWidth: '100%' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Why Choose Nyumba Blockchain?
          </Typography>
          <Typography variant="body1" paragraph>
            Nyumba Blockchain revolutionizes the real estate market by introducing a cutting-edge platform that leverages the power of blockchain technology. Our platform offers a secure, transparent, and efficient way for users to search for properties, ensuring they have access to accurate and trustworthy information.
          </Typography>
          <Typography variant="body1" paragraph>
            By using blockchain, we eliminate the need for intermediaries, reduce transaction costs, and minimize the risks of fraud and misinformation. Nyumba Blockchain empowers users with the confidence to make informed decisions, providing them with a seamless and modern approach to real estate transactions.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;