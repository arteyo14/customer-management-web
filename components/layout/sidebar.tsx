"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  UsersIcon,
  LogOutIcon,
  UserCircleIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/modules/core/auth/store/auth-store";

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const NAV_ITEMS = [{ label: "Customers", href: "/customer", icon: UsersIcon }];

export const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <aside className="relative flex flex-col h-full w-full bg-white border-r border-gray-100 shadow-sm transition-all duration-300">
      <button
        onClick={onToggle}
        className="hidden md:flex absolute -right-3 top-10 bg-white border border-gray-200 rounded-full p-1 shadow-sm hover:text-primary z-50 transition-transform active:scale-95"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
      <div className={cn("p-6 border-b border-gray-50", isCollapsed && "px-4")}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <UserCircleIcon size={24} />
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden whitespace-nowrap">
              <p className="text-sm font-bold text-gray-900 uppercase">
                Administrator
              </p>
              <p className="text-[10px] text-gray-400 font-semibold tracking-wider">
                SUPER ADMIN
              </p>
            </div>
          )}
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              title={isCollapsed ? item.label : ""}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm",
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-gray-500 hover:bg-gray-50",
                isCollapsed && "px-0 justify-center",
              )}
            >
              <item.icon size={18} className="shrink-0" />
              {!isCollapsed && (
                <span className="whitespace-nowrap overflow-hidden">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      <div
        className={cn(
          "p-4 border-t border-gray-50",
          isCollapsed && "px-2 text-center",
        )}
      >
        <button
          onClick={() => handleLogout()}
          title={isCollapsed ? "Logout" : ""}
          className={cn(
            "flex items-center gap-3 w-full px-4 py-3 text-sm font-bold text-error hover:bg-error/5 rounded-xl transition-colors cursor-pointer hover:bg-destructive hover:text-white",
            isCollapsed && "px-0 justify-center",
          )}
        >
          <LogOutIcon size={18} className="shrink-0" />
          {!isCollapsed && <span className="whitespace-nowrap">LOGOUT</span>}
        </button>
      </div>
    </aside>
  );
};
