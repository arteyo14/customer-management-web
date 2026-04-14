"use client";

import { CustomerListHeader } from "./customer-list-header";
import { CustomerListTable } from "./table/customer-list-table";

export const CustomerListView = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <CustomerListHeader />
      <CustomerListTable />
    </div>
  );
};
