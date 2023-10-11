"use client"

import { MenuSquare } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLogoStore from "./nav-logo-store";
import NavBarMainVertical from "./nav-bar-main-vertical";

interface NavBarSandwichProps {
  store: Store;
  arrCategories: Category[];
}

const NavBarSandwich = ({ store, arrCategories }: NavBarSandwichProps) => {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex sm:hidden items-center">
          <MenuSquare className="h-7 w-7 hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="pb-8"><NavLogoStore store={store}  /></SheetTitle>
          <NavBarMainVertical arrCategories={arrCategories}/>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavBarSandwich;
