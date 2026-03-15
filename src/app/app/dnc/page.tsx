"use client";

import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { fetchDnc } from "@/lib/api";
import { Ban, Plus, Search, ShieldAlert } from "lucide-react";

export default function DncPage() {
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    fetchDnc()
      .then((res) => setEntries(Array.isArray(res) ? res : []))
      .catch(() => setEntries([]));
  }, []);

  const rows = useMemo(
    () =>
      entries.length
        ? entries
        : [
            {
              id: 1,
              phone: "(555) 000-1111",
              reason: "Requested opt out",
              status: "active",
            },
            {
              id: 2,
              phone: "(555) 000-2222",
              reason: "Internal suppression",
              status: "active",
            },
          ],
    [entries]
  );

  return (
    <AppShell
      title="DNC"
      subtitle="Manage do-not-call records, workspace suppression lists, and outbound compliance controls."
    >
      <div className="space-y-6">
        <section className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                <ShieldAlert className="h-3.5 w-3.5" />
                Compliance controls
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163b7a]">
                Protect campaigns with clear suppression rules
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Add numbers to suppression lists, respect opt-outs, and make sure
                your outbound automation never contacts restricted leads again.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
              <Plus className="h-4 w-4" />
              Add DNC Number
            </button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <StatCard
            icon={<Ban className="h-5 w-5" />}
            label="Suppressed Numbers"
            value={String(rows.length)}
            hint="Total protected entries"
          />
          <StatCard
            icon={<ShieldAlert className="h-5 w-5" />}
            label="Active DNC"
            value={String(
              rows.filter(
                (item) => String(item.status || "").toLowerCase() === "active"
              ).length
            )}
            hint="Currently blocked from dialing"
          />
          <StatCard
            icon={<Search className="h-5 w-5" />}
            label="Compliance Ready"
            value="Yes"
            hint="Suppression list available"
          />
        </section>

        <section className="rounded-[32px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="flex items-center gap-3 rounded-2xl border border-[#dbe7ff] bg-[#f7fbff] px-4 py-3">
            <Search className="h-4 w-4 text-[#2563eb]" />
            <input
              placeholder="Search phone number or suppression reason"
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
        </section>

        <section className="overflow-hidden rounded-[32px] border border-[#e6eefc] bg-white shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="overflow-x-auto">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-[1fr_1.6fr_0.7fr] border-b border-[#e6eefc] bg-[#f7fbff] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                <div>Phone</div>
                <div>Reason</div>
                <div>Status</div>
              </div>

              {rows.map((item: any) => (
                <div
                  key={item.id || item.phone}
                  className="grid grid-cols-[1fr_1.6fr_0.7fr] items-center border-b border-slate-100 px-6 py-4 text-sm last:border-b-0"
                >
                  <div className="font-semibold text-[#163b7a]">
                    {item.phone || "—"}
                  </div>
                  <div className="text-slate-500">{item.reason || "—"}</div>
                  <div>
                    <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
                      {item.status || "active"}
                    </span>
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
