"use client";

import {
  CalendarIcon,
  CircleUserRoundIcon,
  MailIcon,
  PhoneCallIcon,
} from "lucide-react";
import { format } from "date-fns";
import { useCustomerDetailStore } from "../../store";

export const CustomerDetailUserContactInfoCard = () => {
  const { data } = useCustomerDetailStore();

  return (
    <div className="bg-[#F0F5F1] rounded-4xl p-6 md:p-8">
      <div className="flex flex-col space-y-4">
        <h6 className="text-primary text-sm font-bold mb-2">
          PRIMARY CONTACT POINTS
        </h6>

        <div className="flex items-center space-x-4 overflow-hidden">
          <div className="bg-white rounded-full p-2 w-10 h-10 shrink-0 flex items-center justify-center shadow-sm">
            <MailIcon width={20} className="text-gray-600" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold text-gray-400 tracking-wider">
              EMAIL ADDRESS
            </span>
            <span className="text-sm font-semibold break-all text-gray-800">
              {data?.email || "-"}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4 overflow-hidden">
          <div className="bg-white rounded-full p-2 w-10 h-10 shrink-0 flex items-center justify-center shadow-sm">
            <PhoneCallIcon width={20} className="text-gray-600" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold text-gray-400 tracking-wider">
              PHONE NUMBER
            </span>
            <span className="text-sm font-semibold truncate text-gray-800">
              {data?.phone || "-"}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4 overflow-hidden">
          <div className="bg-white rounded-full p-2 w-10 h-10 shrink-0 flex items-center justify-center shadow-sm">
            <CalendarIcon width={20} className="text-gray-600" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold text-gray-400 tracking-wider">
              ACTIVE SINCE
            </span>
            <span className="text-sm font-semibold text-gray-800">
              {(data?.active_since &&
                format(new Date(data?.active_since), "dd MMM yyyy")) ||
                "-"}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4 overflow-hidden">
          <div className="bg-white rounded-full p-2 w-10 h-10 shrink-0 flex items-center justify-center shadow-sm">
            <CircleUserRoundIcon width={20} className="text-gray-600" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold text-gray-400 tracking-wider">
              SALE PERSON
            </span>
            <span className="text-sm font-semibold truncate text-gray-800">
              {data?.salesperson || "-"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
