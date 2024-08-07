import { globalStyles } from "@/lib/styles/global.styles";
import { AppBar, Container, Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  // Define your component's props here
}

const NavBar: React.FC<Props> = () => {
  return (
    <AppBar
      position="sticky"
      sx={globalStyles.appBar}
      elevation={0}
      color="transparent"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fffffff0",
          alignItems: "center",
        }}
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
          <Link href="/">
            <Image
              width={100}
              height={40}
              src="nyumba-logo.svg"
              alt="Nyumba Logo"
            />
          </Link>
          <Box sx={globalStyles.navLinks}>
            <Link href="/home">
              <Button variant="text" color="primary">
                Dashboard
              </Button>
            </Link>
            <Link href="/properties">
              <Button variant="text" color="primary">
                Properties
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="text" color="primary">
                How It Works
              </Button>
            </Link>
            <a href="/?showAuthDialog=true&initialPage=sign-in">
              <Button variant="text" color="primary">
                Sign In
              </Button>
            </a>
            <a href="/?showAuthDialog=true&initialPage=sign-up">
              <Button variant="contained" size="small" color="primary">
                Sign Up
              </Button>
            </a>
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
};

export default NavBar;
