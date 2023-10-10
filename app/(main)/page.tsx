import { getFeaturedProducts } from "@/actions/get-Products";
import ProductCard from "@/components/cards/ProductCard";
import ProductList from "@/components/product-list";
import { Grid } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const arrFeaturedProducts = await getFeaturedProducts();

  console.log(arrFeaturedProducts);

  return (
    <>
      <div className=" flex-1 px-7 py-5">
        <div className="flex flex-col gap-y-8 px-4 ">
          <ProductList title="Featured Products" items={arrFeaturedProducts} />
        </div>
      </div>
    </>
  );
}
