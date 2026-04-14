"use client";

import { useCustomerDetailStore } from "../store";

export const CustomerDetailUserInfoCard = () => {
  const { data } = useCustomerDetailStore();

  return (
    <div className="bg-white rounded-4xl shadow-sm p-8">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="bg-[#AFEFDD] w-[128px] h-[128px] rounded-full flex items-center justify-center">
          <span className="text-4xl font-bold text-black">
            {data?.initials}
          </span>
        </div>
        <h4 className="text-2xl font-bold text-black mb-2">
          {data?.name || "-"}
        </h4>
        <span className="text-base font-semibold">{data?.company || "-"}</span>
      </div>
    </div>
  );
};
