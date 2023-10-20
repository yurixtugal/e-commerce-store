"use client";

import { StoreIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NavLogoStoreProps {
  store: Store;
}

const NavLogoStore = ({ store }: NavLogoStoreProps) => {
  const router = useRouter();
  return (
    <div
      className="flex items-center ml-auto md:ml-0 md:flex md:items-center md:space-x-2 hover:cursor-pointer"
      onClick={() => router.push("/")}
    >
      {" "}
      {!store.logoImageUrl && (
        <>
          <StoreIcon className="h-7 w-7" />
          <div className="font-bold text-xl pl-2">{store.name}</div>
        </>
      )}
      {store.logoImageUrl && (
        <Image src={store.logoImageUrl} width={100} height={95} alt="logo" />
      
      )}
    </div>
  );
};

export default NavLogoStore;
