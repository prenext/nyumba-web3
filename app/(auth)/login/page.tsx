"use client";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  getCurrentWalletConnected,
  addWalletListener,
  connectWallet,
  disconnectWallet,
} from "@/app/lib/utils/web3.utils";

const SignIn: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [walletBalance, setWalletBalance] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getCurrentWalletConnected(setWalletAddress, setWalletBalance);
    addWalletListener(setWalletAddress, setWalletBalance);
  }, []);

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!walletAddress) {
      setError("Please connect a Web3 wallet to continue.");
    } else {
      // Handle form submission (e.g., send data to the server)
      console.log("Form submitted with wallet address:", walletAddress);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Typography component="p" variant="body1" sx={{ mt: 2, mb: 1 }}>
          Please connect a Web3 wallet to continue
        </Typography>
        <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
          {!walletAddress ? (
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => connectWallet(setWalletAddress, setWalletBalance)}
            >
              <img
                src="metamask-logo.png"
                alt="MetaMask Logo"
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              Connect with MetaMask
            </Button>
          ) : (
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body1">
                Connected Account: {walletAddress}
              </Typography>
              <Typography variant="body1">
                Balance: {walletBalance} ETH
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => disconnectWallet(setWalletAddress, setWalletBalance)}
              >
                Disconnect
              </Button>
              <input type="hidden" name="walletAddress" value={walletAddress} />
              <input type="hidden" name="walletBalance" value={walletBalance} />
            </Box>
          )}
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
            Sign In
          </Button>
        </Box>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Recovery
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignIn;
