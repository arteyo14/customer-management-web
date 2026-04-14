"use client";
"use no memo";

import { useEffect, useMemo, useCallback } from "react";
import { useCustomerListStore } from "../../store";
import { getColumns } from "./customer-list-column";
import { DataTable } from "@/components/ui/custom/table/data-table";

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

  return (
    <DataTable
      columns={columns}
      data={data?.items ?? []}
      loading={loading}
      totalItems={data?.total || 0}
      page={params.page}
      limit={params.limit}
      onPageChange={(page) => setParams({ page })}
      onLimitChange={(limit) => setParams({ limit, page: 1 })}
    />
  );
};
