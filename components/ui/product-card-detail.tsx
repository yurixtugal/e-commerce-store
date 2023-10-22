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
import { CartShooping, useCartShooping } from "@/hooks/use-car-shooping";
import { useToast } from "./use-toast";

const ProductCardDetail = ({ data, showDetail }: ProductCard) => {
  const { toast } = useToast()
  const [imageLoaded, setImageLoaded] = useState(false);
  showDetail = true;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const strIndex = searchParams.get("index");
  const currentIndex = strIndex ? parseInt(strIndex) : 0;
  const cart = useCartShooping();
  const addNewItem = () => {
    const isVariants = data.isVariant;
    if (isVariants) {
      const arrColor = getDetColors(data);
      const arrSize = getSize(data);
      const currentColor = searchParams.get("color");
      const currentSize = searchParams.get("size");
      if (!currentColor || !currentSize) {
        toast({
          title: "Select a color and size",
          description: "Please select a color and size",
          variant: "destructive"
        })
        return;
      }
      const idCurrentColor = arrColor?.find((item) => item.name === currentColor)?.id;
      const idCurrentSize = arrSize?.find((item) => item.name === currentSize)?.id;
      const productCart = {
        product: data,
        quantity: 1,
        size: idCurrentSize,
        color: idCurrentColor,
      }
      const isItemAdded = cart.addItem(productCart)
      if (isItemAdded){
        toast({
          title: "Item added",
          description: "Item added to cart",
          variant: "default"
        })
      }else{
        toast({
          title: "Item already added",
          description: "Item already added to cart",
          variant: "destructive"
        })
      }
    }else{

      const productCart = {
        product: data,
        quantity: 1
      }
      const isItemAdded = cart.addItem(productCart)
      if (isItemAdded){
        toast({
          title: "Item added",
          description: "Item added to cart",
          variant: "default"
        })
      }else{
        toast({
          title: "Item already added",
          description: "Item already added to cart",
          variant: "destructive"
        })
      }

    }
  }

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
          <div className="mb-3 text-2xl  lg:text-3xl font-bold">{data.name} - {data.Category.name}</div>
          <div className="mb-1.5 text-xl sm:text-2xl font-medium text-gray-500">
          S./ {data.basePrice} 
          </div> 
          <Separator className="mb-3 h-[3px]" />
          <VariantSelector data={data} />
                
          <div className="pt-3.5 flex w-96 mb-5">
              <Button className="text-lg" onClick={addNewItem}><span >Add to Cart</span> <ShoppingCart className="ml-2" size={20} /></Button>
          </div>
          
          <div className={cn("order-first md:order-last pt-3.5",data.images.length<=1?"hidden":"")}>
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
