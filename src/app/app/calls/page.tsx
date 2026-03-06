"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { fetchCallLogs } from "@/lib/api";
import { formatDateTime } from "@/lib/utils";

export default function CallsPage() {
  const [calls, setCalls] = useState<any[]>([]);

  useEffect(() => {
    fetchCallLogs()
      .then((res) => setCalls(Array.isArray(res) ? res : []))
      .catch(() => setCalls([]));
  }, []);

  return (
    <AppShell
      title="Calls"
      subtitle="Inspect call outcomes, transcripts, dispositions, and route traces."
    >
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
        <div className="grid grid-cols-5 border-b border-white/10 px-5 py-4 text-xs uppercase tracking-wide text-white/40">
          <div>Lead</div>
          <div>Phone</div>
          <div>Outcome</div>
          <div>Created</div>
          <div>Route</div>
        </div>

        {(calls.length ? calls : [
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
        ]).map((call: any) => (
          <div
            key={call.id}
            className="grid grid-cols-5 border-b border-white/5 px-5 py-4 text-sm last:border-b-0"
          >
            <div>{call.lead_name || "Unknown Lead"}</div>
            <div className="text-white/60">{call.phone || "—"}</div>
            <div className="capitalize text-blue-200">{call.outcome || "unknown"}</div>
            <div className="text-white/50">{formatDateTime(call.created_at)}</div>
            <div className="truncate text-white/45">
              {call.route_trace || "—"}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
