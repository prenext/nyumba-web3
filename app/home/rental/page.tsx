import React from 'react';
import { Grid, Typography, Button, MenuItem, Select, FormControl } from '@mui/material';
import HouseCard from '@/components/PropertyCard';

const houseList = [
  { name: "The Grand Estate", location: "Moscow, 121B", price: 521, imageUrl: "https://picsum.photos/400/300?random=1" },
  { name: "Hostel Estate", location: "Moscow, 121B", price: 412, imageUrl: "https://picsum.photos/400/300?random=2" },
  { name: "The Great Hotel", location: "Moscow, 121B", price: 261, imageUrl: "https://picsum.photos/400/300?random=3" },
  { name: "Voxy Estate", location: "Moscow, 121B", price: 652, imageUrl: "https://picsum.photos/400/300?random=4" },
];

const HouseList = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Live Who You Are.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Own the Home Meant for You.
      </Typography>
      <FormControl variant="outlined" sx={{ minWidth: 150, marginBottom: 2 }}>
        <Select defaultValue="Recently added">
          <MenuItem value="Recently added">Recently added</MenuItem>
          <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
          <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" sx={{ marginLeft: 2 }}>
        See more
      </Button>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {houseList.map((house, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <HouseCard house={house} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HouseList;
