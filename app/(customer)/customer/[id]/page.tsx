import { Metadata } from "next";
import { CustomerDetailView } from "@/modules/core/customer/ui/customer-detail-view";

export const metadata: Metadata = {
  title: "Customer Mini App | Customer Detail",
  description: "Customer Mini App | Customer Detail",
};

export default async function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <CustomerDetailView id={Number(id)} />;
}
