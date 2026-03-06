"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { fetchAppointments } from "@/lib/api";
import { formatDateTime } from "@/lib/utils";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    fetchAppointments()
      .then((res) => setAppointments(Array.isArray(res) ? res : []))
      .catch(() => setAppointments([]));
  }, []);

  return (
    <AppShell
      title="Appointments"
      subtitle="Track booked meetings, confirmations, and calendar sync status."
    >
      <div className="grid gap-4">
        {(appointments.length ? appointments : [
          {
            id: 1,
            lead_name: "Angela Brooks",
            scheduled_for: new Date().toISOString(),
            status: "confirmed",
            source: "google",
          },
          {
            id: 2,
            lead_name: "Marcus Lee",
            scheduled_for: new Date(Date.now() + 86400000).toISOString(),
            status: "pending",
            source: "calendly",
          },
        ]).map((appt: any) => (
          <div
            key={appt.id}
            className="rounded-[28px] border border-white/10 bg-white/5 p-5"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold">
                  {appt.lead_name || "Unnamed Appointment"}
                </div>
                <div className="mt-1 text-sm text-white/50">
                  {formatDateTime(appt.scheduled_for)}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-purple-200">
                  {appt.source || "manual"}
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-emerald-200">
                  {appt.status || "pending"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
