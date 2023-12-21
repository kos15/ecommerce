import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function CartItem() {
    const [count, setCount] = useState(1);
  return (
    <div className="p-5 mb-5 shadow-lg border rounded-md text-start">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1 ">
          <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-50">Sixe: L, White</p>
          <p className="opacity-50 mt-5">Seller: Crishtaliyo 2facision</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="opacity-50 line-through">211</p>
            <p className="font-semibold">199</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{color: "RGB(145 85 253)"}} onClick={() => setCount(count <=0 ? 0 : count - 1)}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{count}</span>
          <IconButton sx={{color: "RGB(145 85 253)"}}  onClick={() => setCount(count + 1)}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
            <Button><DeleteOutlineIcon /> <span className="px-2">Remove</span></Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
