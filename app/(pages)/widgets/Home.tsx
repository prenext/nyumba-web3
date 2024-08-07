import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box p={4}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Scalable and instant blockchain transactions
          </Typography>
          <Typography variant="body1" paragraph>
            Matic Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains.
          </Typography>
          <Button variant="contained" color="primary">
            Read Whitepaper
          </Button>
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
