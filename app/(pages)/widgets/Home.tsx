import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box p={4}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            The Problem We Address
          </Typography>
          <Typography variant="body1" paragraph>
            The real estate industry is often plagued by inefficiencies, particularly when it comes to accessing reliable and up-to-date housing information. Traditional methods of searching for properties can be cumbersome, time-consuming, and lack transparency, leaving users frustrated and uncertain.
          </Typography>
          <Typography variant="body1" paragraph>
            Our platform revolutionizes the property search process by leveraging cutting-edge blockchain technology. We provide a seamless and secure way for users to explore real estate options, ensuring that the information is not only accurate but also easily accessible. By integrating blockchain, we enhance the reliability of property data, eliminate intermediaries, and offer a more transparent and efficient solution for homebuyers and investors alike.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Placeholder for the illustration */}
          <Box display="flex" justifyContent="center">
            <img src="https://i.pinimg.com/564x/ee/c8/df/eec8dfedb4e84597c3ad7b41432e4a55.jpg" alt="Blockchain Illustration" style={{ maxWidth: '100%' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
