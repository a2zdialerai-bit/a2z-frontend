"use client";

import { AppShell } from "@/components/app-shell";
import { CalendarDays, Clock3, Settings2, ShieldCheck } from "lucide-react";

export default function SettingsPage() {
  return (
    <AppShell
      title="Settings"
      subtitle="Manage workspace profile, calling rules, scheduling defaults, and outbound configuration."
    >
      <div className="space-y-6">
        <section className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
              <Settings2 className="h-3.5 w-3.5" />
              Workspace configuration
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163b7a]">
              Configure how your outbound system runs
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Control workspace identity, calling rules, scheduling defaults, and
              the settings that shape how A2Z Dialer operates day to day.
            </p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <StatCard
            icon={<Settings2 className="h-5 w-5" />}
            label="Workspace Mode"
            value="Configured"
            hint="Core workspace settings available"
          />
          <StatCard
            icon={<Clock3 className="h-5 w-5" />}
            label="Calling Rules"
            value="Active"
            hint="Window and schedule defaults set"
          />
          <StatCard
            icon={<ShieldCheck className="h-5 w-5" />}
            label="Scheduling"
            value="Enabled"
            hint="Booking defaults ready"
          />
        </section>

        <div className="grid gap-6 xl:grid-cols-2">
          <section className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#eef4ff] p-3 text-[#2563eb]">
                <Settings2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#163b7a]">
                  Workspace Settings
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Identity, voice defaults, and scheduling links.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <Field label="Workspace Name" defaultValue="Demo Brokerage" />
              <Field label="Default Timezone" defaultValue="America/New_York" />
              <Field label="Default Voice Mode" defaultValue="realtime" />
              <Field
                label="Calendly Link"
                defaultValue="https://calendly.com/your-handle/15min"
              />
            </div>
          </section>

          <section className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#eef4ff] p-3 text-[#2563eb]">
                <CalendarDays className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#163b7a]">
                  Calling Window Rules
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Configure when campaigns can place calls and how confirmations behave.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <Field label="Call Window Start" defaultValue="09:00" />
              <Field label="Call Window End" defaultValue="19:00" />
              <Field label="Call Days" defaultValue="Mon,Tue,Wed,Thu,Fri,Sat" />
              <Field label="SMS Confirmation" defaultValue="Enabled" />
            </div>
          </section>
        </div>
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

function Field({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-medium text-slate-600">{label}</div>
      <input
        defaultValue={defaultValue}
        className="w-full rounded-2xl border border-[#dbe7ff] bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#93c5fd] focus:ring-4 focus:ring-[#eaf2ff]"
      />
    </label>
  );
}
