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
import { cn, createUrl, getDetColors, getSize } from "@/lib/utils";
import { useRouter,usePathname, useSearchParams } from "next/navigation";
import { Separator } from "./separator";
import { Button } from "./button";
import { Plus, ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import VariantSelector from "./variant-selector";

const ProductCardDetail = ({ data, showDetail }: ProductCard) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  showDetail = true;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const strIndex = searchParams.get("index");
  const currentIndex = strIndex ? parseInt(strIndex) : 0;

  return (
    <Card
      className="rounded-md shadow-lg"
    >
      <CardContent className="p-3 grid grid-cols-1 md:grid-cols-2">
      <AspectRatio ratio={1}>
          <div
            className={`relative w-full h-full flex flex-1 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          >
            <Image
              src={data.images?.[currentIndex]?.imageUrl}
              alt={data.name} 
              fill
              className={`rounded-md object-cover w-full h-full scale-95 ring-2 ring-black`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full animate-ping"></div>
            </div>
          )}
          
        </AspectRatio>
        
        <div className="pt-5 pr-5 pb-5 pl-[8px] sm:pl-5 flex flex-col">
          <div className="mb-5 text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">{data.name} - {data.Category.name}</div>
          <div className="mb-5 text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-gray-500">
          S./ {data.basePrice} 
          </div> 
          <Separator className="mb-5 h-[3px]" />
          <VariantSelector data={data} />
                
          <div className="pt-5 flex w-96 mb-5">
              <Button className="text-md"><span >Add to Cart</span> <ShoppingCart className="ml-2" size={20} /></Button>
          </div>
          
          <div className={cn("order-first md:order-last pb-5",data.images.length<=1?"hidden":"")}>
            <ul className="flex space-x-5">
              {data.images?.map((image, index) => {
                const optionSearchParams = new URLSearchParams(
                  searchParams.toString()
                );
                optionSearchParams.set("index", index.toString());
                const optionUrl = createUrl(pathname, optionSearchParams);

                return (<li key={index} className="border rounded-md hover:cursor-pointer" onClick={() => {
                  
                  router.replace(optionUrl, { scroll: false })
                }}>
                  <Image
                    src={image.imageUrl}
                    alt={data.name}
                    width={100}
                    height={100}
                    className={cn("rounded-md object-cover",currentIndex===index?"ring-2 ring-black":"opacity-60")}
                  />
                </li>
              )})}
            </ul>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardDetail;
