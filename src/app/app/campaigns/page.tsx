"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { fetchCampaigns } from "@/lib/api";
import {
  ArrowUpRight,
  Pause,
  Play,
  Plus,
  Radio,
  Target,
  Workflow,
  Users,
} from "lucide-react";

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    fetchCampaigns()
      .then((res) => setCampaigns(Array.isArray(res) ? res : []))
      .catch(() => setCampaigns([]));
  }, []);

  const rows = useMemo(
    () =>
      campaigns.length
        ? campaigns
        : [
            {
              id: 1,
              name: "Bronx Expired March",
              status: "running",
              pathway: "Expired Listings Master Flow",
            },
            {
              id: 2,
              name: "Queens FSBO Test",
              status: "paused",
              pathway: "FSBO Conversion Flow",
            },
          ],
    [campaigns]
  );

  const runningCount = rows.filter(
    (campaign) => String(campaign.status || "").toLowerCase() === "running"
  ).length;

  const pausedCount = rows.filter(
    (campaign) => String(campaign.status || "").toLowerCase() === "paused"
  ).length;

  return (
    <AppShell
      title="Campaigns"
      subtitle="Launch, pause, and monitor AI outbound campaigns across lead lists, pathways, and workspace activity."
    >
      <div className="space-y-6">
        <section className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                <Radio className="h-3.5 w-3.5" />
                Campaign command center
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163b7a]">
                Run outbound campaigns with more control
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Connect lead lists, pathways, and dialing workflows into one
                cleaner system built for real estate teams, agencies, and outbound operators.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">
                <Plus className="h-4 w-4" />
                New Campaign
              </button>

              <Link
                href="/app/pathways"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#dbe7ff] bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7fbff]"
              >
                Review Pathways
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <StatCard
            icon={<Radio className="h-5 w-5" />}
            label="Total Campaigns"
            value={String(rows.length)}
            hint="Configured outbound campaigns"
          />
          <StatCard
            icon={<Play className="h-5 w-5" />}
            label="Running"
            value={String(runningCount)}
            hint="Currently dialing"
          />
          <StatCard
            icon={<Pause className="h-5 w-5" />}
            label="Paused"
            value={String(pausedCount)}
            hint="Waiting for next action"
          />
        </section>

        <section className="grid gap-4">
          {rows.map((campaign: any) => (
            <div
              key={campaign.id}
              className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="truncate text-xl font-semibold tracking-tight text-[#163b7a]">
                      {campaign.name || "Untitled Campaign"}
                    </div>
                    <span className={statusClass(campaign.status)}>
                      {campaign.status || "draft"}
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <MetaBox
                      icon={<Workflow className="h-4 w-4" />}
                      label="Pathway"
                      value={campaign.pathway || campaign.pathway_name || "—"}
                    />
                    <MetaBox
                      icon={<Users className="h-4 w-4" />}
                      label="Lead Source"
                      value={campaign.lead_list || campaign.lead_list_name || "Assigned list"}
                    />
                    <MetaBox
                      icon={<Target className="h-4 w-4" />}
                      label="Campaign Goal"
                      value="Book appointments"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 xl:justify-end">
                  <button className="inline-flex items-center gap-2 rounded-2xl border border-[#dbe7ff] bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-[#f7fbff]">
                    <Pause className="h-4 w-4" />
                    Pause
                  </button>

                  <button className="inline-flex items-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">
                    <Play className="h-4 w-4" />
                    Start
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

function MetaBox({
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
      <div className="mt-2 truncate text-sm font-semibold text-[#163b7a]">
        {value}
      </div>
    </div>
  );
}

function statusClass(status: string) {
  const value = String(status || "draft").toLowerCase();

  if (value === "running") {
    return "inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold capitalize text-emerald-700";
  }

  if (value === "paused") {
    return "inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold capitalize text-amber-700";
  }

  return "inline-flex rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold capitalize text-[#2563eb]";
}
