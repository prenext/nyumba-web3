import React from "react";
import {
  Grid,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  TextField,
  Box,
} from "@mui/material";
import HouseCard from "@/components/PropertyCard";
import SearchForm from "@/components/SearchForm";

const houseList = [
  {
    name: "The Grand Estate",
    location: "Moscow, 121B",
    price: 521,
    imageUrl: "https://picsum.photos/400/300?random=1",
  },
  {
    name: "Hostel Estate",
    location: "Moscow, 121B",
    price: 412,
    imageUrl: "https://picsum.photos/400/300?random=2",
  },
  {
    name: "The Great Hotel",
    location: "Moscow, 121B",
    price: 261,
    imageUrl: "https://picsum.photos/400/300?random=3",
  },
  {
    name: "Voxy Estate",
    location: "Moscow, 121B",
    price: 652,
    imageUrl: "https://picsum.photos/400/300?random=4",
  },
];

const HouseList = () => {
  return (
    <div>
     <SearchForm />
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
