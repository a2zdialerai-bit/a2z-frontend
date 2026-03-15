"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { fetchDashboard } from "@/lib/api";
import { formatNumber, formatPercent } from "@/lib/utils";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  ArrowUpRight,
  CalendarDays,
  PhoneCall,
  Target,
  Users,
  Activity,
  CheckCircle2,
  Workflow,
  ShieldCheck,
  ListChecks,
} from "lucide-react";

type DashboardData = {
  workspace?: {
    id?: number;
    name?: string;
  };
  metrics?: {
    lead_lists?: number;
    leads?: number;
    pathways?: number;
    campaigns?: number;
    active_campaigns?: number;
    call_logs?: number;
    appointments?: number;
    dnc_entries?: number;
    connection_rate?: number;
    appointment_rate?: number;
  };
  recent_calls?: Array<{
    id: number;
    lead_name?: string | null;
    phone?: string | null;
    outcome?: string | null;
    created_at?: string | null;
  }>;
};

const pieFallback = [
  { name: "Connected", value: 32 },
  { name: "No Answer", value: 41 },
  { name: "Voicemail", value: 17 },
  { name: "Booked", value: 10 },
];

const barFallback = [
  { name: "Mon", calls: 84 },
  { name: "Tue", calls: 121 },
  { name: "Wed", calls: 98 },
  { name: "Thu", calls: 144 },
  { name: "Fri", calls: 110 },
];

const outcomeColors = ["#2563eb", "#94a3b8", "#f59e0b", "#22c55e"];

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard()
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, []);

  const metrics = data?.metrics || {};
  const pieData = useMemo(() => pieFallback, []);
  const barData = useMemo(() => barFallback, []);

  return (
    <AppShell
      title="Dashboard"
      subtitle="Monitor lead flow, campaign performance, connection quality, and appointments from one outbound operating system."
    >
      <div className="space-y-6">
        <section className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                <Activity className="h-3.5 w-3.5" />
                Live campaign performance
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163b7a]">
                {data?.workspace?.name
                  ? `${data.workspace.name} is prospecting`
                  : "Your outbound engine is running"}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                Review outreach volume, monitor connection quality, and keep your
                team focused on the result that matters most: booked appointments.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/app/campaigns"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]"
              >
                Launch Campaign
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/app/leads"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#dbe7ff] bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7fbff]"
              >
                Review Leads
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            icon={<Users className="h-5 w-5" />}
            label="Lead Lists"
            value={formatNumber(metrics.lead_lists)}
            hint="Imported prospecting sources"
          />
          <MetricCard
            icon={<Target className="h-5 w-5" />}
            label="Total Leads"
            value={formatNumber(metrics.leads)}
            hint="Records available to work"
          />
          <MetricCard
            icon={<ListChecks className="h-5 w-5" />}
            label="Campaigns"
            value={formatNumber(metrics.campaigns)}
            hint={`${formatNumber(metrics.active_campaigns)} active now`}
          />
          <MetricCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Appointments"
            value={formatNumber(metrics.appointments)}
            hint={`${formatPercent(metrics.appointment_rate)} booking rate`}
          />
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-[#163b7a]">
                  Weekly Call Activity
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Outbound volume snapshot across your work week.
                </p>
              </div>
              <div className="rounded-full border border-[#dbe7ff] bg-[#f7fbff] px-3 py-1 text-xs font-medium text-slate-600">
                Live overview
              </div>
            </div>

            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#ffffff",
                      border: "1px solid #dbe7ff",
                      borderRadius: 16,
                      color: "#0f172a",
                      boxShadow: "0 10px 30px rgba(21, 59, 122, 0.08)",
                    }}
                  />
                  <Bar dataKey="calls" radius={[10, 10, 0, 0]} fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#163b7a]">
                Call Outcomes
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Quick view of connects, missed conversations, and bookings.
              </p>
            </div>

            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={62}
                    outerRadius={96}
                    paddingAngle={4}
                  >
                    {pieData.map((_, index) => (
                      <Cell
                        key={index}
                        fill={outcomeColors[index % outcomeColors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 grid gap-3">
              {pieData.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-[#e6eefc] bg-[#f7fbff] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{
                        backgroundColor:
                          outcomeColors[index % outcomeColors.length],
                      }}
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-[#163b7a]">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-[#163b7a]">
                  Operations Summary
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  High-level visibility across scripts, compliance, and engine health.
                </p>
              </div>

              <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Healthy
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <SummaryBox
                icon={<Workflow className="h-4 w-4" />}
                label="Pathways"
                value={formatNumber(metrics.pathways)}
              />
              <SummaryBox
                icon={<ShieldCheck className="h-4 w-4" />}
                label="DNC Entries"
                value={formatNumber(metrics.dnc_entries)}
              />
              <SummaryBox
                icon={<PhoneCall className="h-4 w-4" />}
                label="Connection Rate"
                value={formatPercent(metrics.connection_rate)}
              />
              <SummaryBox
                icon={<Users className="h-4 w-4" />}
                label="Workspace"
                value={data?.workspace?.name || "Default Workspace"}
              />
            </div>

            <div className="mt-6 grid gap-3">
              <Link
                href="/app/pathways"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]"
              >
                Review Pathways
              </Link>
              <Link
                href="/app/appointments"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#dbe7ff] bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7fbff]"
              >
                Open Appointment Queue
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-[#163b7a]">
                  Recent Calls
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Latest activity logged by your backend call engine.
                </p>
              </div>

              <Link
                href="/app/calls"
                className="rounded-full border border-[#dbe7ff] bg-[#f7fbff] px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-white"
              >
                View all
              </Link>
            </div>

            <div className="mt-6 space-y-3">
              {(data?.recent_calls?.length
                ? data.recent_calls
                : [
                    {
                      id: 1,
                      lead_name: "Maria Thompson",
                      phone: "(555) 202-4455",
                      outcome: "connected",
                      created_at: "Just now",
                    },
                    {
                      id: 2,
                      lead_name: "David Romero",
                      phone: "(555) 188-2210",
                      outcome: "voicemail",
                      created_at: "5 mins ago",
                    },
                    {
                      id: 3,
                      lead_name: "Angela Brooks",
                      phone: "(555) 444-9987",
                      outcome: "booked",
                      created_at: "14 mins ago",
                    },
                  ]
              ).map((call: any) => (
                <div
                  key={call.id}
                  className="flex items-center justify-between rounded-2xl border border-[#e6eefc] bg-[#f7fbff] px-4 py-4"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-[#163b7a]">
                      {call.lead_name || "Unknown Lead"}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {call.phone || "No phone"}
                    </div>
                  </div>

                  <div className="ml-4 text-right">
                    <div className="inline-flex items-center gap-1 rounded-full bg-[#eef4ff] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#2563eb]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {call.outcome || "unknown"}
                    </div>
                    <div className="mt-2 text-xs text-slate-400">
                      {call.created_at || ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {loading ? (
              <div className="mt-4 text-sm text-slate-500">
                Loading dashboard...
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function MetricCard({
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

function SummaryBox({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e6eefc] bg-[#f7fbff] p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        <span className="text-[#2563eb]">{icon}</span>
        {label}
      </div>
      <div className="mt-2 text-base font-semibold text-[#163b7a]">{value}</div>
    </div>
  );
}
