"use client";

import { useEffect } from "react";
import { useCustomerListStore } from "../store";
import { CustomerListHeader } from "./customer-list-header";
import { CustomerListTable } from "./table/customer-list-table";

export const CustomerListView = () => {
  const { getData } = useCustomerListStore();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="grid grid-cols-1 gap-4">
      <CustomerListHeader />
      <CustomerListTable />
    </div>
  );
};
