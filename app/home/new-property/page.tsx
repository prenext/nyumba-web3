"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Step1 from "./widgets/Basic";
import Step4 from "./widgets/Documents";
import Step2 from "./widgets/Info";
import Step3 from "./widgets/Location";
import SubmitButton from "@/app/(pages)/widgets/SubmitButton";
import { useFormState } from "react-dom";
import { addProperty } from "./action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const steps = ["Details", "Images", "Location ", "Documents"];

const AddPropertyPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [state, action] = useFormState(addProperty, null);
  const [formKey, setFormKey] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message);
      if (activeStep === steps.length - 1) {
        setActiveStep(0);
        setFormKey((prev) => prev + 1);
        router.push("/home");
      }
      handleNext();
    } else toast.error(state?.message);
  }, [state]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ paddingY: 4, paddingX: 2, height: "100%" }}>
      <Container
        maxWidth="md"
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Stepper activeStep={activeStep} sx={{ marginBottom: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box
          component="form"
          key={formKey}
          action={action}
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Grid container spacing={2}>
            <Step1 required={activeStep === 0} hidden={activeStep !== 0} />
            <Step2 required={activeStep === 1} hidden={activeStep !== 1} />
            <Step3 required={activeStep === 2} hidden={activeStep !== 2} />
            <Step4 required={activeStep === 3} hidden={activeStep !== 3} />
          </Grid>
          <Box flexGrow={1} />
          <input type="hidden" name="currentStep" value={activeStep} />
          <Grid item xs={6}>
            {activeStep > 0 && (
              <Button onClick={handleBack} sx={{ marginLeft: 2 }}>
                Back
              </Button>
            )}
            <SubmitButton>
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </SubmitButton>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AddPropertyPage;
