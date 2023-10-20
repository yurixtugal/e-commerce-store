import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const ListProductSkeleton = () => {
  return (
    <div className=" flex-1 px-7 py-5">
      <div className="flex flex-col gap-y-8 px-4 ">
        <div className="space-y-4">
        <div className="font-bold text-2xl sm:text-3xl text-center sm:text-left">
              <Skeleton className="h-[35px] w-[250px]"></Skeleton>
            </div>
            <div className="flex justify-between">
              <div className="text-muted-foreground text-md">
                <Skeleton className="h-[24px] w-[150px]"></Skeleton>
              </div>
              <div className="text-muted-foreground text-md">
                <Skeleton className="h-4 w-[150px]"></Skeleton>
              </div>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
            <Card key={i} className="rounded-md shadow-lg hover:bg-gray-100 transition hover:shadow-xl hover:cursor-pointer">
              <CardContent className="p-3 ">
                <div className="flex items-center justify-center">
                  <Skeleton className="h-[250px] w-[250px]"></Skeleton>
                </div>
                <div className="pt-3">
                  <Skeleton className="h-4 w-[250px] pt-5" />
                  <Skeleton className="h-4 w-[100px] pb-5" />
                  <Skeleton className="h-4 w-[50px] pb-5" />
                </div>
              </CardContent>
            </Card>))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductSkeleton;
