"use client";

import { useCustomerDetailStore } from "../../store";

export const CustomerDetailUserFinancialSummaryCard = () => {
  const { data } = useCustomerDetailStore();
  return (
    <div className="bg-white rounded-4xl shadow-sm p-7">
      <div className="text-xs text-primary font-bold mb-8">
        FINANCIAL & PURCHASE SUMMARY
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#F0F5F1] rounded-4xl p-6 flex flex-col">
          <span className="text-xs font-bold text-gray-600">
            TOTAL LIFETIME SPEND
          </span>
          <span className="text-3xl font-bold text-primary">
            {data?.total_spend}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#F0F5F1] rounded-4xl p-4 ">
            <div className="text-xs font-bold text-gray-600">PURCHASES</div>
            <div className="text-lg font-bold text-primary">
              {data?.number_of_purchases}
            </div>
          </div>
          <div className="bg-[#F0F5F1] rounded-4xl p-4 ">
            <div className="text-xs font-bold text-gray-600">STATUS</div>
            <div className="text-lg font-bold text-primary">{data?.status}</div>
          </div>
          <div className="bg-[#F0F5F1] rounded-4xl p-4 col-span-1 md:col-span-2 flex md:flex-row justify-between items-center">
            <div>
              <div className="text-xs font-bold text-gray-600">
                CREDIT LIMIT
              </div>
              <div className="text-lg font-bold text-primary">15000</div>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-600">LAST ORDER</div>
              <div className="text-lg font-bold text-primary">3 Days Ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
