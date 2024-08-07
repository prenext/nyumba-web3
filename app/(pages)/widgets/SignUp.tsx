"use client";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  connectWallet,
  getCurrentWalletConnected,
  addWalletListener,
  disconnectWallet,
} from "@/lib/utils/web3.utils";
import { signUpUser } from "../action";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import SubmitButton from "./SubmitButton";

export default function SignUp() {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [walletBalance, setWalletBalance] = useState<string>("");

  const [error, setError] = useState<string>("");
  const [state, formAction] = useFormState(signUpUser, null);

  useEffect(() => {
    getCurrentWalletConnected(setWalletAddress, setWalletBalance);
    addWalletListener(setWalletAddress, setWalletBalance);
  }, []);

  useEffect(() => {
    if (state?.type === "error") {
      setError(state?.message);
      toast.error(state?.message);
    } else if (state?.type === "success") {
      toast.success("Account created successfully");
    }
  }, [state]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" sx={{ mt: 3 }} action={formAction}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required={true}
                fullWidth
                size="small"
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required={true}
                fullWidth
                size="small"
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required={true}
                fullWidth
                id="email"
                size="small"
                label="Email Address"
                name="email"
                autoComplete="email"
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
          <SubmitButton sx={{ mt: 3, mb: 2 }}>Sign Up</SubmitButton>
        </Box>
      </Box>
    </Container>
  );
}
