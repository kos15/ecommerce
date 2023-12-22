import { Grid, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

function OrderTracker({ activeStep }) {
  return (
    <div className="w-full">
      <Grid container sx={{justifyContent:'space-between'}}>
        <Grid item xs={9}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step>
                <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>

        <Grid item xs={1.5} className="py-3">
            <p className="text-bold text-indigo-600 text-xl">CANCEL ORDER</p>
             </Grid>
      </Grid>
    </div>
  );
}

export default OrderTracker;
