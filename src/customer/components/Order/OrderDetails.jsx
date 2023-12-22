import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function OrderDetails() {
  return (
    <div className=" p-5 lg:px-20 text-left">
      <div>
        <h1 className="font-bold text-lg py-7">Dilivery Address</h1>
        <AddressCard />
      </div>
      <div className="my-10 p-5 border shadow-lg">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex flex-wrap">
                <img
                  className="object-cover object-top h-[10rem] w-[10rem]"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/c/m/l-3261-buynewtrend-original-imagnrpdhdeke5be.jpeg?q=70"
                  alt=""
                />

                <div className="ml-5 space-y-3 ">
                  <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                  <p className="opacity-50 space-x-5 font-semibold">
                    {" "}
                    <span>Sixe: L</span> <span>Colour: White</span>{" "}
                  </p>
                  <p className="opacity-50  font-semibold mt-5">
                    Seller: Linaria
                  </p>
                  <p>₹1099</p>
                </div>
              </div>
            </Grid>

            <Grid item sx={{ alignItems: "center" }}>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon
                  className="px=2 text-5xl"
                  sx={{ fontSize: "2rem" }}
                />
                <span className="px-3">Rate and Review Products</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OrderDetails;
