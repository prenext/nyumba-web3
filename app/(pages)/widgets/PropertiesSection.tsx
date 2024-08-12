import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";

const HowItWorksCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        borderRadius: 10,
        border: "1px solid #E0E0E0",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: 200 }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const HowItWorksSection = () => {
  const features = [
    {
      image:
        "https://i.pinimg.com/564x/5e/2a/dd/5e2add23445c93e82fc9acf028eeff19.jpg",
      title: "Decentralization",
      description:
        "Our platform is built on a decentralized network, ensuring that no single entity has control over the entire system. This approach enhances security, transparency, and trust among all users.",
    },
    {
      image:
        "https://i.pinimg.com/564x/50/e8/d8/50e8d88544815ccc12b1650c8860830a.jpg",
      title: "Tokenization",
      description:
        "We utilize tokenization to represent real estate assets on the blockchain. This process allows properties to be divided into digital tokens, making it easier to buy, sell, and trade fractions of real estate.",
    },
    {
      image:
        "https://i.pinimg.com/564x/bb/d8/f8/bbd8f8060eedf24f2184d4d34bf2f08f.jpg",
      title: "Smart Contracts",
      description:
        "Smart contracts automate property management tasks, such as rental agreements and payments. These contracts are self-executing, ensuring that all parties meet their obligations without the need for intermediaries.",
    },
  ];

  return (
    <Box
      p={4}
      textAlign="center"
      my={10}
      sx={{
        py: 15,
        backgroundColor: "#F5EBDC",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" gutterBottom>
          How it Works
        </Typography>
        <Typography variant="subtitle1" sx={{mb: 4}} gutterBottom>
          Discover the power of blockchain in real estate
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <HowItWorksCard
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
