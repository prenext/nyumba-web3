import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import IntegrateIcon from "@mui/icons-material/InsertLink"; // Replace with actual icon
import PreviewIcon from "@mui/icons-material/Preview"; // Replace with actual icon
import ShareIcon from "@mui/icons-material/Share"; // Replace with actual icon

const steps = [
  {
    title: "Start By Integrating",
    description:
      "In tortor amet fringilla sed porta nec semper odio consectetur vitae.",
    icon: <IntegrateIcon sx={{ fontSize: 40 }} />,
    bgColor: "#007bff", // Change color as needed
  },
  {
    title: "Get The Preview",
    description:
      "Tempor eu congue semper odio dolor tincidunt posuere tellus donec.",
    icon: <PreviewIcon sx={{ fontSize: 40 }} />,
    bgColor: "#ffc107", // Change color as needed
  },
  {
    title: "Share Your Work",
    description:
      "Morbi habitant diam nulla tincidunt corper sollicitudin consect.",
    icon: <ShareIcon sx={{ fontSize: 40 }} />,
    bgColor: "#fd7e14", // Change color as needed
  },
];

const ThreeSteps = () => {
  return (
    <Box p={4} textAlign="center" py={10} my={10}>
      <Typography variant="h3" gutterBottom>
        Three Easy Steps
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Avatar
                  sx={{
                    bgcolor: step.bgColor,
                    width: 60,
                    height: 60,
                    margin: "0 auto 16px",
                  }}
                >
                  {step.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ThreeSteps;
