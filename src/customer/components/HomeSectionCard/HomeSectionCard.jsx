import React from "react";

function HomeSectionCard({ product }) {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer shadow-lg rounded-lg overflow-hidden w-[15rem] mx-3 border">
      <div className="w-[10rem] flex h-[13rem]">
        <img
          className="object-center object-top w-full h-full"
          src={product?.imageUrl || product?.image}
          alt={product.brand}
        />
      </div>

      <div className="p-4">
        <h3 className="text-1g font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {product.title}
        </p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
