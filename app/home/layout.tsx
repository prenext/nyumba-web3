"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Sidebar from "@/components/SideBar";
import AppBar from "@/components/AppBar";
import { getCurrentUser } from "../actions";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to manage the sidebar open/close state
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const currentUser: any = await getCurrentUser();
    setUser(currentUser);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar user={user} open={open} toggleDrawer={toggleDrawer} />
        <Sidebar user={user} open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
