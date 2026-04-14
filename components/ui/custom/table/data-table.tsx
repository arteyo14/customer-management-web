"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import { TablePagination } from "./table-pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  loading?: boolean;
  totalItems: number;
  page: number;
  limit: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  loading,
  totalItems,
  page,
  limit,
  onPageChange,
  onLimitChange,
}: DataTableProps<TData, TValue>) {
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  const HEADER_HEIGHT = "52px";
  const MIN_BODY_HEIGHT = "560px";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div
        className="overflow-x-auto relative"
        style={{ minHeight: `calc(${HEADER_HEIGHT} + ${MIN_BODY_HEIGHT})` }}
      >
        {loading && (
          <div
            className="absolute inset-x-0 bottom-0 bg-white/60 flex items-center justify-center z-20 backdrop-blur-[1px]"
            style={{ top: HEADER_HEIGHT }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></span>
              <span className="text-xs font-bold text-primary animate-pulse">
                LOADING...
              </span>
            </div>
          </div>
        )}

        <table className="w-full text-left border-collapse">
          <thead
            className="bg-[#F7FCF8] text-xs font-bold text-gray-500 uppercase tracking-wider"
            style={{ height: HEADER_HEIGHT }}
          >
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
            {table.getRowModel().rows?.length
              ? table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 transition-colors h-[56px]"
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
                  <tr style={{ height: MIN_BODY_HEIGHT }}>
                    <td
                      colSpan={columns.length}
                      className="text-center text-gray-400 italic"
                    >
                      No results found.
                    </td>
                  </tr>
                )}
          </tbody>
        </table>
      </div>

      <TablePagination
        currentPage={page}
        totalItems={totalItems}
        limit={limit}
        onLimitChange={onLimitChange}
        onPageChange={onPageChange}
      />
    </div>
  );
}
