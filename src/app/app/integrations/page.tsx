"use client";

import { AppShell } from "@/components/app-shell";

const integrations = [
  {
    name: "Twilio",
    description: "Phone numbers, call webhooks, Media Streams, SMS confirmations.",
    status: "Configured in backend env",
  },
  {
    name: "OpenAI Realtime",
    description: "Realtime voice pipeline, low-latency response path, barge-in target.",
    status: "Ready for env setup",
  },
  {
    name: "ElevenLabs",
    description: "Voice clone pipeline for per-workspace upsell voice mode.",
    status: "Ready for env setup",
  },
  {
    name: "Google Calendar",
    description: "OAuth connect, calendar event creation, appointment sync.",
    status: "Needs OAuth credentials",
  },
  {
    name: "Calendly",
    description: "Fallback booking mode and optional webhook confirmation flow.",
    status: "Needs link or API token",
  },
  {
    name: "Stripe",
    description: "Subscription billing, workspace plans, usage gating.",
    status: "Optional until billing launch",
  },
];

export default function IntegrationsPage() {
  return (
    <AppShell
      title="Integrations"
      subtitle="Manage telephony, voice, calendar, booking, and billing integrations."
    >
      <div className="grid gap-4">
        {integrations.map((item) => (
          <div
            key={item.name}
            className="rounded-[28px] border border-white/10 bg-white/5 p-5"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="mt-1 text-sm text-white/55">{item.description}</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200">
                  {item.status}
                </div>
                <button className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500">
                  Configure
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
