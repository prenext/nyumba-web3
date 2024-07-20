"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/lib/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Add other providers here */}
      {children}
    </ThemeProvider>
  );
};

export default Providers;
