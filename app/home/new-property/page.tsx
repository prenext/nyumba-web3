"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const TwoSidedLayout = () => {
  return (
    <Box sx={{ paddingY: 4, paddingX: 2 }}>
      <Container maxWidth="sm">
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="title" label="Title" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField name="price" label="Price" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField name="location" label="Location" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField name="image" label="Image URL" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Add Property
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default TwoSidedLayout;
