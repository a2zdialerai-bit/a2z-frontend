"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { fetchCampaigns } from "@/lib/api";
import {
  ArrowRight,
  CalendarCheck,
  Filter,
  ListFilter,
  Mic2,
  Pause,
  Phone,
  Play,
  Plus,
  Radio,
  Search,
  Target,
  Workflow,
} from "lucide-react";

type CampaignRow = {
  id: number;
  name?: string;
  status?: string;
  pathway?: string;
  pathway_name?: string;
  lead_list?: string;
  lead_list_name?: string;
  voice_mode?: string;
  calls_today?: number;
  booked_today?: number;
  connect_rate?: string;
  next_action?: string;
};

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<CampaignRow[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    fetchCampaigns()
      .then((res) => setCampaigns(Array.isArray(res) ? res : []))
      .catch(() => setCampaigns([]));
  }, []);

  const rows = useMemo<CampaignRow[]>(
    () =>
      campaigns.length
        ? campaigns
        : [
            {
              id: 1,
              name: "Bronx Expired March",
              status: "running",
              pathway: "Expired Listings Master Flow",
              lead_list: "Bronx Expired Sellers",
              voice_mode: "Realtime AI Voice",
              calls_today: 184,
              booked_today: 7,
              connect_rate: "34%",
              next_action: "Monitor live dial",
            },
            {
              id: 2,
              name: "Queens FSBO Test",
              status: "paused",
              pathway: "FSBO Conversion Flow",
              lead_list: "Queens FSBO Owners",
              voice_mode: "Premium Custom Voice",
              calls_today: 92,
              booked_today: 2,
              connect_rate: "27%",
              next_action: "Resume after review",
            },
            {
              id: 3,
              name: "CRM Reactivation East",
              status: "draft",
              pathway: "Old CRM Re-Engage Flow",
              lead_list: "Old CRM Contacts",
              voice_mode: "Realtime AI Voice",
              calls_today: 0,
              booked_today: 0,
              connect_rate: "—",
              next_action: "Assign lead list",
            },
            {
              id: 4,
              name: "Yonkers Circle Prospecting",
              status: "running",
              pathway: "Circle Prospecting Flow",
              lead_list: "Yonkers Homeowners",
              voice_mode: "Realtime AI Voice",
              calls_today: 146,
              booked_today: 5,
              connect_rate: "31%",
              next_action: "Watch objections",
            },
          ],
    [campaigns]
  );

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const matchesSearch =
        !search ||
        [
          row.name,
          row.pathway,
          row.pathway_name,
          row.lead_list,
          row.lead_list_name,
          row.voice_mode,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all"
          ? true
          : String(row.status || "").toLowerCase() === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [rows, search, statusFilter]);

  const runningCount = rows.filter(
    (campaign) => String(campaign.status || "").toLowerCase() === "running"
  ).length;

  const pausedCount = rows.filter(
    (campaign) => String(campaign.status || "").toLowerCase() === "paused"
  ).length;

  const totalCalls = rows.reduce(
    (sum, campaign) => sum + Number(campaign.calls_today || 0),
    0
  );

  const totalBooked = rows.reduce(
    (sum, campaign) => sum + Number(campaign.booked_today || 0),
    0
  );

  return (
    <AppShell
      title="Campaign Operator"
      subtitle="Live operator console for AI outbound campaigns, pathway routing, and appointment-focused execution."
    >
      <div className="space-y-6">
        <section className="rounded-[28px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                <Radio className="h-3.5 w-3.5" />
                Outbound operator console
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163b7a]">
                Run AI campaigns like a control room
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Monitor dialing activity, pathways, lead lists, voice mode, and
                booking performance from one focused operator workspace.
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
                Pathways
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/app/leads"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#dbe7ff] bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7fbff]"
              >
                Lead Lists
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <KpiCard
            label="Running"
            value={String(runningCount)}
            detail="Campaigns dialing now"
            icon={<Play className="h-5 w-5" />}
          />
          <KpiCard
            label="Paused"
            value={String(pausedCount)}
            detail="Waiting for restart"
            icon={<Pause className="h-5 w-5" />}
          />
          <KpiCard
            label="Calls Today"
            value={String(totalCalls)}
            detail="Across all campaigns"
            icon={<Phone className="h-5 w-5" />}
          />
          <KpiCard
            label="Booked Today"
            value={String(totalBooked)}
            detail="Appointments captured"
            icon={<CalendarCheck className="h-5 w-5" />}
          />
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-[28px] border border-[#e6eefc] bg-white shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
            <div className="border-b border-[#edf3ff] p-5">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#163b7a]">
                    Campaign roster
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Search, filter, and control active outbound campaigns.
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:flex-row">
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search campaigns, pathways, or lead lists"
                      className="h-11 w-full rounded-2xl border border-[#dbe7ff] bg-[#f7fbff] pl-10 pr-4 text-sm outline-none transition focus:border-[#2563eb] md:w-[300px]"
                    />
                  </div>

                  <div className="relative">
                    <ListFilter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="h-11 rounded-2xl border border-[#dbe7ff] bg-[#f7fbff] pl-10 pr-9 text-sm outline-none transition focus:border-[#2563eb]"
                    >
                      <option value="all">All statuses</option>
                      <option value="running">Running</option>
                      <option value="paused">Paused</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="border-b border-[#edf3ff] bg-[#fbfdff]">
                  <tr className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    <th className="px-5 py-4">Campaign</th>
                    <th className="px-5 py-4">Pathway</th>
                    <th className="px-5 py-4">Lead List</th>
                    <th className="px-5 py-4">Voice</th>
                    <th className="px-5 py-4">Status</th>
                    <th className="px-5 py-4">Calls</th>
                    <th className="px-5 py-4">Booked</th>
                    <th className="px-5 py-4">Next Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((campaign) => (
                    <tr
                      key={campaign.id}
                      className="border-b border-[#edf3ff] transition hover:bg-[#f9fbff]"
                    >
                      <td className="px-5 py-4 align-top">
                        <div className="font-semibold text-[#163b7a]">
                          {campaign.name || "Untitled Campaign"}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          Appointment-first outbound lane
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-700">
                        {campaign.pathway || campaign.pathway_name || "—"}
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-700">
                        {campaign.lead_list ||
                          campaign.lead_list_name ||
                          "Assigned list"}
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-700">
                        {campaign.voice_mode || "Realtime AI Voice"}
                      </td>
                      <td className="px-5 py-4">{statusChip(campaign.status)}</td>
                      <td className="px-5 py-4 text-sm font-semibold text-[#163b7a]">
                        {campaign.calls_today ?? 0}
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold text-[#163b7a]">
                        {campaign.booked_today ?? 0}
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-600">
                        {campaign.next_action || "Review"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#eef4ff] p-3 text-[#2563eb]">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#163b7a]">
                    Operator controls
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Quick actions for live campaign management.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <ActionButton
                  icon={<Play className="h-4 w-4" />}
                  text="Start Auto Dial"
                  primary
                />
                <ActionButton
                  icon={<Pause className="h-4 w-4" />}
                  text="Pause Selected"
                />
                <ActionButton
                  icon={<Workflow className="h-4 w-4" />}
                  text="Switch Pathway"
                />
                <ActionButton
                  icon={<Filter className="h-4 w-4" />}
                  text="Review Filters"
                />
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
              <h3 className="text-lg font-semibold text-[#163b7a]">
                Live signal
              </h3>
              <div className="mt-4 grid gap-3">
                <SignalRow label="Connection quality" value="34%" />
                <SignalRow label="Primary goal" value="Book appointments" />
                <SignalRow label="Logic mode" value="Pathway controlled" />
                <SignalRow label="Voice layer" value="Realtime + premium" />
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e6eefc] bg-[linear-gradient(145deg,#ffffff_0%,#f7fbff_100%)] p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
              <h3 className="text-lg font-semibold text-[#163b7a]">
                Workspace shortcuts
              </h3>
              <div className="mt-4 grid gap-3">
                <ShortcutLink
                  href="/app/calls"
                  icon={<Phone className="h-4 w-4" />}
                  title="Call Logs"
                  text="Inspect outcomes and transcripts"
                />
                <ShortcutLink
                  href="/app/appointments"
                  icon={<CalendarCheck className="h-4 w-4" />}
                  title="Appointments"
                  text="Review booked seller conversations"
                />
                <ShortcutLink
                  href="/app/pathways"
                  icon={<Workflow className="h-4 w-4" />}
                  title="Pathways"
                  text="Edit logic and objection routes"
                />
                <ShortcutLink
                  href="/app/leads"
                  icon={<Target className="h-4 w-4" />}
                  title="Lead Lists"
                  text="Prepare lists for new campaigns"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <BottomInsight
            icon={<Mic2 className="h-5 w-5" />}
            title="Voice mode visibility"
            text="Operators should always know whether a campaign is using realtime AI or premium custom voice."
          />
          <BottomInsight
            icon={<Workflow className="h-5 w-5" />}
            title="Pathway-first control"
            text="Campaign performance should be tied to pathway logic so objection handling stays auditable."
          />
          <BottomInsight
            icon={<CalendarCheck className="h-5 w-5" />}
            title="Appointment-first KPI"
            text="The page should prioritize booked seller conversations over vanity metrics."
          />
        </section>
      </div>
    </AppShell>
  );
}

function KpiCard({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-[#eef4ff] p-3 text-[#2563eb]">{icon}</div>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Live
        </span>
      </div>
      <div className="mt-5 text-sm font-medium text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight text-[#163b7a]">
        {value}
      </div>
      <div className="mt-2 text-sm text-slate-400">{detail}</div>
    </div>
  );
}

function ActionButton({
  icon,
  text,
  primary = false,
}: {
  icon: React.ReactNode;
  text: string;
  primary?: boolean;
}) {
  return (
    <button
      className={
        primary
          ? "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]"
          : "inline-flex items-center justify-center gap-2 rounded-2xl border border-[#dbe7ff] bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7fbff]"
      }
    >
      {icon}
      {text}
    </button>
  );
}

function SignalRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#e6eefc] bg-[#f7fbff] px-4 py-3">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-semibold text-[#163b7a]">{value}</span>
    </div>
  );
}

function ShortcutLink({
  href,
  icon,
  title,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start justify-between gap-3 rounded-2xl border border-[#e6eefc] bg-white px-4 py-4 transition hover:border-[#bfd4ff]"
    >
      <div className="flex gap-3">
        <div className="rounded-xl bg-[#eef4ff] p-2.5 text-[#2563eb]">{icon}</div>
        <div>
          <div className="text-sm font-semibold text-[#163b7a]">{title}</div>
          <div className="mt-1 text-xs text-slate-500">{text}</div>
        </div>
      </div>

      <ArrowRight className="mt-1 h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#2563eb]" />
    </Link>
  );
}

function BottomInsight({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.04)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2563eb]">
        {icon}
      </div>
      <h4 className="mt-4 text-lg font-semibold text-[#163b7a]">{title}</h4>
      <p className="mt-2 text-sm leading-7 text-slate-500">{text}</p>
    </div>
  );
}

function statusChip(status?: string) {
  const value = String(status || "draft").toLowerCase();

  if (value === "running") {
    return (
      <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold capitalize text-emerald-700">
        running
      </span>
    );
  }

  if (value === "paused") {
    return (
      <span className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold capitalize text-amber-700">
        paused
      </span>
    );
  }

  return (
    <span className="inline-flex rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold capitalize text-[#2563eb]">
      draft
    </span>
  );
}