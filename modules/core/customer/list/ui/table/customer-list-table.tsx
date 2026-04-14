"use client";
"use no memo";

import { TablePagination } from "@/components/ui/custom/table/table-pagination";
import { useEffect, useMemo, useCallback } from "react";
import { useCustomerListStore } from "../../store";
import { getColumns } from "./customer-list-column";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export const CustomerListTable = () => {
  const { params, setParams, data, loading, getData } = useCustomerListStore();

  useEffect(() => {
    getData();
  }, [params, getData]);

  const handleSort = useCallback(
    (field: string) => {
      const isAsc = params.sort_by === field && params.sort === "asc";
      setParams({ sort_by: field, sort: isAsc ? "desc" : "asc" });
    },
    [params.sort_by, params.sort, setParams],
  );

  const columns = useMemo(() => getColumns(handleSort), [handleSort]);

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: data?.items ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true,
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto relative">
        {loading && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-20 backdrop-blur-[1px]">
            <span className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></span>
          </div>
        )}

        <table className="w-full text-left">
          <thead className="bg-[#F7FCF8] text-xs font-bold text-gray-500 uppercase tracking-wider">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-4">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-gray-100">
            {table.getRowModel().rows.length > 0
              ? table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-6 py-4 text-sm text-text-main"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              : !loading && (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-6 py-10 text-center text-gray-400 italic"
                    >
                      No customers found.
                    </td>
                  </tr>
                )}
          </tbody>
        </table>
      </div>
      <TablePagination
        currentPage={params.page}
        totalItems={data?.total || 0}
        limit={params.limit}
        onLimitChange={(limit) => setParams({ limit, page: 1 })}
        onPageChange={(page) => setParams({ page })}
      />
    </div>
  );
};
