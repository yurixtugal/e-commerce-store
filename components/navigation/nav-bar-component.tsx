import NavBarMain from "./nav-bar-main";
import NavLogoStore from "./nav-logo-store";
import { getCategories } from "@/actions/get-categories";
import NavBarSandwich from "./nav-bar-sandwich";
import CartShooping from "./cart-shooping";
import { useCartShooping } from "@/hooks/use-car-shooping";

interface NavBarProps {
  store: Store;
  arrCategories: Category[];
}

const NavBar = async ({ store, arrCategories }: NavBarProps) => {
  
  return (
    <div className="border-b bg-[#fff]">
      <div className="flex xl:px-64 lg:px-32 px-6 h-20">
        <NavBarSandwich store={store} arrCategories={arrCategories} />
        <NavLogoStore store={store} />
        <NavBarMain arrCategories={arrCategories} />
        <CartShooping />
      </div>
    </div>
  );
};

export default NavBar;
