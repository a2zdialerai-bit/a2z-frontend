"use client";

import { AppShell } from "@/components/app-shell";
import {
  CalendarDays,
  CreditCard,
  Mic,
  PhoneCall,
  PlugZap,
  Settings2,
} from "lucide-react";

const integrations = [
  {
    name: "Twilio",
    description:
      "Phone numbers, call webhooks, Media Streams, and SMS confirmation workflows.",
    status: "Configured in backend env",
    icon: <PhoneCall className="h-5 w-5" />,
  },
  {
    name: "OpenAI Realtime",
    description:
      "Realtime voice pipeline, low-latency responses, and interruption-aware call handling.",
    status: "Ready for env setup",
    icon: <PlugZap className="h-5 w-5" />,
  },
  {
    name: "ElevenLabs",
    description:
      "Voice synthesis pipeline for premium voice modes and future workspace voice options.",
    status: "Ready for env setup",
    icon: <Mic className="h-5 w-5" />,
  },
  {
    name: "Google Calendar",
    description:
      "Calendar event creation, appointment sync, and scheduled meeting visibility.",
    status: "Needs OAuth credentials",
    icon: <CalendarDays className="h-5 w-5" />,
  },
  {
    name: "Calendly",
    description:
      "Fallback booking mode and optional webhook-based appointment confirmation flow.",
    status: "Needs link or API token",
    icon: <CalendarDays className="h-5 w-5" />,
  },
  {
    name: "Stripe",
    description:
      "Subscription billing, workspace plans, feature gating, and future usage controls.",
    status: "Optional until billing launch",
    icon: <CreditCard className="h-5 w-5" />,
  },
];

export default function IntegrationsPage() {
  return (
    <AppShell
      title="Integrations"
      subtitle="Manage telephony, voice, scheduling, booking, and billing systems that power your outbound AI workflow."
    >
      <div className="space-y-6">
        <section className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
              <PlugZap className="h-3.5 w-3.5" />
              Platform connections
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163b7a]">
              Connect the systems behind your outbound engine
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Integrations power calling, voice, scheduling, and monetization.
              This is the infrastructure layer that turns A2Z Dialer into a full
              outbound operating system.
            </p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Telephony Ready" value="Twilio" hint="Calling infrastructure" />
          <StatCard label="Voice Stack" value="AI + TTS" hint="Realtime conversation layer" />
          <StatCard label="Scheduling Layer" value="Calendar Sync" hint="Appointment routing" />
        </section>

        <section className="grid gap-4">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="rounded-[32px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-[#eef4ff] p-3 text-[#2563eb]">
                    {item.icon}
                  </div>

                  <div>
                    <div className="text-lg font-semibold text-[#163b7a]">
                      {item.name}
                    </div>
                    <div className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                      {item.description}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="rounded-full border border-[#dbe7ff] bg-[#f7fbff] px-3 py-1 text-xs font-medium text-slate-600">
                    {item.status}
                  </div>

                  <button className="inline-flex items-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">
                    <Settings2 className="h-4 w-4" />
                    Configure
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </AppShell>
  );
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-[28px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
      <div className="text-sm font-medium text-slate-500">{label}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-[#163b7a]">
        {value}
      </div>
      <div className="mt-2 text-sm text-slate-400">{hint}</div>
    </div>
  );
}
