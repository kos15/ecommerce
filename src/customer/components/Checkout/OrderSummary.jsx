import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";

function OrderSummary() {
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
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>

      <div className="mt-10">
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>
          <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 pl-5 ">
            <div className="border">
              <p className="uppercase font-bold opacity-50 pb-4">
                Price Details
              </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
