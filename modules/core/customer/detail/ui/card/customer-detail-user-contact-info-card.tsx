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
    <div className="bg-[#F0F5F1] rounded-4xl p-8">
      <div className="flex flex-col space-y-4">
        <h6 className="text-primary text-sm font-bold">
          PRIMARY CONTACT POINTS
        </h6>
        <div className="flex items-center space-x-4">
          <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <MailIcon width={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">EMAIL ADDRESS</span>
            <span className="text-sm font-semibold">{data?.email}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <PhoneCallIcon width={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">PHONE NUMBER</span>
            <span className="text-sm font-semibold">{data?.phone}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <CalendarIcon width={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">ACTIVE SINCE</span>
            <span className="text-sm font-semibold">
              {(data?.active_since &&
                format(data?.active_since, "dd MMM yyyy")) ||
                "-"}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <CircleUserRoundIcon width={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">SALE PERSON</span>
            <span className="text-sm font-semibold">{data?.salesperson}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
