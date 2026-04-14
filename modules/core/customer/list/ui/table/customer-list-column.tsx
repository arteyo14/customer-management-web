"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { ICustomerListResponse } from "../../infrastructure";
import Link from "next/link";

export const getColumns = (
  onSort: (id: string) => void,
): ColumnDef<ICustomerListResponse>[] => [
  {
    accessorKey: "id",
    header: () => (
      <button
        className="flex items-center gap-2 hover:text-primary"
        onClick={() => onSort("id")}
      >
        ID <ArrowUpDown size={14} />
      </button>
    ),
  },
  {
    accessorKey: "name",
    header: () => (
      <button
        className="flex items-center gap-2 hover:text-primary"
        onClick={() => onSort("name")}
      >
        NAME <ArrowUpDown size={14} />
      </button>
    ),
    cell: ({ row }) => (
      <Link
        href={`/customer/${row.original.id}`}
        className="font-semibold hover:text-primary hover:underline"
      >
        {row.original.name}
      </Link>
    ),
  },
  {
    accessorKey: "email",
    header: "EMAIL",
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
        className="flex items-center gap-2 hover:text-primary"
        onClick={() => onSort("total_spend")}
      >
        TOTAL SPEND <ArrowUpDown size={14} />
      </button>
    ),
    cell: ({ row }) => (
      <span>${row.original.total_spend.toLocaleString()}</span>
    ),
  },
];
