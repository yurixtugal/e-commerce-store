"use client";

import { MenuSquare } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLogoStore from "./nav-logo-store";
import NavBarMainVertical from "./nav-bar-main-vertical";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavBarSandwichProps {
  store: Store;
  arrCategories: Category[];
}

const NavBarSandwich = ({ store, arrCategories }: NavBarSandwichProps) => {
  const pathname = usePathname();

  const routes = arrCategories.map((category) => ({
    label: category.name,
    href: `/category/${category.id}`,
    active: pathname === `/category/${category.id}`,
  }));

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex md:hidden items-center">
          <MenuSquare className="h-7 w-7 hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="pb-8">
            <NavLogoStore store={store} />
          </SheetTitle>
        </SheetHeader>
        <SheetFooter>
          <nav className="flex flex-col items-start space-y-4 mr-auto">
            {routes.map((route) => (
              <SheetClose key={"close_" + route.href} asChild>
                <Link
                  key={"link"+route.href}
                  href={route.href}
                  className="text-base font-medium text-neutral-500 transition-colors hover:text-black"
                >
                  {route.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavBarSandwich;
