"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function ScrollDialog({
  isOpen,
  initialPage,
}: {
  isOpen: boolean;
  initialPage: string;
}) {
  const [open, setOpen] = React.useState(isOpen);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [page, setPage] = React.useState(initialPage);

  const handleSwitch = () => {
    setPage((prevPage) => (prevPage === "sign-in" ? "sign-up" : "sign-in"));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          {page === "sign-in" ? "Sign In" : "Sign Up"}
          <Box
            component="button"
            sx={{
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              color: "inherit",
              padding: 0,
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Box>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {page === "sign-in" ? <SignIn /> : <SignUp />}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSwitch}>
            {page === "sign-in"
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
