"use client";

import { useEffect } from "react";
import { useCustomerDetailStore } from "../store/customer-detail-store";

export const CustomerDetailView = ({ id }: { id: number }) => {
  const { data, getData } = useCustomerDetailStore();

  useEffect(() => {
    if (!id || data) return;

    getData(id);
  }, [id, data, getData]);

  return (
    <div>
      <h1>Customer Detail</h1>
    </div>
  );
};
