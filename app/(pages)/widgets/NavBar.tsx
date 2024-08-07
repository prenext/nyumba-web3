import { globalStyles } from '@/app/lib/styles/global.styles';
import { AppBar, Container, Box, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Props {
    // Define your component's props here
}

const NavBar: React.FC<Props> = () => {
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
        </div>
    );
};

export default NavBar;