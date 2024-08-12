import PropertyCard from "@/components/MyPropertyCard";
import React from "react";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import { getCookie } from "@/lib/utils/cookies.util";

const PropertyList = async () => {
  // Fetch properties from the API

  const userAddress: { name: string; value: string } | any = await getCookie(
    "wallet-address"
  );

  const response = await fetch("http://localhost:3000/api/properties", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userAddress.value}`,
    },
  });

  if (!response.ok) {
    return <h1>Error fetching properties</h1>;
  }

  const data = await response.json();

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
