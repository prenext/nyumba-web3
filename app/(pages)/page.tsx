// src/App.tsx
import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import { globalStyles } from "../lib/styles/global.styles";

function App() {
  return (
    <div>
      <AppBar position="static" sx={globalStyles.appBar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SUSHI
          </Typography>
          <Box sx={globalStyles.navLinks}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Community</Button>
            <Button color="inherit">Partner</Button>
            <Button color="inherit">Social</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={globalStyles.mainContainer}>
        <Typography variant="h2" component="h1" gutterBottom>
          Be a <span style={{ color: "#00D1FF" }}>DeFi Chef</span> ...with
          Sushi!
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Swap, earn, stack yields, lend, borrow, leverage all on one
          decentralized, community-driven platform. Welcome home to DeFi.
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: "10px" }}
          >
            Use App
          </Button>
          <Button variant="outlined" color="primary">
            Advance More
          </Button>
        </Box>
        <Box sx={globalStyles.cardContainer}>
          <Card sx={globalStyles.card}>
            <CardContent>
              <Typography variant="h5">$1.28</Typography>
              <Typography>₿SUSHI Price</Typography>
            </CardContent>
          </Card>
          <Card sx={globalStyles.card}>
            <CardContent>
              <Typography variant="h5">$1.59b</Typography>
              <Typography>Total Liquidity</Typography>
            </CardContent>
          </Card>
          <Card sx={globalStyles.card}>
            <CardContent>
              <Typography variant="h5">$222.5b</Typography>
              <Typography>Total Volume</Typography>
            </CardContent>
          </Card>
          <Card sx={globalStyles.card}>
            <CardContent>
              <Typography variant="h5">14.40k</Typography>
              <Typography>Total Pairs</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={globalStyles.cardContainer}>
          <Card sx={globalStyles.defiCard}>
            <img
              src="/path/to/multi-chain-amm-image.png"
              alt="Multi-chain AMM"
              style={globalStyles.defiCardImage as React.CSSProperties}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={globalStyles.defiCardTitle}
              >
                Multi-chain AMM
              </Typography>
              <Typography sx={globalStyles.defiCardDescription}>
                The most competitive rates for DeFi bluechips anywhere. Switch
                to other chains in one click.
              </Typography>
              <Box sx={globalStyles.defiCardButton}>
                <Button variant="contained" color="primary">
                  Enter Exchange
                </Button>
              </Box>
            </CardContent>
          </Card>
          <Card sx={globalStyles.defiCard}>
            <img
              src="/path/to/kashi-lending-image.png"
              alt="Kashi Lending"
              style={globalStyles.defiCardImage as React.CSSProperties}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={globalStyles.defiCardTitle}
              >
                Kashi Lending
              </Typography>
              <Typography sx={globalStyles.defiCardDescription}>
                Isolated lending markets, elastic interest rates. Leverage long
                or short or create your own market.
              </Typography>
              <Box sx={globalStyles.defiCardButton}>
                <Button variant="contained" color="primary">
                  Enter Kashi
                </Button>
              </Box>
            </CardContent>
          </Card>
          <Card sx={globalStyles.defiCard}>
            <img
              src="/path/to/xsushi-staking-image.png"
              alt="xSUSHI Staking"
              style={globalStyles.defiCardImage as React.CSSProperties}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={globalStyles.defiCardTitle}
              >
                xSUSHI Staking
              </Typography>
              <Typography sx={globalStyles.defiCardDescription}>
                Earn governance rights and 0.05% of all swaps from all chains in
                one simple place.
              </Typography>
              <Box sx={globalStyles.defiCardButton}>
                <Button variant="contained" color="primary">
                  Enter Sushibar
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        {/* Evolving Community Section */}
        <Box sx={globalStyles.evolvingCommunitySection}>
          <Typography variant="h4" gutterBottom>
            An evolving community for an evolving DeFi landscape
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Card sx={globalStyles.evolvingCommunityCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    22+
                  </Typography>
                  <Typography>Wallets Supported</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={globalStyles.evolvingCommunityCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    14
                  </Typography>
                  <Typography>Chains Supported</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={globalStyles.evolvingCommunityCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    150k+
                  </Typography>
                  <Typography>Sushi Holders</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        {/* Partners Section */}
        <Box sx={globalStyles.partnersSection}>
          <Typography variant="h4" gutterBottom>
            Meet the partners helping us cook up the tastiest dishes in DeFi.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Card sx={globalStyles.partnerCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Pickle Finance
                  </Typography>
                  <Typography>
                    Pickle helps users grow their holdings via automated yield
                    farming strategies.
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    <Button variant="contained" color="primary">
                      Open Web
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={globalStyles.partnerCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Aave
                  </Typography>
                  <Typography>
                    Aave is an open source and non-custodial liquidity protocol
                    for earning interest on deposits and borrowing assets.
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    <Button variant="contained" color="primary">
                      Open Web
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={globalStyles.partnerCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Akropolis
                  </Typography>
                  <Typography>
                    Akropolis aims to provide the infrastructure for the next
                    generation of decentralized financial services.
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    <Button variant="contained" color="primary">
                      Open Web
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={globalStyles.partnerCard}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Keep3r Network
                  </Typography>
                  <Typography>
                    Keep3r Network is a decentralized keeper network for
                    projects that need external developers and for external
                    teams to find keeper jobs.
                  </Typography>
                  <Box sx={{ textAlign: "center" }}>
                    <Button variant="contained" color="primary">
                      Open Web
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        {/* Footer */}
        <Box sx={globalStyles.footer}>
          <Box sx={globalStyles.footerTop}>
            <Typography variant="h6">sushi</Typography>
            <Box>
              <Typography>PRODUCTS</Typography>
              <Typography>SUPPORT</Typography>
              <Typography>PROTOCOL</Typography>
            </Box>
          </Box>
          <Box sx={globalStyles.footerBottom}>
            <Typography variant="body2">
              Sign up for our monthly newsletter
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Enter your email address"
                sx={{ marginRight: "10px" }}
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
