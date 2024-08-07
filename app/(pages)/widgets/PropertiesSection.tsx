import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const PropertyCard = ({ image, title, description, propertiesCount }: { image: string, title: string, description: string, propertiesCount: string }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: 200 }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>
        <Box mt={2}>
          <Button variant="outlined">
            {propertiesCount} properties
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const PropertiesSection = () => {
  const properties = [
    {
      image: 'https://i.pinimg.com/564x/5e/2a/dd/5e2add23445c93e82fc9acf028eeff19.jpg',
      title: 'Enjoy the great cold',
      description: '',
      propertiesCount: '6,872'
    },
    {
      image: 'https://i.pinimg.com/564x/50/e8/d8/50e8d88544815ccc12b1650c8860830a.jpg',
      title: 'Pick up the earliest sunrise',
      description: '',
      propertiesCount: '6,872'
    },
    {
      image: 'https://i.pinimg.com/564x/bb/d8/f8/bbd8f8060eedf24f2184d4d34bf2f08f.jpg',
      title: 'Unique stay',
      description: '',
      propertiesCount: '6,872'
    }
  ];

  return (
    <Box p={4} textAlign="center" mb={10}>
      <Typography variant="h4" gutterBottom>
        Move to What Moves You
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Keep calm & travel on
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {properties.map((property, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PropertyCard
              image={property.image}
              title={property.title}
              description={property.description}
              propertiesCount={property.propertiesCount}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PropertiesSection;
