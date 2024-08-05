"use client";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  connectWallet,
  getCurrentWalletConnected,
  addWalletListener,
  disconnectWallet,
} from "@/app/lib/utils/web3.utils";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Nyumba Blockchain
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [walletBalance, setWalletBalance] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getCurrentWalletConnected(setWalletAddress, setWalletBalance);
    addWalletListener(setWalletAddress, setWalletBalance);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError("Please fill out all the fields.");
    } else if (!walletAddress) {
      setError("Please connect a Web3 wallet to continue.");
    } else {
      setError("");
      // Handle form submission (e.g., send data to the server)
      console.log(
        "Form submitted with wallet address:",
        walletAddress,
        formData
      );
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Typography
          component="p"
          variant="body1"
          sx={{ mt: 2, mb: 1, textAlign: "center" }}
        >
          To sign up, you will need to enter your details and connect a web3
          wallet.
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                size="small"
                id="firstName"
                label="First Name"
                autoFocus
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                size="small"
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                size="small"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              {!walletAddress ? (
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() =>
                    connectWallet(setWalletAddress, setWalletBalance)
                  }
                >
                  <img
                    src="metamask-logo.png"
                    alt="MetaMask Logo"
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                  Connect Your MetaMask
                </Button>
              ) : (
                <Box sx={{ mt: 1, textAlign: "center" }}>
                  <Typography variant="body1">
                    Connected Account: {walletAddress}
                  </Typography>
                  {/* <Typography variant="body1">
                    Balance: {walletBalance} ETH
                  </Typography> */}
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 1, mb: 1 }}
                    onClick={() =>
                      disconnectWallet(setWalletAddress, setWalletBalance)
                    }
                  >
                    Disconnect
                  </Button>
                  <input
                    type="hidden"
                    name="walletAddress"
                    value={walletAddress}
                  />
                  <input
                    type="hidden"
                    name="walletBalance"
                    value={walletBalance}
                  />
                </Box>
              )}
            </Grid>
          </Grid>
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
