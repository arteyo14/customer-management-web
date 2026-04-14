"use client";

const SkeletonItem = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded-md ${className}`} />
);

export const CustomerDetailSkeletonLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
        <div className="bg-white rounded-4xl shadow-sm p-8 flex flex-col items-center space-y-4">
          <div className="w-[128px] h-[128px] rounded-full bg-gray-200 animate-pulse" />
          <SkeletonItem className="h-8 w-48" />
          <SkeletonItem className="h-5 w-32" />
        </div>

        <div className="bg-[#F0F5F1] rounded-4xl p-8 space-y-6">
          <SkeletonItem className="h-4 w-40 bg-gray-300" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-white animate-pulse" />
              <div className="space-y-2">
                <SkeletonItem className="h-3 w-20" />
                <SkeletonItem className="h-4 w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
        <div className="bg-white rounded-4xl shadow-sm p-7">
          <SkeletonItem className="h-4 w-56 mb-8 bg-gray-100" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F0F5F1] rounded-4xl p-6 flex flex-col space-y-3">
              <SkeletonItem className="h-3 w-32" />
              <SkeletonItem className="h-10 w-24" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F0F5F1] rounded-4xl p-4 space-y-2">
                <SkeletonItem className="h-3 w-16" />
                <SkeletonItem className="h-6 w-10" />
              </div>
              <div className="bg-[#F0F5F1] rounded-4xl p-4 space-y-2">
                <SkeletonItem className="h-3 w-16" />
                <SkeletonItem className="h-6 w-10" />
              </div>
              <div className="bg-[#F0F5F1] rounded-4xl p-4 col-span-1 md:col-span-2 flex justify-between">
                <div className="space-y-2">
                  <SkeletonItem className="h-3 w-20" />
                  <SkeletonItem className="h-6 w-24" />
                </div>
                <div className="space-y-2">
                  <SkeletonItem className="h-3 w-18" />
                  <SkeletonItem className="h-6 w-18" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F0F5F1] rounded-4xl p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <SkeletonItem className="h-5 w-40" />
            <SkeletonItem className="h-4 w-20" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-300 shrink-0" />
                <div className="flex justify-between w-full">
                  <SkeletonItem className="h-4 w-1/2" />
                  <SkeletonItem className="h-4 w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
