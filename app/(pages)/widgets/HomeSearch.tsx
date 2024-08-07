import React from 'react';
import { Box, Typography, TextField, Button, Grid, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GoogleIcon from '@mui/icons-material/Google';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HomeSearch = () => {
  return (
    <Box
      p={4}
      sx={{
        backgroundImage: 'url(https://i.pinimg.com/564x/6d/b6/77/6db6776090b1126206c2b5851dfdb0e0.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 750,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" gutterBottom>
          Let’s find a home that’s perfect for you
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Search confidently with your trusted source of homes for sale or rent.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" mb={4} width="80%">
        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '50px',
            p: '2px 4px',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" color="primary" endIcon={<SearchIcon />} sx={{ borderRadius: '50px' }}>
                    Search
                  </Button>
                </InputAdornment>
              ),
              sx: { borderRadius: '50px' },
            }}
          />
        </Paper>
      </Box>
      <Box textAlign="center" mb={4}>
        <Typography variant="subtitle1">
          Trusted by 20,000+ companies
        </Typography>
      </Box>
      {/* <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item>
          <GoogleIcon style={{ fontSize: 40 }} />
        </Grid>
        <Grid item>
          <BusinessIcon style={{ fontSize: 40 }} />
        </Grid>
        <Grid item>
          <HomeIcon style={{ fontSize: 40 }} />
        </Grid>
        <Grid item>
          <ApartmentIcon style={{ fontSize: 40 }} />
        </Grid>
        <Grid item>
          <ShoppingCartIcon style={{ fontSize: 40 }} />
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default HomeSearch;
