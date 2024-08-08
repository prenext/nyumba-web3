"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Toolbar } from "@mui/material";
import DropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  toggleDrawer: () => void;
  user?: any;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, user }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function CustomAppBar({
  open,
  toggleDrawer,
  user,
}: AppBarProps) {
  const pathname = usePathname();
  const breadcrumbParts = pathname.split("/").filter((part) => part);

  return (
    <AppBar
      position="absolute"
      color="transparent"
      sx={{
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        backgroundColor: "rgba(255, 255, 255, 0.72)",
      }}
      open={open}
      toggleDrawer={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {breadcrumbParts.length === 0
            ? "Dashboard"
            : breadcrumbParts.map((part, index) => {
                const path = `/${breadcrumbParts
                  .slice(0, index + 1)
                  .join("/")}`;
                return (
                  <React.Fragment key={index}>
                    {index > 0 && " / "}
                    <Link
                      href={path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {part.split("-").join(" ")}
                    </Link>
                  </React.Fragment>
                );
              })}
        </Typography>
        <Typography>$200.00</Typography>
        <Link href="/home/account">
          <IconButton color="inherit">
            <Avatar
              alt={user?.firstName}
              src={user?.avatar}
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
