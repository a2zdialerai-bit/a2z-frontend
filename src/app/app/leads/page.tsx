"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { fetchLeads } from "@/lib/api";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    fetchLeads()
      .then((res) => setLeads(Array.isArray(res) ? res : []))
      .catch(() => setLeads([]));
  }, []);

  return (
    <AppShell
      title="Leads"
      subtitle="Review lead records, upload sources, and prepare outbound campaigns."
    >
      <div className="space-y-6">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Lead Management</h2>
              <p className="mt-1 text-sm text-white/50">
                Upload CSV lists from the backend endpoints and manage lead records here.
              </p>
            </div>
            <button className="rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-semibold hover:bg-blue-500">
              Upload CSV
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
          <div className="grid grid-cols-4 border-b border-white/10 px-5 py-4 text-xs uppercase tracking-wide text-white/40">
            <div>Name</div>
            <div>Phone</div>
            <div>Status</div>
            <div>Notes</div>
          </div>

          {(leads.length ? leads : [
            { id: 1, full_name: "Maria Thompson", phone: "(555) 202-4455", status: "new", notes: "Expired listing" },
            { id: 2, full_name: "David Romero", phone: "(555) 188-2210", status: "attempted", notes: "Follow up Tuesday" },
            { id: 3, full_name: "Angela Brooks", phone: "(555) 444-9987", status: "qualified", notes: "Open to next week" },
          ]).map((lead: any) => (
            <div
              key={lead.id}
              className="grid grid-cols-4 border-b border-white/5 px-5 py-4 text-sm last:border-b-0"
            >
              <div>{lead.full_name || lead.name || "Unnamed Lead"}</div>
              <div className="text-white/65">{lead.phone || "—"}</div>
              <div className="capitalize text-blue-200">{lead.status || "new"}</div>
              <div className="text-white/50">{lead.notes || "—"}</div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
