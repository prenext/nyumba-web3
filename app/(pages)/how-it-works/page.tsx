import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

const HowSection = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#F5EBDC', height: '100vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            How?
          </Typography>
          <img
            src="https://i.pinimg.com/564x/3e/4f/d7/3e4fd791f54c8bee5565036c2094309d.jpg"
            alt="Buildings"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>01</Typography>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Decentralization
                  </Typography>
                }
                secondary="Reducing middlemen and cartels - core of our solution"
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>02</Typography>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Tokenization
                  </Typography>
                }
                secondary="Enabling fractional ownership and liquidity in the market."
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>03</Typography>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Property management through Smart contract
                  </Typography>
                }
                secondary="Securely store and manage essential documents. Reliable and fast transactions."
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowSection;
