import { StoreIcon } from "lucide-react";

interface NavLogoStoreProps {
  store: Store;
}

const NavLogoStore = ( { store }: NavLogoStoreProps ) => {
  return <div className="flex items-center ml-auto sm:ml-0 sm:flex sm:items-center sm:space-x-2">
    <StoreIcon  className="h-6 w-6" />
    <div className="font-bold text-lg pl-4">{store.name}</div>
  </div>
};

export default NavLogoStore;
