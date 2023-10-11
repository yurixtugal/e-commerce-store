"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCard {
  data: Product;
}

import { useState } from "react";
import { getDetColors } from "@/lib/utils";

const ProductNewCard = ({ data }: ProductCard) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  const arrColors = getDetColors(data);

  return (
    <Card
      className="rounded-md shadow-lg hover:bg-gray-100 transition"
      onMouseEnter={() => setImageHovered(true)}
      onMouseLeave={() => setImageHovered(false)}
    >
      <CardContent className="p-3 ">
        <AspectRatio ratio={1}>
          <div
            className={`relative w-full h-full ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          >
            <Image
              src={data.images?.[0]?.imageUrl}
              alt={data.name}
              fill
              className={`rounded-md object-cover w-full h-full ${
                imageHovered ? "transform scale-100" : "scale-95"
              } gb-transparent hover:transform  hover:scale-100 transition`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full animate-ping"></div>
            </div>
          )}
        </AspectRatio>
        <div className="pt-3">
          <div className="font-semibold text-lg">{data.name}</div>
          <div className="text-md text-gray-500">{data.Category?.name}</div>

          <div className="text-md text-gray-500 pt-4">S/. {data.basePrice} </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductNewCard;
