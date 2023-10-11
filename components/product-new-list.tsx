import NoResults from "./ui/no-result";
import ProductCard from "./ui/product-card";
import ProductNewCard from "./ui/product-new-card";

interface ProductListProps {
  title: string;
  items: Product[];
  showDetail?: boolean;
}

const ProductNewList = ({ title, items, showDetail }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((item) => (
          <ProductNewCard key={item.id} data={item} showDetail={showDetail} />
        ))}
      </div>
    </div>
  );
};

export default ProductNewList;
