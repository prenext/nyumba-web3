"use client";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  getCurrentWalletConnected,
  addWalletListener,
  connectWallet,
  disconnectWallet,
} from "@/lib/utils/web3.utils";
import { useFormState } from "react-dom";
import { signInUser } from "../action";
import SubmitButton from "./SubmitButton";

const SignIn: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [walletBalance, setWalletBalance] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [state, action] = useFormState(signInUser, null);

  useEffect(() => {
    getCurrentWalletConnected(setWalletAddress, setWalletBalance);
    addWalletListener(setWalletAddress, setWalletBalance);
  }, []);

  useEffect(() => {
    console.log("User signed in successfully");
  }, [state]);

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" action={action} sx={{ mt: 1 }}>
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
                onClick={() =>
                  disconnectWallet(setWalletAddress, setWalletBalance)
                }
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
          <SubmitButton sx={{ mt: 3, mb: 2 }}>Sign In</SubmitButton>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
