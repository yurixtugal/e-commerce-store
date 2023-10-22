"use client";

import { getProductsByCategory } from "@/actions/get-Products";
import { getCategoriesById } from "@/actions/get-categories";

import ProductNewList from "@/components/product-new-list";
import ListProductSkeleton from "@/components/skeletons/ListProductSkeleton";
import { Button } from "@/components/ui/button";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductByCategory({
  params,
}: {
  params: { categoryId: string };
}) {
  const [arrProductsByCategory, setArrProductsByCategory] =
    useState<ProductAndPagination>();
  const [category, setCategory] = useState<Category>();

  const [page, setPage] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      const arrProductsByCategory = await getProductsByCategory(
        params.categoryId,
        page,
        10
      );
      setArrProductsByCategory(arrProductsByCategory);
    };
    getProducts();
  }, [params.categoryId, page]);

  useEffect(() => {
    const getCategory = async () => {
      const category = await getCategoriesById(params.categoryId);
      setCategory(category);
    };
    getCategory();
  }, [params.categoryId]);

  if (!arrProductsByCategory || !category) return <ListProductSkeleton />;

  return (
    <>
      <div className=" flex-1 px-7 py-5">
        <div className="flex flex-col gap-y-8 px-4 ">
          <div className="space-y-4">
            <h3 className="font-bold text-2xl sm:text-3xl text-center sm:text-left">
              Category - {category.name}
            </h3>
            <div className="flex justify-between">
              <div className="text-muted-foreground">
                Filter: Comming soon
              </div>
              <div className="text-muted-foreground">
                {arrProductsByCategory.pagination.total} Products
              </div>
            </div>
            <ProductNewList
              title={`Category - ${category.name}`}
              items={arrProductsByCategory.data}
              showDetail={true}
              totalProducts={arrProductsByCategory.pagination.total}
            />
          </div>
        </div>
      </div>
      {arrProductsByCategory.pagination.lastPage > 1 && (
        <div>
          <div className="flex items-center justify-center px-2 pb-4 space-x-0">
            <Button
              variant="ghost"
              size="xs"
              className="text-muted-foreground"
              onClick={() => {
                if (page === 1) return;
                setPage(1);
              }}
            >
              <ChevronsLeft />
            </Button>
            <Button
              variant="ghost"
              size="xs"
              className="text-muted-foreground"
              onClick={() => {
                if (page === 1) return;
                setPage(page - 1);
              }}
            >
              <ChevronLeft />
            </Button>
            <div className=" items-center justify-center text-md text-muted-foreground">
              {arrProductsByCategory.pagination.currentPage} of{" "}
              {arrProductsByCategory.pagination.lastPage} Pages
            </div>
            <Button
              variant="ghost"
              size="xs"
              className="text-muted-foreground"
              onClick={() => {
                if (page === arrProductsByCategory.pagination.lastPage) return;
                setPage(page + 1);
              }}
            >
              <ChevronRight />
            </Button>
            <Button
              variant="ghost"
              size="xs"
              className="text-muted-foreground"
              onClick={() => setPage(arrProductsByCategory.pagination.lastPage)}
            >
              <ChevronsRight />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
