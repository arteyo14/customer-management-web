export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full bg-bg-main">
      <div className="flex-1 overflow-y-auto p-8 min-h-screen">{children}</div>
    </div>
  );
}
