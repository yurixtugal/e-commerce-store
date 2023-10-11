"use client"

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarMainProps {
   arrCategories: Category[]; 
  }

const NavBarMain = ( { arrCategories }: NavBarMainProps ) => {
  const pathname = usePathname();

  const routes = arrCategories.map((category) => ({
    label: category.name,
    href: `/category/${category.id}`,
    active: pathname === `/category/${category.id}`
    
  }));

  return (
    <>
    <nav
      className="hidden sm:flex items-center space-x-4 ml-4"
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-md font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
</>
  )
}
 
export default NavBarMain;