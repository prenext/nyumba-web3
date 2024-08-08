import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { getCurrentUser } from "@/app/actions";
import UserDataForm from "./form";

const AccountPage = async () => {
  const user: any = await getCurrentUser();

  return (
    <Container
      sx={{
        padding: 3,
      }}
      maxWidth="sm"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          src={user?.avatar}
          alt={user?.firstName}
          sx={{
            width: 100,
            height: 100,
            marginBottom: 4,
            position: "relative",
            border: "4px solid",
          }}
        >
          <CameraAltIcon
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "background.paper",
              borderRadius: "50%",
              padding: 0.5,
              boxShadow: 1,
            }}
          />
        </Avatar>
        {/* text field with wallet address */}
        <TextField
          label="Wallet Address"
          value={user?.walletAddress}
          fullWidth
          variant="outlined"
          disabled
          sx={{ marginBottom: 2 }}
        ></TextField>
        <UserDataForm user={user} />
      </Box>
    </Container>
  );
};

export default AccountPage;
