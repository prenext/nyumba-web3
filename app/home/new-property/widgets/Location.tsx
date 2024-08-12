import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import MultiFileUpload from "@/components/FileUpload";
import LocationSelector from "@/components/Location";

const Step3: React.FC<{
  hidden: boolean;
  required: boolean;
}> = ({ hidden, required }) => {
  return (
    <>
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
        {/* <MultiFileUpload label={"Uplaod Images"} name={"images"} /> */}
        <LocationSelector
          name={"location"}
          label={"Property Location"}
          formState={undefined}
        />
      </Box>
    </>
  );
};

export default Step3;
