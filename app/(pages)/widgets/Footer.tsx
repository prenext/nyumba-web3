import { globalStyles } from '@/lib/styles/global.styles';
import { Box, Typography, TextField, Button } from '@mui/material';
import React from 'react';

interface FooterProps {
    // Define any props you need for the Footer component
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            <Box sx={globalStyles.footer}>
          <Box sx={globalStyles.footerTop}>
            <Typography variant="h6">Nyumba Blockchain</Typography>
            <Box>
              <Typography>PROPERTIES</Typography>
              <Typography>SUPPORT</Typography>
              <Typography>ABOUT</Typography>
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
        </footer>
    );
};

export default Footer;