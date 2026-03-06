"use client";

import { useEffect, useMemo, useState } from "react";
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
      subtitle="Monitor workspace performance, campaign activity, appointments, and outbound calling health."
    >
      <div className="space-y-6">
        <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-2">
          <MetricCard
            label="Lead Lists"
            value={formatNumber(metrics.lead_lists)}
            hint="Uploaded sources"
          />
          <MetricCard
            label="Leads"
            value={formatNumber(metrics.leads)}
            hint="Total records"
          />
          <MetricCard
            label="Campaigns"
            value={formatNumber(metrics.campaigns)}
            hint={`${formatNumber(metrics.active_campaigns)} active`}
          />
          <MetricCard
            label="Appointments"
            value={formatNumber(metrics.appointments)}
            hint={`${formatPercent(metrics.appointment_rate)} rate`}
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Weekly Call Activity</h2>
                <p className="text-sm text-white/50">
                  Outbound volume snapshot for your operations view
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                Live Overview
              </div>
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.35)" />
                  <YAxis stroke="rgba(255,255,255,0.35)" />
                  <Tooltip
                    contentStyle={{
                      background: "#0f172a",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 16,
                      color: "#fff",
                    }}
                  />
                  <Bar dataKey="calls" radius={[8, 8, 0, 0]} fill="rgba(59,130,246,0.9)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <div className="mb-5">
              <h2 className="text-lg font-semibold">Call Outcomes</h2>
              <p className="text-sm text-white/50">
                Quick view of connection mix and booking share
              </p>
            </div>

            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={95}
                    paddingAngle={4}
                  >
                    {pieData.map((_, index) => {
                      const fills = [
                        "rgba(59,130,246,0.95)",
                        "rgba(148,163,184,0.65)",
                        "rgba(245,158,11,0.85)",
                        "rgba(34,197,94,0.9)",
                      ];
                      return <Cell key={index} fill={fills[index % fills.length]} />;
                    })}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid gap-3">
              {pieData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
                >
                  <span className="text-sm text-white/70">{item.name}</span>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Workspace Summary</h2>
            <p className="mt-1 text-sm text-white/50">
              High-level visibility across pathways, compliance, and activity.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <SummaryBox
                label="Workspace"
                value={data?.workspace?.name || "Default Workspace"}
              />
              <SummaryBox
                label="Pathways"
                value={formatNumber(metrics.pathways)}
              />
              <SummaryBox
                label="DNC Entries"
                value={formatNumber(metrics.dnc_entries)}
              />
              <SummaryBox
                label="Connection Rate"
                value={formatPercent(metrics.connection_rate)}
              />
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Recent Calls</h2>
            <p className="mt-1 text-sm text-white/50">
              Most recent activity logged by your backend
            </p>

            <div className="mt-5 space-y-3">
              {(data?.recent_calls?.length ? data.recent_calls : [
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
              ]).map((call: any) => (
                <div
                  key={call.id}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
                >
                  <div>
                    <div className="text-sm font-medium">
                      {call.lead_name || "Unknown Lead"}
                    </div>
                    <div className="text-xs text-white/45">
                      {call.phone || "No phone"}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-wide text-blue-200">
                      {call.outcome || "unknown"}
                    </div>
                    <div className="text-xs text-white/40">
                      {call.created_at || ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {loading ? (
              <div className="mt-4 text-sm text-white/45">Loading dashboard...</div>
            ) : null}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function MetricCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
      <div className="text-sm text-white/55">{label}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight">{value}</div>
      <div className="mt-2 text-sm text-white/40">{hint}</div>
    </div>
  );
}

function SummaryBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
      <div className="text-xs uppercase tracking-wide text-white/35">{label}</div>
      <div className="mt-2 text-base font-medium">{value}</div>
    </div>
  );
}
