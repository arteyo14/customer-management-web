"use client";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const totalPages = Math.ceil(totalItems / limit);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];

    const siblingCount = isMobile ? 0 : 1;

    const maxVisiblePages = isMobile ? 3 : 5;
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = isMobile ? 2 : 3 + siblingCount;
      for (let i = 1; i <= leftItemCount; i++) pages.push(i);
      pages.push("...");
      pages.push(totalPages);
    } else if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = isMobile ? 2 : 3 + siblingCount;
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
  }, [currentPage, totalPages, isMobile]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t gap-4 bg-white">
      <div className="flex items-center gap-4 order-2 md:order-1 w-full md:w-auto justify-between md:justify-start">
        <div className="flex items-center gap-2">
          <span className="text-[10px] md:text-xs font-medium text-gray-500 uppercase">
            Rows:
          </span>
          <select
            value={limit}
            onChange={(e) => onLimitChange(Number(e.target.value))}
            className="text-xs font-bold border rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {[10, 25, 50, 100].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-tight">
          Showing {(currentPage - 1) * limit + 1}-
          {Math.min(currentPage * limit, totalItems)} of {totalItems}
        </p>
      </div>

      {/* ส่วนปุ่มกดเลขหน้า */}
      <div className="flex items-center gap-1 order-1 md:order-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg disabled:opacity-20 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <div key={`dots-${index}`} className="px-1 md:px-2">
                <MoreHorizontal size={14} className="text-gray-300" />
              </div>
            );
          }

          return (
            <Button
              key={`page-${page}`}
              variant="ghost"
              onClick={() => onPageChange(page as number)}
              className={`min-w-[32px] md:min-w-[36px] h-8 md:h-9 text-xs font-bold rounded-full transition-all ${
                currentPage === page
                  ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90 hover:text-white"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {page}
            </Button>
          );
        })}

        <button
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg disabled:opacity-20 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
