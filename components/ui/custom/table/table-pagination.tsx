"use client";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { useMemo } from "react";
import { Button } from "../../button";

interface Props {
  currentPage: number;
  totalItems: number;
  limit: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

export const TablePagination = ({
  currentPage,
  totalItems,
  limit,
  onPageChange,
  onLimitChange,
}: Props) => {
  const totalPages = Math.ceil(totalItems / limit);

  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const siblingCount = 1;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      for (let i = 1; i <= leftItemCount; i++) pages.push(i);
      pages.push("...");
      pages.push(totalPages);
    } else if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - rightItemCount + 1; i <= totalPages; i++)
        pages.push(i);
    } else {
      pages.push(1);
      pages.push("...");
      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) pages.push(i);
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t gap-4 bg-white">
      <div className="flex items-center gap-4 order-2 md:order-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-500">
            Rows per page:
          </span>
          <select
            value={limit}
            onChange={(e) => onLimitChange(Number(e.target.value))}
            className="text-xs font-semibold border rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-brand-primary"
          >
            {[10, 25, 50, 100, 1000].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <p className="text-xs text-gray-500 font-medium">
          Showing {(currentPage - 1) * limit + 1} to{" "}
          {Math.min(currentPage * limit, totalItems)} of {totalItems}
        </p>
      </div>

      <div className="flex items-center gap-1 order-1 md:order-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <div key={`dots-${index}`} className="px-2">
                <MoreHorizontal size={14} className="text-gray-400" />
              </div>
            );
          }

          return (
            <Button
              key={`page-${page}`}
              onClick={() => onPageChange(page as number)}
              className={`min-w-[32px] h-8 text-xs font-bold bg-white rounded-lg transition-all ${
                currentPage === page
                  ? "bg-white text-primary shadow-md shadow-brand-primary/20"
                  : "text-gray-600 hover:bg-bg-main"
              }`}
            >
              {page}
            </Button>
          );
        })}

        <button
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg disabled:opacity-30 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
