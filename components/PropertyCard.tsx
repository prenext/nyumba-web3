import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface House {
  imageUrl: string;
  name: string;
  location: string;
  price: number;
}

const HouseCard: React.FC<{ house: House }> = ({ house }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={house.imageUrl}
        alt={house.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {house.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {house.location}
        </Typography>
        <Typography variant="h6" color="primary">
          ${house.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HouseCard;
