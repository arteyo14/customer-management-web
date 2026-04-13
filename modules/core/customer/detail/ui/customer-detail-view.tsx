"use client";

import { useEffect } from "react";

import { useCustomerDetailStore } from "../store";

export const CustomerDetailView = ({ id }: { id: number }) => {
  const { loading, data, getData } = useCustomerDetailStore();

  useEffect(() => {
    if (!id) return;

    getData(id);
  }, [id, getData]);

  return (
    <div>
      <h1>Customer Detail</h1>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>
          <p>ID: {id}</p>
          <p>Name: {data?.name}</p>
          <p>Company: {data?.company}</p>
          <p>Initials: {data?.initials}</p>
          <p>Active Since: {data?.active_since.toString()}</p>
          <p>Email: {data?.email}</p>
          <p>Phone: {data?.phone}</p>
          <p>Salesperson: {data?.salesperson}</p>
          <p>Credit Status: {data?.credit_status}</p>
          <p>Status: {data?.status}</p>
          <p>Total Spend: {data?.total_spend}</p>
          <p>Number of Purchases: {data?.number_of_purchases}</p>
          <p>Last Activity: {data?.last_activity.toString()}</p>
          <p>
            Recent Activity:{" "}
            {data?.recent_activity
              .map((activity) => activity.action)
              .join(", ")}
          </p>
        </div>
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
};
