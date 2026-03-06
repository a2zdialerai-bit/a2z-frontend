"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { fetchDnc } from "@/lib/api";

export default function DncPage() {
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    fetchDnc()
      .then((res) => setEntries(Array.isArray(res) ? res : []))
      .catch(() => setEntries([]));
  }, []);

  return (
    <AppShell
      title="DNC"
      subtitle="Manage do-not-call records and workspace compliance suppression."
    >
      <div className="space-y-6">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Compliance Controls</h2>
              <p className="mt-1 text-sm text-white/50">
                Add numbers to suppression lists and prevent future campaign contact.
              </p>
            </div>
            <button className="rounded-2xl bg-red-600 px-4 py-2.5 text-sm font-semibold hover:bg-red-500">
              Add DNC Number
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
          <div className="grid grid-cols-3 border-b border-white/10 px-5 py-4 text-xs uppercase tracking-wide text-white/40">
            <div>Phone</div>
            <div>Reason</div>
            <div>Status</div>
          </div>

          {(entries.length ? entries : [
            { id: 1, phone: "(555) 000-1111", reason: "Requested opt out", status: "active" },
            { id: 2, phone: "(555) 000-2222", reason: "Internal suppression", status: "active" },
          ]).map((item: any) => (
            <div
              key={item.id || item.phone}
              className="grid grid-cols-3 border-b border-white/5 px-5 py-4 text-sm last:border-b-0"
            >
              <div>{item.phone || "—"}</div>
              <div className="text-white/60">{item.reason || "—"}</div>
              <div className="uppercase tracking-wide text-red-200">
                {item.status || "active"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
