import PropertyCard from "@/components/MyPropertyCard";
import React from "react";
import { getPropertiesByUserAddress } from "./action";
import { Box, Grid } from "@mui/material";
import Link from "next/link";

const PropertyList = async () => {
  const data: any = await getPropertiesByUserAddress();

  // null if data is not an array or empty
  if (data.length === 0) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          p: 2,
        }}
      >
        <h1>No properties found</h1>
        <p>
          Click <Link href="/home/new-property">here</Link> to add a new
          property
        </p>
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {data.map((property: any, index: any) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PropertyList;
