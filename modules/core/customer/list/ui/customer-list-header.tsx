"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const CustomerListHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="text-2xl font-bold text-primary">Customer Management</h1>
        <p className="text-gray-500 text-sm">
          Archived records and client profiles for The Botanical Professional.
        </p>
      </div>
      <div className="md:flex md:justify-end md:mt-0 mt-4">
        <Button className="bg-primary text-white p-4 h-10 rounded-lg font-bold w-full md:w-auto">
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Customer
        </Button>
      </div>
    </div>
  );
};
