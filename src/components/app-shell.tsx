"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topbar";

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-[292px_1fr]">
        <Sidebar />
        <div className="min-w-0">
          <TopBar title={title} subtitle={subtitle} />
          <main className="px-4 pb-8 pt-5 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
