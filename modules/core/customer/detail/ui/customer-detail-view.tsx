"use client";

import { useEffect } from "react";

import { useCustomerDetailStore } from "../store";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { CustomerDetailInfo } from "./customer-detail-info";
import { CustomerDetailSkeletonLoading } from "./card/customer-skeleton-loading";

export const CustomerDetailView = ({ id }: { id: number }) => {
  const { loading, getData } = useCustomerDetailStore();

  useEffect(() => {
    if (id) getData(id);
  }, [id, getData]);

  return (
    <div>
      <div className="w-full mb-6">
        <Link
          href="/customer"
          className="text-primary text-xs flex items-center space-x-2 hover:underline"
        >
          <ArrowLeftIcon width={16} />
          <span className="font-bold">Back to customer list</span>
        </Link>
      </div>
      {loading ? <CustomerDetailSkeletonLoading /> : <CustomerDetailInfo />}
    </div>
  );
};
