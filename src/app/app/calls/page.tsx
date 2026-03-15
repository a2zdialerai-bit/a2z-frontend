"use client";

import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { fetchCallLogs } from "@/lib/api";
import { formatDateTime } from "@/lib/utils";
import { Filter, PhoneCall, Search, Clock3, Route } from "lucide-react";

export default function CallsPage() {
  const [calls, setCalls] = useState<any[]>([]);

  useEffect(() => {
    fetchCallLogs()
      .then((res) => setCalls(Array.isArray(res) ? res : []))
      .catch(() => setCalls([]));
  }, []);

  const rows = useMemo(
    () =>
      calls.length
        ? calls
        : [
            {
              id: 1,
              lead_name: "Maria Thompson",
              phone: "(555) 202-4455",
              outcome: "connected",
              created_at: new Date().toISOString(),
              route_trace: "intro → qualify → objection_price → booked",
            },
            {
              id: 2,
              lead_name: "David Romero",
              phone: "(555) 188-2210",
              outcome: "voicemail",
              created_at: new Date().toISOString(),
              route_trace: "intro → no_answer",
            },
          ],
    [calls]
  );

  return (
    <AppShell
      title="Calls"
      subtitle="Inspect outcomes, review route traces, and understand how the AI handled live outbound conversations."
    >
      <div className="space-y-6">
        <section className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                <PhoneCall className="h-3.5 w-3.5" />
                Call activity
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163b7a]">
                Review how your AI handled every conversation
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Monitor call outcomes, inspect route decisions, and understand
                what happened across recent outbound activity.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <StatCard
            icon={<PhoneCall className="h-5 w-5" />}
            label="Total Calls"
            value={String(rows.length)}
            hint="Recent logged call activity"
          />
          <StatCard
            icon={<Clock3 className="h-5 w-5" />}
            label="Connected"
            value={String(
              rows.filter(
                (call) => String(call.outcome || "").toLowerCase() === "connected"
              ).length
            )}
            hint="Live conversations reached"
          />
          <StatCard
            icon={<Route className="h-5 w-5" />}
            label="Booked / Positive"
            value={String(
              rows.filter((call) => {
                const outcome = String(call.outcome || "").toLowerCase();
                return outcome === "booked" || outcome === "connected";
              }).length
            )}
            hint="High-value outcomes"
          />
        </section>

        <section className="rounded-[32px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[#dbe7ff] bg-[#f7fbff] px-4 py-3">
              <Search className="h-4 w-4 text-[#2563eb]" />
              <input
                placeholder="Search calls, leads, outcomes, or route traces"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>

            <button className="inline-flex items-center gap-2 rounded-2xl border border-[#dbe7ff] bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#f7fbff]">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </section>

        <section className="overflow-hidden rounded-[32px] border border-[#e6eefc] bg-white shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="overflow-x-auto">
            <div className="min-w-[980px]">
              <div className="grid grid-cols-[1.1fr_0.9fr_0.7fr_0.9fr_1.4fr] border-b border-[#e6eefc] bg-[#f7fbff] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                <div>Lead</div>
                <div>Phone</div>
                <div>Outcome</div>
                <div>Created</div>
                <div>Route Trace</div>
              </div>

              {rows.map((call: any) => (
                <div
                  key={call.id}
                  className="grid grid-cols-[1.1fr_0.9fr_0.7fr_0.9fr_1.4fr] items-center border-b border-slate-100 px-6 py-4 text-sm last:border-b-0"
                >
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-[#163b7a]">
                      {call.lead_name || "Unknown Lead"}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      Call ID: {call.id}
                    </div>
                  </div>

                  <div className="text-slate-600">{call.phone || "—"}</div>

                  <div>
                    <span className={outcomeClass(call.outcome)}>
                      {call.outcome || "unknown"}
                    </span>
                  </div>

                  <div className="text-slate-500">
                    {formatDateTime(call.created_at)}
                  </div>

                  <div className="truncate text-slate-500">
                    {call.route_trace || "—"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function StatCard({
  icon,
  label,
  value,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-[28px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-[#eef4ff] p-3 text-[#2563eb]">{icon}</div>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Overview
        </span>
      </div>

      <div className="mt-5 text-sm font-medium text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight text-[#163b7a]">
        {value}
      </div>
      <div className="mt-2 text-sm text-slate-400">{hint}</div>
    </div>
  );
}

function outcomeClass(outcome: string) {
  const value = String(outcome || "unknown").toLowerCase();

  if (value === "connected") {
    return "inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold capitalize text-emerald-700";
  }

  if (value === "voicemail") {
    return "inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold capitalize text-amber-700";
  }

  if (value === "booked") {
    return "inline-flex rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold capitalize text-[#2563eb]";
  }

  return "inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-600";
}
