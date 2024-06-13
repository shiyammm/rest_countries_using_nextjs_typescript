import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCardCountry() {
  return (
    <div className="flex space-x-[8rem]">
      <Skeleton className="w-[50rem] object-cover h-[30rem]" />
      <div className="grid">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
