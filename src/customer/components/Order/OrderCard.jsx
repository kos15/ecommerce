import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

function OrderCard() {

  const navigate = useNavigate();
  return (
    <div className="text-left shadow-lg mb-5 hover:shadow-2xl border" onClick={() => navigate(`/account/order/${4}`)}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className=" flex cursor-pointer">
            <img className="object-cover object-top h-[10rem] w-[10rem]"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/c/m/l-3261-buynewtrend-original-imagnrpdhdeke5be.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 mt-5 space-y-3 ">
              <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
              <p className="opacity-50  font-semibold">Sixe: L</p>
              <p className="opacity-50  font-semibold mt-5">Colour: White</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
            <p className="mt-5 text-lg">₹1099</p>
        </Grid>

        <Grid item xs={4}>
            {true && <div>
                <p className="mt-5">
                <AdjustIcon sx={{width: '15px', height: '15px'}} className="text-green-600 mr-2 text-lg"/>
                <span>
                    Delivered on March 03
                </span>
                <p className="text-sm">
                    Your item has been delivered
                </p>
            </p>
                </div>}
           {false && <p>
                <span>
                    Expected Delivery On Mar 03
                </span>
            </p>}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;
