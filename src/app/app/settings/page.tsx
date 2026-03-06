"use client";

import { AppShell } from "@/components/app-shell";

export default function SettingsPage() {
  return (
    <AppShell
      title="Settings"
      subtitle="Workspace profile, calling rules, defaults, and feature configuration."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-[28px] border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold">Workspace Settings</h2>
          <div className="mt-5 grid gap-4">
            <Field label="Workspace Name" defaultValue="Demo Brokerage" />
            <Field label="Default Timezone" defaultValue="America/New_York" />
            <Field label="Default Voice Mode" defaultValue="realtime" />
            <Field label="Calendly Link" defaultValue="https://calendly.com/your-handle/15min" />
          </div>
        </section>

        <section className="rounded-[28px] border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold">Calling Window Rules</h2>
          <div className="mt-5 grid gap-4">
            <Field label="Call Window Start" defaultValue="09:00" />
            <Field label="Call Window End" defaultValue="19:00" />
            <Field label="Call Days" defaultValue="Mon,Tue,Wed,Thu,Fri,Sat" />
            <Field label="SMS Confirmation" defaultValue="Enabled" />
          </div>
        </section>
      </div>
    </AppShell>
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
      <div className="mb-2 text-sm text-white/65">{label}</div>
      <input
        defaultValue={defaultValue}
        className="w-full rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-white"
      />
    </label>
  );
}
