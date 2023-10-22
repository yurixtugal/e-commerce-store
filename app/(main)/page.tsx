import { getFeaturedProducts } from "@/actions/get-Products";
import { getStore } from "@/actions/get-store";
import BackGroundImageStore from "@/components/background-image-store";
import ProductNewList from "@/components/product-new-list";

export default async function Home() {
  const arrFeaturedProducts = await getFeaturedProducts();

  const currentStore = await getStore();

  return (
<>
  <div>
    <BackGroundImageStore currentStore={currentStore} />
    <div className="flex-1 px-7 py-5" style={{ position: "relative", zIndex: 1 }}>
      <div className="flex flex-col gap-y-8 px-4 ">
        <ProductNewList title="Featured Products" items={arrFeaturedProducts} />
      </div>
    </div>
  </div>
</>
  );
}
