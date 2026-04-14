"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { ICustomerListResponse } from "../../infrastructure";
import Link from "next/link";
import { formatNumber } from "@/utils/number";

export const getColumns = (
  onSort: (id: string) => void,
): ColumnDef<ICustomerListResponse>[] => [
  {
    accessorKey: "id",
    header: () => (
      <button
        className="flex items-center gap-2 hover:text-primary cursor-pointer"
        onClick={() => onSort("id")}
      >
        No <ArrowUpDown size={14} />
      </button>
    ),
  },
  {
    accessorKey: "name",
    header: () => (
      <button
        className="flex items-center gap-2 hover:text-primary cursor-pointer"
        onClick={() => onSort("name")}
      >
        NAME <ArrowUpDown size={14} />
      </button>
    ),
    cell: ({ row }) => (
      <Link
        href={`/customer/${row.original.id}`}
        className="font-semibold text-blue-500 hover:text-blue-600 hover:underline text-nowrap"
      >
        {row.original.name}
      </Link>
    ),
  },
  {
    accessorKey: "email",
    header: "EMAIL",
    cell: ({ row }) => {
      return <span className="text-nowrap">{row.original.email}</span>;
    },
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => {
      return <span className="text-nowrap">{row.original.company}</span>;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => {
      return <span className="text-nowrap">{row.original.phone}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${
            status === "Active"
              ? "bg-success/10 text-success"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {status.toUpperCase()}
        </span>
      );
    },
  },
  {
    accessorKey: "total_spend",
    header: () => (
      <button
        className="flex items-center gap-2 hover:text-primary cursor-pointer text-nowrap"
        onClick={() => onSort("total_spend")}
      >
        TOTAL SPEND <ArrowUpDown size={14} />
      </button>
    ),
    cell: ({ row }) => (
      <span>${formatNumber(row.original.total_spend, 2)}</span>
    ),
  },
];
