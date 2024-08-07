import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';

const Founders = () => {
  const founders = [
    {
      name: "Esteban Ordano",
      title: "Founder & CTO at Decentraland",
      description: "Previously Software Engineer at BitPay.",
      imgSrc: "https://pravatar.cc/300?img=2"
    },
    {
      name: "Pete Kim",
      title: "Head of Engineering, Wallet at Coinbase",
      description: "Creator of CipherBrowser and Co-Founder at Nitrous,.",
      imgSrc: "https://pravatar.cc/300?img=1"
    },
    {
      name: "Ari Meilich",
      title: "Founder & CEO at Decentraland",
      description: "Previously Co-Founder of Benchrise, Inc.",
      imgSrc: "https://pravatar.cc/300?img=3"
    },
    {
      name: "Esteban Ordano",
      title: "Founder & CTO at Decentraland",
      description: "Previously Software Engineer at BitPay.",
      imgSrc: "https://pravatar.cc/300?img=4"
    },
    {
      name: "Pete Kim",
      title: "Head of Engineering, Wallet at Coinbase",
      description: "Creator of CipherBrowser and Co-Founder at Nitrous,.",
      imgSrc: "https://pravatar.cc/300?img=5"
    },
    {
      name: "Ari Meilich",
      title: "Founder & CEO at Decentraland",
      description: "Previously Co-Founder of Benchrise, Inc.",
      imgSrc: "https://pravatar.cc/300?img=6"
    }
  ];

  return (
    <Box p={4}>
      <Typography variant="h3" gutterBottom align="center">
        Advisors
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {founders.map((founder, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                src={founder.imgSrc}
                alt={`${founder.name} Image`}
                sx={{ borderRadius: '50%', width: '150px', height: '150px', marginTop: '16px' }}
              />
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {founder.name}
                </Typography>
                <Typography variant="body1" color="primary">
                  {founder.title}
                </Typography>
                <Typography variant="body2">
                  {founder.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Founders;
