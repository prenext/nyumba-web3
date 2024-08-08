import React from "react";
import { Box, Grid } from "@mui/material";
import MultiFileUpload from "@/components/FileUpload";

const Step4: React.FC<{
  hidden: boolean;
  required: boolean;
}> = ({ hidden, required }) => {
  return (
    <Box
      display={hidden ? "none" : "flex"}
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        gap: 2,
        pt: 3,
        mx: "auto",
        maxWidth: "sm",
      }}
    >
      <MultiFileUpload
        label={
          "Add You Property Documentation such as licence, title deed and proof of ownership. This will be used to verify your property before it is listed."
        }
        name={"documents"}
      />
    </Box>
  );
};

export default Step4;
