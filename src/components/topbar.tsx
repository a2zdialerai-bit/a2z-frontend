"use client";

import { Bell, Search, Sparkles } from "lucide-react";

export function TopBar({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="sticky top-0 z-10 border-b border-[#e6eefc] bg-white/92 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            <Sparkles className="h-3.5 w-3.5" />
            AI outbound operating system
          </div>
          <h1 className="mt-2 truncate text-2xl font-semibold tracking-tight text-[#163b7a] sm:text-3xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-2xl border border-[#e6eefc] bg-[#f7fbff] px-3 py-2 text-sm text-slate-500 md:flex">
            <Search className="h-4 w-4 text-[#2563eb]" />
            <span>Search leads, campaigns, or calls</span>
          </div>

          <button
            type="button"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e6eefc] bg-white text-slate-600 transition hover:bg-[#f7fbff] hover:text-[#163b7a]"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-emerald-500" />
          </button>

          <div className="hidden rounded-full border border-[#dbe7ff] bg-[#eef4ff] px-3 py-2 text-xs font-semibold text-[#2563eb] sm:block">
            Campaign engine live
          </div>
        </div>
      </div>
    </header>
  );
}
