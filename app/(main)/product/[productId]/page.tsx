
import { getProductById } from "@/actions/get-Products";
import ProductCardDetail from "@/components/ui/product-card-detail";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductDetail = async ( {params}:{params: {productId: string}}) => {
  
  const product = await getProductById(params.productId);
  
  if (!product) return <div>Product not found</div>

  return (<>
    <div className=" flex-1 px-7 py-5 lg:px-32 xl:px-64">
      <ProductCardDetail data={product} />
    </div>
  </>)
}
 
export default ProductDetail;