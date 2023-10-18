"use client";

import { useCartShooping } from "@/hooks/use-car-shooping";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const CartShooping = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const useCart = useCartShooping();
  const items = useCart.items;
  const quantity = items.reduce((acc, item) => acc + item.quantity, 0);
  useEffect(() => {
    setIsLoaded(true);
  }
  , [])
  if (!isLoaded) return null;
  return (
    <div className="flex items-center ml-auto space-x-4">
    <Sheet>
    <SheetTrigger>
      
        <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
          <ShoppingCart className="h-7 w-7 hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
          {quantity ? (
            <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-black text-[11px] font-medium text-white">
              <span className={cn(quantity>= 10?"absolute left-[1.5px]":"absolute left-[4.3px]")}>{quantity}</span>
            </div>
          ) : null}
        </div>
      
    </SheetTrigger>
    <SheetContent className="bg-neutral-25">
      <SheetHeader>
        <SheetTitle>My Cart</SheetTitle>
        <SheetDescription>
          <Button onClick={()=> useCart.reset()}>Reset Cart</Button>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  </div>)
};

export default CartShooping;
