"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ListChecks,
  Phone,
  Users,
  Workflow,
  CalendarDays,
  Shield,
  PlugZap,
  Settings,
  LogOut,
} from "lucide-react";
import { clearToken } from "@/lib/api";
import { cn } from "@/lib/utils";

const items = [
  { href: "/app", label: "Dashboard", icon: LayoutDashboard },
  { href: "/app/leads", label: "Leads", icon: Users },
  { href: "/app/pathways", label: "Pathways", icon: Workflow },
  { href: "/app/campaigns", label: "Campaigns", icon: ListChecks },
  { href: "/app/calls", label: "Calls", icon: Phone },
  { href: "/app/appointments", label: "Appointments", icon: CalendarDays },
  { href: "/app/dnc", label: "DNC", icon: Shield },
  { href: "/app/integrations", label: "Integrations", icon: PlugZap },
  { href: "/app/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function signOut() {
    clearToken();
    router.push("/login");
  }

  return (
    <aside className="border-r border-white/10 bg-[#0b1020]/90 px-4 py-5">
      <div className="flex h-full flex-col">
        <div className="mb-8 px-3">
          <div className="text-xs uppercase tracking-[0.28em] text-blue-300/80">
            A2Z Dialer
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-tight">
            Operations
          </div>
          <div className="mt-1 text-sm text-white/45">
            AI outbound calling console
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition",
                  active
                    ? "bg-white text-black shadow-lg"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          onClick={signOut}
          className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
