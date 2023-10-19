"use client";

import { useCartShooping } from "@/hooks/use-car-shooping";
import {
  MinusCircle,
  PlusCircle,
  ShoppingCart,
  X,
  XCircle,
} from "lucide-react";
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
import { cn, getDetColors, getSize } from "@/lib/utils";
import Image from "next/image";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const CartShooping = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const useCart = useCartShooping();
  const items = useCart.items;
  const quantity = items.reduce((acc, item) => acc + item.quantity, 0);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  if (!isLoaded) return null;
  return (
    <div className="flex items-center ml-auto space-x-4">
      <Sheet>
        <SheetTrigger>
          <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
            <ShoppingCart className="h-7 w-7 hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
            {quantity ? (
              <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-black text-[11px] font-medium text-white">
                <span
                  className={cn(
                    quantity >= 10
                      ? "absolute left-[1.5px]"
                      : "absolute left-[4.3px]"
                  )}
                >
                  {quantity}
                </span>
              </div>
            ) : null}
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>My Cart</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col">
                {items.map((item) => {
                  const isVariant = item.product.isVariant;
                  console.log(isVariant);
                  const colors = getDetColors(item.product);
                  const sizes = getSize(item.product);
                  console.log(item.size);
                  console.log(item.color);
                  const currentColor = colors?.find(
                    (color) => color.id === item.color
                  );
                  console.log(currentColor);
                  const currentSize = sizes?.find(
                    (size) => size.id === item.size
                  );
                  console.log(currentColor);
                  const currentVariant = isVariant
                    ? item.product.variants.find(
                        (variant) =>
                          variant.Color.id === item.color &&
                          variant.Size.id === item.size
                      )
                    : null;
                  console.log(currentVariant);
                  const currentPrice = isVariant
                    ? currentVariant?.price
                    : item.product.basePrice;

                  return (
                    <>
                      <div
                        key={`Cart_${item.product.id}_${item.color}_${item.size}`}
                        className="flex items-center space-x-2 pt-2"
                      >
                        <Image
                          src={item.product.images[0].imageUrl}
                          width={80}
                          height={80}
                          alt={item.product.name}
                        />
                        <div className="grid w-full">
                          <span className="font-semibold text-black">
                            {item.product.name}
                          </span>
                          {item.product.isVariant && (
                            <span>
                              {currentColor?.name} / {currentSize?.name}
                            </span>
                          )}
                          {!item.product.isVariant && (
                            <span>{item.product.Category.name}</span>
                          )}
                        </div>
                        <div className="grid w-32">
                          <span className="pb-2 text-black font-semibold">
                            S./ {currentPrice && currentPrice * item.quantity}
                          </span>
                          <span className="pb-2 justify-center flex items-center ">
                            {item.quantity}
                          </span>
                          <div className="flex space-x-1 pb-2">
                            <PlusCircle
                              onClick={() =>
                                useCart.addQuantity(
                                  item.product.id,
                                  item.color ? item.color : "",
                                  item.size ? item.size : ""
                                )
                              }
                              className="h-4 w-4 hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out"
                            />
                            <MinusCircle
                              onClick={() =>
                                useCart.decreaseQuantity(
                                  item.product.id,
                                  item.color ? item.color : "",
                                  item.size ? item.size : ""
                                )
                              }
                              className="h-4 w-4 hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out"
                            />
                          </div>
                        </div>
                      </div>
                      <Separator className="mb-3 mt-3" />
                    </>
                  );
                })}
              </div>
              {items && items.length > 0 && (
                <>
                  <Button className="w-full mb-4">Checkout</Button>

                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => useCart.reset()}
                  >
                    Clear Cart
                  </Button>
                </>
              )}

              {items && items.length === 0 && (
                <div className="mt-4 flex flex-col items-center justify-center text-black">
                  <ShoppingCart className="h-20 w-20 mb-5" />
                  <span className="text-xl font-semibold">
                    Your cart is empty
                  </span>
                </div>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartShooping;
