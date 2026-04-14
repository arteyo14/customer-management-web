"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { UsersIcon, LogOutIcon, UserCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/modules/core/auth/store/auth-store";

const NAV_ITEMS = [{ label: "Customers", href: "/customer", icon: UsersIcon }];

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-full shadow-sm">
      <div className="p-6 border-b border-gray-50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <UserCircleIcon size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 uppercase">
              Administrator
            </p>
            <p className="text-[10px] text-gray-400 font-semibold tracking-wider">
              SUPER ADMIN
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm",
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-gray-500 hover:bg-gray-50",
              )}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-50">
        <button
          onClick={() => handleLogout()}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm font-bold text-error hover:bg-error/5 rounded-xl transition-colors cursor-pointer hover:bg-destructive hover:text-white"
        >
          <LogOutIcon size={18} />
          LOGOUT
        </button>
      </div>
    </aside>
  );
};
