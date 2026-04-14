"use client";

import { cn } from "@/lib/utils";
import { useCustomerDetailStore } from "../../store";
import { CustomerStatus } from "../../infrastructure";

export const CustomerDetailUserInfoCard = () => {
  const { data } = useCustomerDetailStore();

  return (
    <div className="bg-white rounded-4xl shadow-sm p-8">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="bg-[#AFEFDD] w-[128px] h-[128px] rounded-full flex items-center justify-center relative">
          <span className="text-4xl font-bold text-black">
            {data?.initials}
          </span>
          <div
            className={cn(
              "absolute bottom-0 right-0 border-3 border-white rounded-full p-2 w-8 h-8 flex items-center justify-center",
              data?.status === CustomerStatus.ACTIVE && "bg-success",
              data?.status === CustomerStatus.INACTIVE && "bg-red-600",
              data?.status === CustomerStatus.PENDING && "bg-warning",
            )}
          ></div>
        </div>
        <h4 className="text-2xl font-bold text-black mb-2">
          {data?.name || "-"}
        </h4>
        <span className="text-base font-semibold">{data?.company || "-"}</span>
      </div>
    </div>
  );
};
