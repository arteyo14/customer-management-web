"use client";

import { useEffect } from "react";
import { useCustomerListStore } from "../store";
import { CustomerListHeader } from "./customer-list-header";
import { CustomerListTable } from "./customer-list-table";

export const CustomerListView = () => {
  const { getData } = useCustomerListStore();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <CustomerListHeader />
      <CustomerListTable />
    </div>
  );
};
