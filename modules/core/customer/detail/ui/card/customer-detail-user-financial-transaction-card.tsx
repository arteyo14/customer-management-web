"use client";

import Link from "next/link";
import { useCustomerDetailStore } from "../../store";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export const CustomerDetailUserFinancialTransactionCard = () => {
  const { data } = useCustomerDetailStore();
  return (
    <div className="bg-[#F0F5F1] rounded-4xl p-6 h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm">ENGAGEMENT TIMELINE</div>
        <Link
          href="#"
          className="text-sm text-primary hover:underline flex items-center gap-1"
        >
          View History
          <SquareArrowOutUpRightIcon width={12} />
        </Link>
      </div>
      {(() => {
        if (data?.recent_activity?.length === 0)
          return (
            <div className="text-center text-gray-500">No recent activity</div>
          );

        return (
          <ul className="w-full flex flex-col gap-3">
            {data?.recent_activity?.map((activity, index) => (
              <li
                key={index}
                className="flex items-center gap-3 w-full text-brand-primary"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                <div className="flex justify-between w-full font-semibold text-sm">
                  <span>{activity.action}</span>
                  <span className="text-text-main/60">{activity.time}</span>
                </div>
              </li>
            ))}
          </ul>
        );
      })()}
    </div>
  );
};
