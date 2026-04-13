import { CustomerListView } from "@/modules/core/customer/list/ui/customer-list-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Mini App | Customer List",
  description: "Customer Mini App | Customer List",
};

export default function CustomerListPage() {
  return <CustomerListView />;
}
