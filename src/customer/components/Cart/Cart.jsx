import { Button, Grid } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const priceDetails = [
    {
      name: "Price",
      value: 4697,
      isRupeeIcon: true,
      isMinusSign: false,
      color: "black",
    },
    {
      name: "Discount",
      value: 4697,
      isRupeeIcon: true,
      isMinusSign: true,
      color: "green-600",
    },
    {
      name: "Delivery Charges",
      value: "Free",
      isRupeeIcon: false,
      isMinusSign: false,
      color: "green-600",
    },
  ];
  const navigate = useNavigate();
  const handelCheckout = () => navigate("/checkout?step=2");
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative sm:px-5 xs:pt-2">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 px-5 ">
          <div className="border">
            <p className="uppercase font-bold opacity-50 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold px-5 mb-10">
              {priceDetails.map((item) => (
                <div className="flex justify-between pt-3 text-black">
                  <span>{item.name}</span>
                  <span className={`text-${item.color}`}>
                    {item.isMinusSign && "-"}
                    {item.isRupeeIcon && "र"}
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total</span>
                <span className="text-green-600">र2345</span>
              </div>
            </div>
            <Button
              onClick={handelCheckout}
              variant="contained"
              sx={{
                px: "2.5rem",
                py: ".7rem",
                bgcolor: "#9155fd",
                my: "1rem",
              }}
              className="w-full"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>

      {/* <Grid container gap={2} className='px-10 py-5'>
            <Grid item xs={7}> 
                <CartItem />
            </Grid>

            <Grid item xs={3}>
            <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-50 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold px-5 mb-10">
              {priceDetails.map((item) => (
                <div className="flex justify-between pt-3 text-black">
                  <span>{item.name}</span>
                  <span className={`text-${item.color}`}>
                    {item.isMinusSign && "-"}
                    {item.isRupeeIcon && "र"}
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total</span>
                <span className="text-green-600">र2345</span>
              </div>
            </div>
            <Button
              variant="contained"
              sx={{
                px: "2.5rem",
                py: ".7rem",
                bgcolor: "#9155fd",
                my: "1rem",
              }}
              className="w-full"
            >
              Checkout
            </Button>
          </div>
        </div></Grid>
        </Grid> */}
    </div>
  );
}

export default Cart;
