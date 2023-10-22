"use client"

import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

interface BackGroundImageStoreProps {
   currentStore: Store; 
  }

const BackGroundImageStore = ({ currentStore }: BackGroundImageStoreProps) => {
  return (
    <AspectRatio ratio={16 / 7}>
      <Image src={currentStore.backgroundImageUrl} fill alt="Background" />
    </AspectRatio>
    );
}
 
export default BackGroundImageStore;