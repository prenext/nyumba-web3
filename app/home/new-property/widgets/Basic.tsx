import React from "react";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const Step1: React.FC<{
  hidden: boolean;
  required: boolean;
}> = ({ hidden, required }) => {
  return (
    <>
      <Box
        display={hidden ? "none" : "flex"}
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          gap: 2,
          pt: 3,
          mx: "auto",
          maxWidth: "sm",
        }}
      >
        <TextField name="title" label="Title" fullWidth required={required} />
        <TextField name="description" label="Description" fullWidth />
        <TextField
          name="price"
          label="Price (in USD)"
          fullWidth
          type="number"
          required={required}
        />
        <FormControl fullWidth required={required}>
          <InputLabel id="property-type-label">Property Type</InputLabel>
          <Select
            labelId="property-type-label"
            id="property-type"
            name="propertyType"
            label="Property Type"
          >
            <MenuItem value="land">Land</MenuItem>
            <MenuItem value="lease-land">Lease Land</MenuItem>
            <MenuItem value="real-estate">Real Estate</MenuItem>
            <MenuItem value="rental">Rental</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Step1;
