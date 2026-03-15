"use client";

import Image from "next/image";
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
  ChevronRight,
  Sparkles,
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
    <aside className="border-r border-[#e6eefc] bg-white">
      <div className="sticky top-0 flex h-screen flex-col px-4 py-5">
        <div className="mb-6 px-2">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#dbe7ff] bg-white shadow-sm">
              <Image
                src="/a2z-logo.png"
                alt="A2Z Dialer logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
                priority
              />
            </div>

            <div className="min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
                A2Z Dialer
              </div>
              <div className="truncate text-lg font-semibold tracking-tight text-[#163b7a]">
                Outbound OS
              </div>
              <div className="mt-0.5 text-xs text-slate-500">
                AI prospecting workspace
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-[#dbe7ff] bg-[#f7fbff] px-4 py-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
              <Sparkles className="h-3.5 w-3.5" />
              System status
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm font-medium text-[#163b7a]">
                Campaign engine ready
              </span>
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>

        <div className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          Workspace
        </div>

        <nav className="flex-1 space-y-1.5">
          {items.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium transition-all",
                  active
                    ? "bg-[#2563eb] text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)]"
                    : "text-slate-600 hover:bg-[#f4f8ff] hover:text-[#163b7a]"
                )}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-xl transition",
                      active
                        ? "bg-white/15 text-white"
                        : "bg-[#eef4ff] text-[#2563eb] group-hover:bg-white"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{item.label}</span>
                </span>

                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition",
                    active
                      ? "text-white/80"
                      : "text-slate-300 group-hover:text-[#2563eb]"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 rounded-[26px] border border-[#e6eefc] bg-[#fbfdff] p-4">
          <div className="text-sm font-semibold text-[#163b7a]">
            Prospecting without burnout
          </div>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Upload leads, launch campaigns, let AI handle the calls, and focus
            on booked appointments.
          </p>
        </div>

        <button
          onClick={signOut}
          className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-[#e6eefc] bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#cfe0ff] hover:bg-[#f7fbff] hover:text-[#163b7a]"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
