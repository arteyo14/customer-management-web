"use client";

import { useEffect } from "react";
import { useCustomerListStore } from "../store";
import { CustomerListHeader } from "./customer-list-header";
import { CustomerListTable } from "./customer-list-table";

export const CustomerListView = () => {
  const { getData } = useCustomerListStore();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <CustomerListHeader />
      <CustomerListTable />
    </div>
  );
};
