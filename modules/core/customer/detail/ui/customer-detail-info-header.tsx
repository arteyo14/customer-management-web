"use client";

import { Badge } from "@/components/ui/badge";
import { useCustomerDetailStore } from "../store";
import { CustomerStatus } from "../infrastructure";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const CustomerDetailInfoHeader = () => {
  const { data } = useCustomerDetailStore();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 items-center">
      <div className="col-span-1 space-x-2 flex items-center mb-0">
        <h1 className="text-4xl font-bold text-black">{data?.name}</h1>
        <Badge
          className={cn(
            data?.status === CustomerStatus.ACTIVE && "bg-success",
            data?.status === CustomerStatus.INACTIVE && "bg-red-600",
            data?.status === CustomerStatus.PENDING && "bg-warning",
            "font-semibold mt-1",
          )}
        >
          {data?.status}
        </Badge>
      </div>
      <div className="flex items-center justify-start md:justify-end  mt-4 md:mt-0">
        <Button className="h-8 md:h-10 rounded-full p-4 w-full md:w-40">
          Edit Profile
        </Button>
      </div>
    </div>
  );
};
