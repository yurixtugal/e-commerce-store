"use client";

import Image from "next/image";
import IconButton from "./icon-button";
import { Currency, Expand, ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";


interface ProductCard {
  data: Product;
}

const ProductCard = ({ data }: ProductCard) => {
  const handleClick = () => {
    alert("Moving to product page");
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    alert("Doing something")
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    alert("Doing something")
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
      <Image 
          src={data.images?.[0]?.imageUrl} 
          alt="" 
          fill
          className="aspect-square object-cover rounded-md"
        />
       <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
       <div className="flex gap-x-6 justify-center">
       <IconButton
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart} 
              icon={<ShoppingCart size={20} className="text-gray-600" />} 
            />
       </div>
      </div>
    </div>

         {/* Description */}
         <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.Category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency />
      </div>

    </div>
  );
};

export default ProductCard;
