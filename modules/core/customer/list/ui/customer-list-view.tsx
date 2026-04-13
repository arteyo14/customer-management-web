"use client";

import { useEffect } from "react";
import { useCustomerListStore } from "../store";

export const CustomerListView = () => {
  const { getData } = useCustomerListStore();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
    </div>
  );
};
