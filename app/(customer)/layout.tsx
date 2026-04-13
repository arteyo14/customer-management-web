export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full ">
      <div className="flex-1 overflow-y-auto p-10">{children}</div>
    </div>
  );
}
