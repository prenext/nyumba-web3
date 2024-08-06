"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Sidebar from "@/components/SideBar";
import AppBar from "@/components/AppBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <>
      <Box sx={{ display: "flex" }}>
      </Box>
      {children}
    </>
  );
}
