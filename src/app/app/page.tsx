"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Bot,
  CalendarCheck,
  FileCode2,
  Home,
  Layers3,
  MapPinned,
  Mic2,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Target,
  Trophy,
  Users,
  Workflow,
} from "lucide-react";

const primaryWorkspaces = [
  {
    title: "Campaign Operator",
    eyebrow: "AI Outbound Engine",
    description:
      "Launch campaigns, manage lead lists, monitor live call flow, and turn conversations into booked seller appointments.",
    href: "/app/campaigns",
    icon: Bot,
    accent: "from-blue-600 via-indigo-600 to-violet-600",
    stats: ["12 active campaigns", "3,421 weekly calls", "48 booked appointments"],
    cta: "Enter campaign workspace",
  },
  {
    title: "Marketplace Buyer",
    eyebrow: "Verified Opportunity Access",
    description:
      "Search territories, unlock seller opportunities, and buy verified leads or booked appointments by market.",
    href: "/app/leads",
    icon: MapPinned,
    accent: "from-emerald-500 via-teal-500 to-cyan-600",
    stats: ["29 live opportunities", "Bronx + Queens inventory", "Buyer-ready pipeline"],
    cta: "Open marketplace buyer view",
  },
  {
    title: "Script Creator",
    eyebrow: "Pathway + Royalties",
    description:
      "Build, validate, convert, and monetize scripts through the pathway engine and creator marketplace.",
    href: "/app/pathways",
    icon: FileCode2,
    accent: "from-violet-600 via-fuchsia-600 to-pink-600",
    stats: ["18 live pathways", "Validator ready", "Royalty publishing"],
    cta: "Open script creator view",
  },
  {
    title: "Appointments Desk",
    eyebrow: "Closer Workflow",
    description:
      "Review booked calls, confirm next steps, and keep the scheduling pipeline tight for agents and teams.",
    href: "/app/appointments",
    icon: CalendarCheck,
    accent: "from-amber-500 via-orange-500 to-rose-500",
    stats: ["48 open appointments", "Follow-up queue", "Calendar-ready handoff"],
    cta: "Open appointments desk",
  },
];

const secondaryWorkspaces = [
  {
    title: "Agent Network",
    eyebrow: "Top Agent Discovery",
    description:
      "Showcase top agents by territory, power player-card style agent profiles, and support premium featured placement.",
    href: "/app/leads",
    icon: Trophy,
    accent: "from-sky-500 via-blue-500 to-indigo-600",
    stats: ["Bronx agent page", "Featured placement", "Verified public profile data"],
    cta: "Open agent network",
  },
  {
    title: "Homeowner Intake",
    eyebrow: "Seller Raise-Hand Flow",
    description:
      "Capture direct homeowner interest, score seller readiness, and route submissions into matching, nurturing, or marketplace supply.",
    href: "/app/leads",
    icon: Home,
    accent: "from-orange-500 via-amber-500 to-yellow-500",
    stats: ["Direct seller intake", "Readiness scoring", "Routing + nurture options"],
    cta: "Open homeowner flow",
  },
  {
    title: "Admin Autopilot",
    eyebrow: "Internal Platform Supply",
    description:
      "Control inventory generation, pricing, moderation, top-agent assignment, QA, and internal opportunity routing.",
    href: "/app/settings",
    icon: Layers3,
    accent: "from-slate-700 via-slate-800 to-slate-950",
    stats: ["Inventory controls", "Marketplace QA", "Internal routing"],
    cta: "Open admin autopilot",
  },
];

const platformSignals = [
  {
    label: "Campaign lanes",
    value: "4",
  },
  {
    label: "Expansion lanes",
    value: "3",
  },
  {
    label: "Marketplace inventory",
    value: "29",
  },
  {
    label: "Published pathways",
    value: "18",
  },
];

const bottomFeatures = [
  {
    icon: <Mic2 className="h-5 w-5" />,
    title: "Premium Custom Voice",
    text: "A branded premium voice layer for agents who want a more personalized calling experience.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Compliance + DNC",
    text: "Suppression controls, opt-out handling, and safer outbound workflows must stay visible platform-wide.",
  },
  {
    icon: <Store className="h-5 w-5" />,
    title: "Lead Marketplace",
    text: "Unlockable territory-based opportunity inventory with stronger buyer-facing positioning.",
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "Premium Positioning",
    text: "Every lane should feel premium and purpose-built, not like one generic CRM dashboard.",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_38%,#ffffff_100%)] text-slate-900">
      <section className="border-b border-[#dbe7ff] bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#2563eb_0%,#4f46e5_100%)] text-white shadow-lg">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                A2Z Dialer
              </div>
              <div className="mt-1 text-3xl font-semibold tracking-tight text-[#163b7a]">
                Workspace Selector
              </div>
              <div className="mt-1 text-sm text-slate-500">
                Choose the part of the platform you want to operate.
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="rounded-full border border-[#dbe7ff] bg-white px-4 py-2 text-sm font-medium text-slate-600">
              Multi-lane seller opportunity OS
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <section className="relative overflow-hidden rounded-[38px] border border-[#dbe7ff] bg-[linear-gradient(135deg,#0f172a_0%,#153b7a_35%,#2563eb_72%,#7c3aed_100%)] p-8 text-white shadow-[0_28px_80px_rgba(37,99,235,0.18)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.10),transparent_18%)]" />

          <div className="relative z-10 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Choose your operating lane
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                This page should route people
                <br />
                into the right workspace.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/85 md:text-base">
                A2Z is not one dashboard for everyone. Campaign operators, buyers,
                script creators, closers, agent-network users, homeowners, and admins
                should each enter a purpose-built workspace with its own navigation
                and dashboard.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <HeroPill text="Campaign engine" />
                <HeroPill text="Marketplace buyer flow" />
                <HeroPill text="Top-agent network" />
                <HeroPill text="Homeowner raise-hand flow" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {platformSignals.map((item) => (
                <GlassStat key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#163b7a]">
              Core workspaces
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              These are the main product areas people will enter most often.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {primaryWorkspaces.map((card) => (
              <WorkspaceCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#163b7a]">
              Expansion and platform lanes
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              These complete the memo vision beyond only outbound dialing.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {secondaryWorkspaces.map((card) => (
              <WorkspaceCard key={card.title} compact {...card} />
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-4">
          {bottomFeatures.map((item) => (
            <BottomCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

function WorkspaceCard({
  title,
  eyebrow,
  description,
  href,
  icon: Icon,
  accent,
  stats,
  cta,
  compact = false,
}: {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  icon: any;
  accent: string;
  stats: string[];
  cta: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[34px] border border-[#e6eefc] bg-white p-6 shadow-[0_14px_40px_rgba(21,59,122,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(21,59,122,0.10)]"
    >
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`} />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}
          >
            <Icon className="h-7 w-7" />
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              {eyebrow}
            </div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#163b7a]">
              {title}
            </h3>
          </div>
        </div>

        <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#2563eb]" />
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-500">{description}</p>

      <div className={`mt-5 grid gap-3 ${compact ? "grid-cols-1" : "sm:grid-cols-3"}`}>
        {stats.map((stat) => (
          <div
            key={stat}
            className="rounded-2xl border border-[#e6eefc] bg-[linear-gradient(145deg,#ffffff_0%,#f7fbff_100%)] px-4 py-4 text-sm font-medium text-slate-700"
          >
            {stat}
          </div>
        ))}
      </div>

      <div className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#0f172a] px-4 py-3 text-sm font-semibold text-white transition group-hover:bg-[#2563eb]">
        {cta}
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}

function HeroPill({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-100 backdrop-blur">
      {text}
    </div>
  );
}

function GlassStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/70">
        {label}
      </div>
      <div className="mt-2 text-3xl font-semibold tracking-tight text-white">
        {value}
      </div>
    </div>
  );
}

function BottomCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-[#e6eefc] bg-white p-5 shadow-[0_14px_40px_rgba(21,59,122,0.05)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2563eb]">
        {icon}
      </div>
      <h4 className="mt-4 text-lg font-semibold text-[#163b7a]">{title}</h4>
      <p className="mt-2 text-sm leading-7 text-slate-500">{text}</p>
    </div>
  );
}