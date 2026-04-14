"use client";

import { CustomerDetailUserContactInfoCard } from "./customer-detail-user-contact-info-card";
import { CustomerDetailUserInfoCard } from "./customer-detail-user-info-card";

export const CustomerDetailInfoBody = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
        <CustomerDetailUserInfoCard />
        <CustomerDetailUserContactInfoCard />
      </div>
      <div className="col-span-1 md:col-span-3"></div>
    </div>
  );
};
