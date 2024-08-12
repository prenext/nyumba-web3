"use client";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UndoIcon from "@mui/icons-material/Undo";
import { useFormState } from "react-dom";
import { undoRequest, declineRequest, acceptRequest } from "./action";
import SubmitButton from "@/app/(pages)/widgets/SubmitButton";

const RequestItem = ({ request }: { request: any }) => {
  const { requestedByUser, property, status } = request;
  const [remove, undoAction] = useFormState(undoRequest, null);
  const [decline, declineAction] = useFormState(declineRequest, null);
  const [accept, acceptAction] = useFormState(acceptRequest, null);

  // Determine the color based on the status
  let statusColor = "textSecondary";
  if (status === "approved") statusColor = "primary";
  if (status === "cancelled") statusColor = "error";
  if (status === "pending") statusColor = "warning.main";

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          src={requestedByUser?.avatar?.url}
          alt={requestedByUser?.firstName}
        >
          {requestedByUser?.firstName?.[0]}
        </Avatar>
      </ListItemAvatar>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <ListItemText
            primary={
              <Typography component="span" variant="body1">
                {requestedByUser?.firstName} {requestedByUser?.lastName}
              </Typography>
            }
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {property?.title || "Property"}: ${property?.price}
                </Typography>
                <br />
                <Typography
                  component="span"
                  variant="body2"
                  color={statusColor}
                  fontWeight="bold"
                >
                  {status}
                </Typography>
              </>
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          container
          alignItems="center"
          justifyContent="flex-end"
        >
          {status === "pending" && (
            <>
              <Box mr={1} component="form" action={acceptAction}>
                <input type="hidden" name="requestId" value={request._id} />

                <SubmitButton
                  //@ts-ignore
                  variant="contained"
                  color="primary"
                  aria-label="accept"
                >
                  <Typography variant="body2">Accept</Typography>
                </SubmitButton>
              </Box>
              <Box component="form" action={declineAction} mr={1}>
                <input type="hidden" name="requestId" value={request._id} />
                <SubmitButton
                  //@ts-ignore
                  variant="outlined"
                  color="error"
                  aria-label="decline"
                >
                  <Typography variant="body2">Decline</Typography>
                </SubmitButton>
              </Box>
            </>
          )}
          {(status === "approved" || status === "cancelled") && (
            <Box
              component="form"
              action={undoAction}
              display="flex"
              alignItems="center"
            >
              <SubmitButton sx={{ all: "unset" }}>
                <UndoIcon color="error" fontSize="small" />
                <input type="hidden" name="requestId" value={request._id} />

                <Typography
                  component="span"
                  variant="body2"
                  color="error"
                  ml={0.5}
                  sx={{ cursor: "pointer" }}
                >
                  Undo
                </Typography>
              </SubmitButton>
            </Box>
          )}
          <IconButton edge="end" aria-label="more">
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default RequestItem;
