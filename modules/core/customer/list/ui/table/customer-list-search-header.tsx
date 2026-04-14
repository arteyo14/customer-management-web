"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, XIcon } from "lucide-react";
import { useCustomerListStore } from "../../store";

export const CustomerSearchHeader = () => {
  const { params, setParams, getData } = useCustomerListStore();

  const handleSearch = () => {
    setParams({ page: 1 });
    getData();
  };

  const handleReset = () => {
    setParams({ search: "" });
    getData();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="relative w-full lg:max-w-md">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <SearchIcon className="size-4 text-gray-400" />
        </div>
        <Input
          value={params.search}
          placeholder="Search customers..."
          className="pl-10 pr-10 py-6 md:py-5 bg-gray-50/50 border-gray-200 focus:bg-white transition-all rounded-xl text-sm md:text-base"
          onChange={(e) => setParams({ search: e.target.value })}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        {params.search && (
          <button
            onClick={handleReset}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-error transition-colors"
          >
            <XIcon className="size-4" />
          </button>
        )}
      </div>
      <div className="flex md:justify-end gap-2">
        <Button
          className="px-8 rounded-xl font-bold text-xs md:text-sm h-12 md:h-11 bg-primary shadow-lg shadow-primary/20"
          onClick={handleSearch}
        >
          FIND CUSTOMERS
        </Button>
        <Button
          variant="outline"
          className="px-6 rounded-xl font-bold text-xs md:text-sm h-12 md:h-11 border-gray-200 hover:bg-gray-50"
          onClick={handleReset}
        >
          RESET
        </Button>
      </div>
    </div>
  );
};
