import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Avatar,
  Stack,
} from "@mui/material";
import { globalStyles } from "../lib/styles/global.styles";
import Image from "next/image";
import Link from "next/link";

function App() {
  return (
    <div>
      <AppBar
        position="sticky"
        sx={globalStyles.appBar}
        color="transparent"
        elevation={0}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "xl",
            height: "54px",
          }}
        >
          <Image
            width={100}
            height={40}
            src="nyumba-logo.svg"
            alt="Nyumba Logo"
          />
          <Box sx={globalStyles.navLinks}>
            <Link href="/home">
              <Button variant="text" color="primary">
                Home
              </Button>
            </Link>
            <Link href="/properties">
              <Button variant="text" color="primary">
                Properties
              </Button>
            </Link>
            <Link href="/#">
              <Button variant="text" color="primary">
                How It Works
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="text" color="primary">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="contained" size="small" color="primary">
                Sign Up
              </Button>
            </Link>
          </Box>
        </Container>
      </AppBar>
      <Container sx={globalStyles.mainContainer}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to <span style={{ color: "#00D1FF" }}>Nyumba Blockchain</span>
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Buy and sell properties securely and transparently using blockchain
          technology.
        </Typography>

        <ArchigreekInfo />

        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: "10px" }}
          >
            View Properties
          </Button>
          <Button variant="outlined" color="primary">
            Learn More
          </Button>
          <Box
            sx={{ backgroundColor: "common.white", color: "grey.900", py: 4 }}
          >
            <Container maxWidth="md">
              <Typography variant="h4" gutterBottom>
                We’re not just another design studio.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Our team is dedicated to creating user-centered designs that not
                only look great, but also drive results. We understand that in
                today’s digital age, user experience is everything.
              </Typography>
              <Typography variant="body1" gutterBottom>
                That’s why our approach to design is centered around
                understanding the needs and behaviors of your target audience.
                So why settle for an average design when you can have one that
                truly stands out with us.
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" mt={2}>
                <Avatar src="https://i.pinimg.com/564x/5e/10/e2/5e10e28f86f6ea191062bb924e1b4f40.jpg" alt="Avatar 1" />
                <Avatar src="https://i.pinimg.com/564x/f6/72/97/f67297871c55069e0632b31d56d4bc39.jpg" alt="Avatar 2" />
                <Avatar src="https://i.pinimg.com/564x/34/53/60/345360f8c818beb8c85b3b453ea030ee.jpg" alt="Avatar 3" />
                <Button variant="contained" color="success">
                  Your Success Allies!
                </Button>
              </Stack>
            </Container>
          </Box>
        </Box>
        <Box sx={globalStyles.cardContainer}>
          <Card sx={globalStyles.card}>
            <CardContent>
              <Typography variant="h5">100+</Typography>
              <Typography>Properties Listed</Typography>
            </CardContent>
          </Card>
          <Card sx={globalStyles.card}>
            <CardContent>
              <Typography variant="h5">50+</Typography>
              <Typography>Countries Covered</Typography>
            </CardContent>
          </Card>
          <Card sx={globalStyles.card}>
            <CardContent>
              <Typography variant="h5">24/7</Typography>
              <Typography>Support Available</Typography>
            </CardContent>
          </Card>
          <Card sx={globalStyles.card}>
            <CardContent>
              <Typography variant="h5">1,000+</Typography>
              <Typography>Verified Sellers</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={globalStyles.cardContainer}>
          <Card sx={globalStyles.defiCard}>
            <img
              src="https://picsum.photos/200/100"
              alt="Property Listings"
              style={globalStyles.defiCardImage as React.CSSProperties}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={globalStyles.defiCardTitle}
              >
                Property Listings
              </Typography>
              <Typography sx={globalStyles.defiCardDescription}>
                Browse a wide range of properties available for sale. Use
                filters to find your perfect home.
              </Typography>
              <Box sx={globalStyles.defiCardButton}>
                <Button variant="contained" color="primary">
                  View Listings
                </Button>
              </Box>
            </CardContent>
          </Card>
          <Card sx={globalStyles.defiCard}>
            <img
              src="https://picsum.photos/200/100"
              alt="Secure Payments"
              style={globalStyles.defiCardImage as React.CSSProperties}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={globalStyles.defiCardTitle}
              >
                Secure Payments
              </Typography>
              <Typography sx={globalStyles.defiCardDescription}>
                Make payments securely using blockchain technology. Your
                transactions are safe with us.
              </Typography>
              <Box sx={globalStyles.defiCardButton}>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </Box>
            </CardContent>
          </Card>
          <Card sx={globalStyles.defiCard}>
            <img
              src="https://picsum.photos/200/100"
              alt="Blockchain Transparency"
              style={globalStyles.defiCardImage as React.CSSProperties}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={globalStyles.defiCardTitle}
              >
                Blockchain Transparency
              </Typography>
              <Typography sx={globalStyles.defiCardDescription}>
                Enjoy the transparency and trust that blockchain brings to
                property transactions.
              </Typography>
              <Box sx={globalStyles.defiCardButton}>
                <Button variant="contained" color="primary">
                  Discover How
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        {/* Evolving Community Section */}
        <Box sx={globalStyles.evolvingCommunitySection}>
          <Typography variant="h4" gutterBottom>
            Join a growing community of blockchain property enthusiasts
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Card sx={globalStyles.evolvingCommunityCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    20,000+
                  </Typography>
                  <Typography>Happy Users</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={globalStyles.evolvingCommunityCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    50+
                  </Typography>
                  <Typography>Countries Covered</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={globalStyles.evolvingCommunityCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    1000+
                  </Typography>
                  <Typography>Verified Properties</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        {/* Partners Section */}
        <Box sx={globalStyles.partnersSection}>
          <Typography variant="h4" gutterBottom>
            Our Trusted Partners
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Card sx={globalStyles.partnerCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Property Partner 1
                  </Typography>
                  <Typography>
                    Partner 1 helps streamline property transactions with their
                    innovative solutions.
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    <Button variant="contained" color="primary">
                      Visit Partner
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={globalStyles.partnerCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Property Partner 2
                  </Typography>
                  <Typography>
                    Partner 2 provides secure and efficient blockchain solutions
                    for real estate.
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    <Button variant="contained" color="primary">
                      Visit Partner
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={globalStyles.partnerCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Property Partner 3
                  </Typography>
                  <Typography>
                    Partner 3 offers a platform for transparent and efficient
                    property listings.
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    <Button variant="contained" color="primary">
                      Visit Partner
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Container>
          <Box textAlign="center" my={4}>
            <Typography variant="h4" component="p" gutterBottom>
              Consider collaborating? Reach us. We want to collaborate with you
              to build an amazing stuff
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={2}
            >
              <Button
                variant="contained"
                color="success"
                endIcon={<ArrowForwardIcon />}
              >
                Let’s talk
              </Button>
            </Box>
          </Box>
        </Container>
        <Container>
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" gutterBottom>
                SOCIAL
              </Typography>
              <Box>
                <IconButton
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="h6" gutterBottom>
                CONTACT US
              </Typography>
              <Typography>Email:</Typography>
              <Typography>Phone: 1.666.727.8000</Typography>
              <Typography>Hours: Monday - Thursday: 9AM - 7PM ET</Typography>
              <Typography>Friday: 9AM - 2PM ET</Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default App;
