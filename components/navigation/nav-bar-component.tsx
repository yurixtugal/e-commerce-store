import { ShoppingCart } from "lucide-react";
import NavBarMain from "./nav-bar-main";
import NavLogoStore from "./nav-logo-store";
import axios from "axios";
import { env } from "process";
import { getCategories } from "@/actions/get-categories";
import NavBarSandwich from "./nav-bar-sandwich";

interface NavBarProps {
  store: Store;
}

const NavBar = async ({ store }: NavBarProps) => {

  const arrCategories = await getCategories();

  return (
    <div className="border-b">
      <div className="flex xl:px-64 lg:px-32 px-6 h-16">
        <NavBarSandwich  store={store} arrCategories={arrCategories} />
        <NavLogoStore store={store}   />
        <NavBarMain arrCategories={arrCategories} />
        <div className="flex items-center ml-auto space-x-4">
          <ShoppingCart className="h-7 w-7 hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
