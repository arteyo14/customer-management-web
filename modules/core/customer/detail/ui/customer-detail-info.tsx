"use client";

import { CustomerDetailInfoHeader } from "./customer-detail-info-header";
import { CustomerDetailInfoBody } from "./customer-detail-infor-body";

export const CustomerDetailInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <CustomerDetailInfoHeader />
      <CustomerDetailInfoBody />
    </div>
  );
};
