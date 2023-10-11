import { getFeaturedProducts, getProductsByCategory } from "@/actions/get-Products";
import { getCategoriesById } from "@/actions/get-categories";
import ProductCard from "@/components/cards/ProductCard";
import ProductList from "@/components/product-list";
import ProductNewList from "@/components/product-new-list";
import { Grid } from "lucide-react";
import Image from "next/image";

export default async function ProductByCategory({ params }: { params: { categoryId: string } }) {
  
  
  const arrProductsByCategory = await getProductsByCategory(params.categoryId);

  const category = await getCategoriesById(params.categoryId);

  return (
    <>
      <div className=" flex-1 px-7 py-5">
        <div className="flex flex-col gap-y-8 px-4 ">
          <ProductNewList title={`Category - ${category.name}`} items={arrProductsByCategory} showDetail={true} />
        </div>
      </div>
    </>
  );
}
