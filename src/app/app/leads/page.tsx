"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { fetchLeads } from "@/lib/api";
import {
  ArrowUpRight,
  Download,
  Filter,
  Plus,
  Search,
  Users,
  PhoneCall,
  Target,
} from "lucide-react";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    fetchLeads()
      .then((res) => setLeads(Array.isArray(res) ? res : []))
      .catch(() => setLeads([]));
  }, []);

  const rows = useMemo(
    () =>
      leads.length
        ? leads
        : [
            {
              id: 1,
              full_name: "Maria Thompson",
              phone: "(555) 202-4455",
              status: "new",
              notes: "Expired listing",
            },
            {
              id: 2,
              full_name: "David Romero",
              phone: "(555) 188-2210",
              status: "attempted",
              notes: "Follow up Tuesday",
            },
            {
              id: 3,
              full_name: "Angela Brooks",
              phone: "(555) 444-9987",
              status: "qualified",
              notes: "Open to next week",
            },
          ],
    [leads]
  );

  return (
    <AppShell
      title="Leads"
      subtitle="Review prospect records, organize outreach lists, and prepare leads for AI outbound campaigns."
    >
      <div className="space-y-6">
        <section className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                <Users className="h-3.5 w-3.5" />
                Lead operations
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163b7a]">
                Build a cleaner pipeline for AI prospecting
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Review imported records, monitor lead readiness, and move
                prospects into campaigns faster with a cleaner workspace for outbound teams.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">
                <Plus className="h-4 w-4" />
                Upload CSV
              </button>

              <button className="inline-flex items-center gap-2 rounded-2xl border border-[#dbe7ff] bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7fbff]">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <StatCard
            icon={<Users className="h-5 w-5" />}
            label="Total Leads"
            value={String(rows.length)}
            hint="Available lead records"
          />
          <StatCard
            icon={<Target className="h-5 w-5" />}
            label="Qualified"
            value={String(
              rows.filter(
                (lead) => String(lead.status || "").toLowerCase() === "qualified"
              ).length
            )}
            hint="Ready for next action"
          />
          <StatCard
            icon={<PhoneCall className="h-5 w-5" />}
            label="Needs Follow-up"
            value={String(
              rows.filter((lead) => {
                const status = String(lead.status || "").toLowerCase();
                return status === "attempted" || status === "new";
              }).length
            )}
            hint="High-priority outreach queue"
          />
        </section>

        <section className="rounded-[32px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[#dbe7ff] bg-[#f7fbff] px-4 py-3">
              <Search className="h-4 w-4 text-[#2563eb]" />
              <input
                placeholder="Search leads, phone numbers, or notes"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl border border-[#dbe7ff] bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#f7fbff]">
                <Filter className="h-4 w-4" />
                Filter
              </button>

              <Link
                href="/app/campaigns"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#dbe7ff] bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#f7fbff]"
              >
                Send to Campaign
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[32px] border border-[#e6eefc] bg-white shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="overflow-x-auto">
            <div className="min-w-[820px]">
              <div className="grid grid-cols-[1.2fr_0.95fr_0.7fr_1.4fr_0.8fr] border-b border-[#e6eefc] bg-[#f7fbff] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                <div>Name</div>
                <div>Phone</div>
                <div>Status</div>
                <div>Notes</div>
                <div className="text-right">Action</div>
              </div>

              {rows.map((lead: any) => (
                <div
                  key={lead.id}
                  className="grid grid-cols-[1.2fr_0.95fr_0.7fr_1.4fr_0.8fr] items-center border-b border-slate-100 px-6 py-4 text-sm last:border-b-0"
                >
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-[#163b7a]">
                      {lead.full_name || lead.name || "Unnamed Lead"}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      Lead ID: {lead.id}
                    </div>
                  </div>

                  <div className="text-slate-600">{lead.phone || "—"}</div>

                  <div>
                    <span className={statusClass(lead.status)}>
                      {lead.status || "new"}
                    </span>
                  </div>

                  <div className="truncate text-slate-500">
                    {lead.notes || "—"}
                  </div>

                  <div className="text-right">
                    <button className="rounded-xl border border-[#dbe7ff] bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#f7fbff]">
                      View
                    </button>
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

function statusClass(status: string) {
  const value = String(status || "new").toLowerCase();

  if (value === "qualified") {
    return "inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold capitalize text-emerald-700";
  }

  if (value === "attempted") {
    return "inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold capitalize text-amber-700";
  }

  return "inline-flex rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold capitalize text-[#2563eb]";
}
