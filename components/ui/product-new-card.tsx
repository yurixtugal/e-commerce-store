"use client";

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
  showDetail?: boolean;
}

import { useState } from "react";
import { getDetColors, getSize } from "@/lib/utils";
import { useRouter } from "next/navigation";

const ProductNewCard = ({ data, showDetail }: ProductCard) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  const route = useRouter();

  const arrColors = getDetColors(data);

  const arrSizes = getSize(data);

  return (
    <Card
      className="rounded-md shadow-lg hover:bg-gray-100 transition hover:shadow-xl hover:cursor-pointer"
      onMouseEnter={() => setImageHovered(true)}
      onMouseLeave={() => setImageHovered(false)}
      onClick={() => route.push(`/product/${data.id}`)}
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
          <div className="font-semibold text-xl">{data.name}</div>
          <div className="text-gray-500 pt-1.5">{data.Category?.name}</div>
          {showDetail && data.isVariant && (
            <div className="text-md text-gray-500 pt-1.5">
              {arrSizes?.map((size) => size.value).join(", ")}
            </div>
          )}

          {showDetail && data.isVariant && (
            <div className=" text-gray-500 pt-1.5">
              {arrColors?.map((color) => (
                <div key={`color_${data.id}`}
                  className="w-6 h-6 rounded-full inline-block mr-1"
                  style={{ backgroundColor: color.value }}
                ></div>
              ))}
            </div>
          )}
          <div className="font-semibold text-xl pt-3">
            S/. {data.basePrice}{" "}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductNewCard;
