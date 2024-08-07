"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Sidebar from "@/components/SideBar";
import AppBar from "@/components/AppBar";
import NavBar from "./widgets/NavBar";
import Footer from "./widgets/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <>
     
      <NavBar/>
      
      
      {children}
      <Footer/>
    </>
  );
}
