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
    <div className="min-h-screen bg-transparent text-white">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="min-w-0">
          <TopBar title={title} subtitle={subtitle} />
          <main className="px-6 pb-8 pt-2">{children}</main>
        </div>
      </div>
    </div>
  );
}
