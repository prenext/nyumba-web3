import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";

interface ContentItem {
  title: string;
  description: string;
  image: string;
  details: string[];
}

const content: ContentItem[] = [
  {
    title: "Buy Land",
    description: "Easily and securely purchase your dream land with us, where endless possibilities await. Whether you're looking for a serene countryside retreat or a prime location for development, our platform provides you with the tools to make informed decisions. Embrace the freedom to choose your own piece of paradise.",
    image: "https://i.pinimg.com/564x/6d/47/1e/6d471e7cd5c59643ecf4585f4d95322c.jpg",
    details: ["Secure Purchase", "Flexible Terms", "Prime Locations", "Trusted Platform"]
  },
  {
    title: "Real Estate",
    description: "Discover a world of elegant homes and prime real estate options designed for your lifestyle. From luxurious urban apartments to sprawling suburban estates, our selection caters to a variety of tastes and preferences. Let us guide you on your journey to finding the perfect home that meets your every need.",
    image: "https://i.pinimg.com/564x/f5/65/ba/f565bacaea1b79ea0e61a0d95edf814c.jpg",
    details: ["Luxury Homes", "Diverse Options", "Tailored Guidance", "Quality Living"]
  },
  {
    title: "Lease Land",
    description: "Flexible and tailored leasing options that provide the perfect solution for your needs. Whether you're seeking short-term leases or long-term commitments, we offer a range of choices that accommodate your unique requirements. Experience the convenience and peace of mind that comes with our trusted leasing services.",
    image: "https://i.pinimg.com/736x/7b/91/14/7b9114c5083292f4bd8ac0cbce9d41c9.jpg",
    details: ["Flexible Leasing", "Short-Term & Long-Term", "Convenient Options", "Trusted Service"]
  },
  {
    title: "Rent Houses",
    description: "Find your ideal rental home, offering comfort and convenience in every corner. With a wide range of properties available, you're sure to find the perfect place that aligns with your lifestyle. From cozy apartments to spacious family homes, we ensure that every rental meets high standards of quality and comfort.",
    image: "https://i.pinimg.com/564x/5e/10/e2/5e10e28f86f6ea191062bb924e1b4f40.jpg",
    details: ["Comfort & Convenience", "Wide Range", "High Standards", "Perfect Location"]
  },
];

const TwoSidedLayout: React.FC = () => (
  <Box sx={{ paddingY: 6, paddingX: 3, backgroundColor: "#f5f5f5" }}>
    {/* Top Header Section */}
    <Container maxWidth="lg">
      <Grid container alignItems="center" sx={{ marginBottom: 6 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
            Premium Land at <Box component="span" sx={{ fontSize: '2.5rem', display: 'inline-block', transform: 'rotate(45deg)', marginX: 1 }}>*</Box> Unbeatable Prices
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 2, color: "#666" }}>
            Find the finest land at the most competitive prices with Acent: Our extensive inventory of premium properties offers value in prime locations.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="success" size="large" sx={{ paddingX: 4, paddingY: 1.5, fontSize: '1rem', textTransform: 'none' }}>
            Explore Properties
          </Button>
        </Grid>
      </Grid>
    </Container>

    {/* Content Section */}
    <Container maxWidth="lg">
      {content.map((item, index) => (
        <Grid
          container
          spacing={4}
          key={index}
          direction={index % 2 === 0 ? "row" : "row-reverse"}
          alignItems="center"
          sx={{ marginBottom: 8, position: 'relative' }}
        >
          <Grid item xs={12} md={6}>
            <Card 
              sx={{ 
                borderRadius: 4, 
                boxShadow: 3, 
                transition: "transform 0.3s ease-in-out", 
                "&:hover": { transform: "scale(1.02)" },
                height: "300px",
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ 
                  borderRadius: 4, 
                  height: "100%", 
                  objectFit: "cover" 
                }}
              />
            </Card>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 3,
                position: 'absolute',
                bottom: '-20px',
                left: index % 2 === 0 ? '20px' : 'auto',
                right: index % 2 === 0 ? 'auto' : '20px',
                width: '250px',
                padding: '10px',
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                Hassle-Free Approval
              </Typography>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {item.details.map((detail, idx) => (
                  <li key={idx} style={{ marginBottom: '5px', color: '#555' }}>{detail}</li>
                ))}
              </ul>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: "#333" }}>
                {item.title}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  marginTop: 1, 
                  color: "#555", 
                  lineHeight: 1.7, 
                  textAlign: 'justify', 
                  letterSpacing: '0.5px' 
                }}
              >
                {item.description}
              </Typography>
              <Button sx={{ marginTop: 2 }} variant="contained" color="primary">
                Explore
              </Button>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Container>
  </Box>
);

export default TwoSidedLayout;
