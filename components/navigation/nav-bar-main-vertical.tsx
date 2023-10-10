"use client"

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarMainProps {
   arrCategories: Category[]; 
  }

const NavBarMainVertical = ( { arrCategories }: NavBarMainProps ) => {
  const pathname = usePathname();

  const routes = arrCategories.map((category) => ({
    label: category.name,
    href: `/category/${category.id}`,
    active: pathname === `/category/${category.id}`
    
  }));

  return (
    <>
    <nav
      className="flex flex-col items-start space-y-4 mr-auto"
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className="text-base font-medium text-neutral-500 transition-colors hover:text-black"
        >
          {route.label}
      </Link>
      ))}
    </nav>
</>
  )
}
 
export default NavBarMainVertical;