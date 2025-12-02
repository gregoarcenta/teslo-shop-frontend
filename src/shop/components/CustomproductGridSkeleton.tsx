import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export const CustomProductCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      {/* Image Skeleton */}
      <Skeleton className="aspect-square w-full" />

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-9 w-24" />
        </div>
      </div>
    </Card>
  );
};

export const CustomProductGridSkeleton = ({
  count = 6
}: {
  count?: number;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CustomProductCardSkeleton key={i} />
      ))}
    </div>
  );
};
