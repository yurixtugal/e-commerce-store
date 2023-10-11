"use client"

import { StoreIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavLogoStoreProps {
  store: Store;
}

const NavLogoStore = ( { store }: NavLogoStoreProps ) => {
  const router = useRouter();
  return <div className="flex items-center ml-auto sm:ml-0 sm:flex sm:items-center sm:space-x-2 hover:cursor-pointer"
    onClick={() => router.push("/")}
  >
    <StoreIcon  className="h-7 w-7" />
    <div className="font-bold text-xl pl-2">{store.name}</div>
  </div>
};

export default NavLogoStore;
