import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AudioWaveform,
  BadgeDollarSign,
  BarChart3,
  Bot,
  Building2,
  CalendarCheck,
  CalendarRange,
  CheckCircle2,
  Clock,
  Code2,
  FileCode2,
  FileText,
  GitBranch,
  Home,
  Layers3,
  LockKeyhole,
  MapPinned,
  Mic2,
  Phone,
  PhoneOff,
  Play,
  Route,
  Rocket,
  Scale,
  Search,
  Shield,
  Sparkles,
  Star,
  Store,
  Target,
  TrendingDown,
  TrendingUp,
  Upload,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Manual dialing wastes hours",
    description:
      "Agents spend valuable time dialing numbers instead of having conversations, negotiating deals, and going on appointments.",
  },
  {
    icon: TrendingDown,
    title: "Burnout kills consistency",
    description:
      "Cold calling fatigue makes outreach inconsistent, which means pipeline generation becomes unpredictable.",
  },
  {
    icon: PhoneOff,
    title: "Follow-up falls through",
    description:
      "Without a system, promising leads get missed, callbacks slip, and appointment opportunities disappear.",
  },
  {
    icon: Users,
    title: "Teams struggle to scale",
    description:
      "When prospecting depends on human stamina alone, quality drops and scaling becomes operationally messy.",
  },
];

const workflowSteps = [
  {
    icon: Upload,
    title: "Upload leads",
    description:
      "Import expired listings, FSBOs, circle prospecting lists, and old CRM contacts.",
  },
  {
    icon: Route,
    title: "Choose or create a pathway",
    description:
      "Use structured conversation logic designed for your lead type, objections, and booking flow.",
  },
  {
    icon: Rocket,
    title: "Launch campaign",
    description:
      "Set timing, dialing rules, and start AI-powered outbound prospecting immediately.",
  },
  {
    icon: Phone,
    title: "AI handles the conversation",
    description:
      "The voice layer runs the call while the conversation layer controls logic, routing, and objection handling.",
  },
  {
    icon: UserCheck,
    title: "Qualify the opportunity",
    description:
      "The system extracts seller intent, status, timing, objections, and next-step signals in real time.",
  },
  {
    icon: CalendarCheck,
    title: "Book the appointment",
    description:
      "Qualified opportunities can be pushed into appointment workflows and synced into scheduling tools.",
  },
];

const platformFeatures = [
  {
    icon: Bot,
    title: "AI-powered outbound calling",
    description:
      "Natural-sounding AI voice agents handle opening, qualification, objection handling, and appointment setting.",
  },
  {
    icon: GitBranch,
    title: "Pathway-driven conversations",
    description:
      "Use structured call flows for expired listings, FSBO, circle prospecting, CRM reactivation, and custom use cases.",
  },
  {
    icon: CalendarRange,
    title: "Google Calendar + Calendly sync",
    description:
      "Push booked conversations into connected scheduling systems and keep your follow-up flow organized.",
  },
  {
    icon: Mic2,
    title: "Premium custom voice mode",
    description:
      "Offer a premium voice option for teams that want a more branded, personalized calling experience.",
  },
  {
    icon: AudioWaveform,
    title: "Dual-pipeline architecture",
    description:
      "A deterministic conversation pipeline controls logic while a real-time voice pipeline focuses on speed and natural delivery.",
  },
  {
    icon: Shield,
    title: "Compliance-aware controls",
    description:
      "Suppression lists, opt-out handling, and structured exits help keep outreach more disciplined and auditable.",
  },
];

const marketplaceLeads = [
  {
    zip: "10462",
    city: "Bronx, NY",
    type: "Verified booked appointments",
    price: "$85 each",
    inventory: "3 available",
  },
  {
    zip: "11375",
    city: "Forest Hills, NY",
    type: "Qualified seller leads",
    price: "$110 each",
    inventory: "2 available",
  },
  {
    zip: "11230",
    city: "Brooklyn, NY",
    type: "Booked homeowner appointments",
    price: "$95 each",
    inventory: "4 available",
  },
];

const featuredAgents = [
  {
    name: "Andi Mustafaj",
    area: "Bronx market",
    badge: "Featured Agent — Bronx",
    specialty: "Seller Representation",
    brokerage: "Profile setup in progress",
    source: "Public review verification pending",
    initials: "AM",
    featured: true,
  },
  {
    name: "Jampa Nyandak",
    area: "Bronx / Yonkers market",
    badge: "Featured Agent — Local Market",
    specialty: "Residential Sales",
    brokerage: "Public profile setup in progress",
    source: "Public review verification pending",
    initials: "JN",
    featured: true,
  },
];

const scriptFeatures = [
  {
    icon: FileCode2,
    title: "Bring your own script",
    description:
      "Agents can paste a raw script and let A2Z transform it into a structured AI-executable pathway.",
  },
  {
    icon: Code2,
    title: "Compatibility validation",
    description:
      "Check whether the script is actually compatible with AI execution, routing, objection handling, and appointment logic.",
  },
  {
    icon: Workflow,
    title: "Auto-convert to pathway JSON",
    description:
      "Turn freeform human sales copy into structured nodes, routes, fallback logic, and extractable fields.",
  },
  {
    icon: Store,
    title: "Sell pathways with royalties",
    description:
      "Creators can publish premium pathways into a marketplace and earn revenue when other agents license them.",
  },
];

const homeownerPaths = [
  {
    icon: Star,
    title: "Book a top agent",
    description:
      "Homeowners can book a top-performing local agent directly through A2Z and pay a connection fee for premium matching.",
  },
  {
    icon: Home,
    title: "Submit your property for interest",
    description:
      "Homeowners can raise their hand, enter property details, and let A2Z turn that seller intent into marketplace-ready opportunity.",
  },
  {
    icon: Target,
    title: "Seller readiness scoring",
    description:
      "Every opportunity can be ranked by urgency, openness, timing, and appointment readiness before routing or sale.",
  },
];

const adminFeatures = [
  {
    icon: Layers3,
    title: "A2Z autopilot campaigns",
    description:
      "Internal admin campaigns can generate marketplace inventory at scale across targeted territories.",
  },
  {
    icon: BarChart3,
    title: "Inventory, pricing, and routing",
    description:
      "Manage lead supply, approve inventory, set prices, assign top agents, and control distribution rules.",
  },
  {
    icon: CheckCircle2,
    title: "Marketplace moderation + QA",
    description:
      "Review opportunities, pathway assets, royalties, call outcomes, and internal quality before anything reaches buyers.",
  },
];

const reasons = [
  {
    icon: Building2,
    title: "Built for agents, teams, and brokerages",
    description:
      "Designed around real estate prospecting workflows, not generic sales software.",
  },
  {
    icon: CheckCircle2,
    title: "Controlled AI behavior",
    description:
      "Structured pathways make the AI more predictable, auditable, and easier to optimize.",
  },
  {
    icon: Scale,
    title: "Infrastructure + marketplace",
    description:
      "A2Z supports both campaign operators and users who only want to buy verified opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Scalable monetization",
    description:
      "Run campaigns, buy leads, sell appointments, publish scripts, promote agents, and build multiple revenue layers in one platform.",
  },
];

const researchItems = [
  {
    icon: FileText,
    source: "Prospecting positioning",
    insight:
      "Consistent follow-up and systematic outreach remain core drivers of real estate opportunity generation.",
  },
  {
    icon: TrendingUp,
    source: "Automation thesis",
    insight:
      "Teams using structured automation generally operate with more consistency than teams relying only on manual outreach.",
  },
  {
    icon: Target,
    source: "AI + workflow thesis",
    insight:
      "High-performing sales organizations increasingly use AI and workflow systems to improve execution and speed to follow-up.",
  },
  {
    icon: CheckCircle2,
    source: "Operational best practices",
    insight:
      "Structured systems outperform ad-hoc calling when qualification, objection handling, and appointment capture matter.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <Image
                src="/a2z-logo.png"
                alt="A2Z Dialer"
                width={34}
                height={34}
                className="h-8 w-8 object-contain"
                priority
              />
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-900">
                A2Z Dialer
              </div>
              <div className="text-xs text-slate-500">
                seller opportunity platform
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Features
            </a>
            <a
              href="#marketplace"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Marketplace
            </a>
            <a
              href="#agents"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Agents
            </a>
            <a
              href="#scripts"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Script Engine
            </a>
            <a
              href="#homeowners"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Homeowners
            </a>
            <a
              href="#admin"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Admin
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl bg-[#2563eb] px-5 py-2.5 text-sm font-semibold !text-white shadow-[0_12px_30px_rgba(37,99,235,0.25)] transition hover:bg-[#1d4ed8]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f4f7ff_45%,#ffffff_100%)] px-6 pb-24 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_24%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.08),transparent_20%)]" />
        <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-140px] right-[-100px] h-[340px] w-[340px] rounded-full bg-violet-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                AI outbound + marketplace + agent matching + script royalties
              </span>
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-[0.94] tracking-tight text-slate-900 md:text-7xl">
              Run AI campaigns,
              <br />
              buy verified appointments,
              <br />
              match sellers to top agents,
              <br />
              and monetize proven scripts.
            </h1>

            <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-slate-600 md:text-2xl">
              A2Z Dialer is more than a dialer. It is a seller opportunity
              platform for agents, teams, brokerages, buyers, creators, and
              homeowners — with AI calling, appointment booking, lead
              marketplace access, script validation, autopilot campaign supply,
              homeowner-to-agent matching, and admin controls.
            </p>

            <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-8 py-4 text-base font-semibold !text-white shadow-[0_18px_40px_rgba(37,99,235,0.28)] transition-all hover:scale-[1.02] hover:bg-[#1d4ed8] sm:w-auto"
              >
                Launch Your First Campaign
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#marketplace"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 sm:w-auto"
              >
                <Play className="h-5 w-5" />
                Buy Verified Leads
              </a>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    AI campaign control center
                  </div>
                  <div className="mt-2 text-2xl font-bold text-slate-900">
                    Bronx Expired Listings
                  </div>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Live
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <HeroStatCard label="Calls Today" value="1,284" tone="blue" />
                <HeroStatCard label="Appointments" value="48" tone="green" />
                <HeroStatCard label="Connect Rate" value="34%" tone="purple" />
                <HeroStatCard label="Pathway" value="Expired Flow" tone="slate" />
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Recent outcome
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Maria Thompson
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        homeowner interested · objection handled · appointment
                        booked
                      </div>
                    </div>
                    <div className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                      booked
                    </div>
                  </div>

                  <div className="mt-5 h-24 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
                      <span>Call activity</span>
                      <span>Today</span>
                    </div>
                    <div className="flex h-10 items-end gap-1.5">
                      {[24, 38, 28, 45, 62, 54, 72, 60, 84, 76, 92, 88].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-violet-500"
                            style={{ height: `${h}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Conversation map
                  </div>
                  <div className="mt-4 space-y-3">
                    <FlowNode
                      title="Lead list"
                      text="Expired listings · 2,480 records"
                    />
                    <FlowNode
                      title="Pathway"
                      text="Intro → status → objection → booking"
                    />
                    <FlowNode
                      title="Voice pipeline"
                      text="Realtime AI voice delivery"
                      active
                    />
                    <FlowNode
                      title="Result"
                      text="Appointment pushed to queue"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#153e8a_55%,#2563eb_100%)] p-6 text-white shadow-[0_30px_80px_rgba(37,99,235,0.22)]">
                <div className="mb-4 flex items-center gap-2">
                  <MapPinned className="h-4 w-4 text-blue-200" />
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                    Lead marketplace preview
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-blue-100/85">
                    <Search className="h-4 w-4" />
                    Search by zip code or city
                  </div>

                  <div className="mt-4 space-y-3">
                    {marketplaceLeads.map((lead) => (
                      <MarketPreviewCard
                        key={`${lead.zip}-${lead.city}`}
                        zip={lead.zip}
                        city={lead.city}
                        type={lead.type}
                        price={lead.price}
                      />
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-3">
                    <div className="flex items-center gap-2 text-sm text-blue-100">
                      <LockKeyhole className="h-4 w-4" />
                      Buyer account unlocks full lead details and appointment info
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <FileCode2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    Script engine
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Paste a raw script, validate compatibility, convert it into
                    structured pathway JSON, and publish it for royalties.
                  </p>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    Top agent matching
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Homeowners can directly book top agents through A2Z, opening
                    a high-value matching and connection-fee layer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <MiniStrip
              label="For operators"
              text="Run AI campaigns and own your outbound machine."
            />
            <MiniStrip
              label="For buyers"
              text="Browse verified appointments by territory and unlock opportunities."
            />
            <MiniStrip
              label="For creators"
              text="Publish pathways and earn royalties when others license them."
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                The problem
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Cold calling is breaking
              <br />
              your prospecting engine
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              Real estate agents know outbound works. The problem is keeping it
              consistent, scalable, and operationally clean without burning out
              people.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">
                  <problem.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {problem.title}
                </h3>
                <p className="text-lg leading-relaxed text-slate-600">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Platform features
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Built for serious
              <br />
              outbound prospecting
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              A2Z combines AI calling infrastructure, scheduling tools, premium
              voice options, structured logic, lead distribution layers, and
              homeowner matching to create a full seller opportunity system.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-300 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 transition-transform group-hover:scale-110">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[32px] bg-gradient-to-br from-blue-600 to-violet-600 p-12 text-center text-white shadow-[0_20px_60px_rgba(79,70,229,0.22)]">
            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
              Multiple ways to grow with A2Z
            </h3>
            <p className="mx-auto max-w-3xl text-lg opacity-90 md:text-xl">
              Run your own AI outbound campaigns, buy verified appointment leads,
              match sellers to top agents, or monetize scripts and pathways.
            </p>
          </div>
        </div>
      </section>

      <section id="marketplace" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">
              <MapPinned className="h-4 w-4 text-emerald-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Lead marketplace
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Buy verified appointment leads
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              Not every agent wants to run campaigns. Some just want to log in,
              search a market, and buy real appointment opportunities with
              pricing attached.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <Search className="h-5 w-5 text-slate-500" />
                <div className="text-sm text-slate-500">
                  Search by zip code, city, or neighborhood
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <VisualTile
                  label="Zip search"
                  value="10462"
                  subtext="Bronx seller territory"
                  tone="blue"
                />
                <VisualTile
                  label="Available now"
                  value="3"
                  subtext="booked appointments"
                  tone="green"
                />
              </div>

              <div className="mt-6 rounded-[30px] border border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#1e293b_100%)] p-6 text-white">
                <div className="mb-4 flex items-center gap-2">
                  <MapPinned className="h-5 w-5 text-blue-300" />
                  <span className="text-sm font-semibold text-blue-100">
                    Territory map preview
                  </span>
                </div>

                <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_35%,rgba(59,130,246,0.24),transparent_18%),radial-gradient(circle_at_58%_48%,rgba(16,185,129,0.26),transparent_16%),radial-gradient(circle_at_72%_64%,rgba(168,85,247,0.24),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
                  <div className="absolute left-[28%] top-[30%] rounded-full bg-blue-400 px-3 py-1 text-xs font-semibold text-slate-950 shadow-lg">
                    10462 · 3 appts
                  </div>
                  <div className="absolute left-[56%] top-[46%] rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-slate-950 shadow-lg">
                    11375 · 2 leads
                  </div>
                  <div className="absolute left-[68%] top-[64%] rounded-full bg-violet-400 px-3 py-1 text-xs font-semibold text-slate-950 shadow-lg">
                    11230 · 4 appts
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px]" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {marketplaceLeads.map((lead) => (
                <div
                  key={`${lead.zip}-${lead.city}`}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                        {lead.zip}
                      </div>
                      <div className="mt-1 text-2xl font-bold text-slate-900">
                        {lead.city}
                      </div>
                      <div className="mt-2 text-sm text-slate-600">
                        {lead.type}
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                      {lead.price}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <BadgeDollarSign className="h-4 w-4 text-emerald-600" />
                      {lead.inventory}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                      <LockKeyhole className="h-4 w-4" />
                      Unlock details
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-4 py-2.5 text-sm font-semibold !text-white transition hover:bg-[#1d4ed8]"
                    >
                      Buy Lead
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/login"
                      className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                    >
                      Login to browse
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-blue-100 bg-blue-50 p-6 text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              Not every user needs campaign tools
            </h3>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600">
              Some agents will run AI campaigns. Others will only use A2Z to buy
              verified appointments and lead opportunities inside targeted
              territories.
            </p>
          </div>
        </div>
      </section>

      <section
        id="agents"
        className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
              <Star className="h-4 w-4 text-blue-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Agent player cards + territory pages
              </span>
            </div>

            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Match sellers to
              <br />
              top agents by territory
            </h2>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              A2Z can rank and showcase agents by market so homeowners can
              compare profiles, review trusted public presence, and book the
              right listing professional. Featured placement, premium profiles,
              and territory pages create another monetization layer.
            </p>
          </div>

          <div className="mb-8 rounded-[28px] border border-blue-100 bg-blue-50 p-6 text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              Example territory page: /agents/bronx
            </h3>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600">
              Users can browse top agents in a city, zip code, or neighborhood,
              compare specialties and verification status, and book a
              consultation directly through the platform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredAgents.map((agent) => (
              <div
                key={agent.name}
                className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="relative flex h-56 items-center justify-center bg-[linear-gradient(145deg,#dbeafe_0%,#eff6ff_45%,#f8fafc_100%)]">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-blue-100 bg-white text-3xl font-bold text-slate-900 shadow-sm">
                    {agent.initials}
                  </div>

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur">
                    {agent.badge}
                  </div>

                  {agent.featured && (
                    <div className="absolute right-4 top-4 rounded-full bg-[#2563eb] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {agent.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{agent.area}</p>
                    </div>

                    <div className="rounded-2xl bg-slate-100 px-3 py-2 text-right">
                      <div className="text-sm font-bold text-slate-900">
                        Verified Presence
                      </div>
                      <div className="text-xs text-slate-500">{agent.source}</div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Specialty
                      </div>
                      <div className="mt-2 text-sm font-medium text-slate-900">
                        {agent.specialty}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Brokerage / profile
                      </div>
                      <div className="mt-2 text-sm font-medium text-slate-900">
                        {agent.brokerage}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                      Data integrity rule
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Ratings, review counts, and transaction metrics should only
                      be shown after they are verified from trusted public
                      sources such as Google Business, Zillow, Realtor.com, or a
                      brokerage profile.
                    </p>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-4 py-2.5 text-sm font-semibold !text-white transition hover:bg-[#1d4ed8]"
                    >
                      Book Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <button
                      className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                      type="button"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Featured placement
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Agents can pay for higher visibility on territory pages and
                seller-facing results.
              </p>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Premium profiles
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Richer player cards can include testimonials, specialties,
                markets served, and stronger branding once verified.
              </p>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Territory monetization
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                A2Z can monetize city, zip, and neighborhood pages where sellers
                discover and compare agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="scripts"
        className="bg-[linear-gradient(180deg,#fafaff_0%,#ffffff_100%)] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2">
              <FileCode2 className="h-4 w-4 text-violet-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-violet-700">
                Script engine + pathway marketplace
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Turn raw scripts into
              <br />
              AI-executable pathways
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              Agents can bring their own scripts, validate them for AI
              execution, convert them into structured pathways, test
              compatibility, and sell premium scripts through a marketplace with
              royalties.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-2">
                <FileText className="h-5 w-5 text-violet-600" />
                <div className="text-sm font-semibold text-slate-900">
                  Script-to-pathway workflow
                </div>
              </div>

              <div className="space-y-4">
                {scriptFeatures.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="text-base font-semibold text-slate-900">
                        {item.title}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#1e1b4b_50%,#4c1d95_100%)] p-8 text-white shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
                    Pathway validator preview
                  </div>
                  <div className="mt-2 text-2xl font-bold">
                    Compatibility scan
                  </div>
                </div>
                <div className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Ready
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-200/80">
                  Uploaded script result
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <ValidatorPill label="AI compatibility" value="92%" />
                  <ValidatorPill label="Objection coverage" value="Strong" />
                  <ValidatorPill label="Booking readiness" value="High" />
                  <ValidatorPill label="Fallback logic" value="Validated" />
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className="text-sm font-semibold text-white">
                    Generated pathway layers
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-violet-100/80">
                    <li>• opener + identity confirmation</li>
                    <li>• objection routes + fallback nodes</li>
                    <li>• extraction fields for seller intent</li>
                    <li>• booking logic + calendar-ready output</li>
                  </ul>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className="text-sm font-semibold text-white">
                    Creator monetization
                  </div>
                  <p className="mt-2 text-sm leading-6 text-violet-100/80">
                    Publish pathways into the marketplace, license them to other
                    agents, and collect royalties based on usage or subscription
                    access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="homeowners" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2">
              <Home className="h-4 w-4 text-amber-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                Homeowner opportunities
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Homeowners can book agents
              <br />
              or raise their hand directly
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              A2Z does not have to rely only on outbound. Homeowners can come in
              directly, request top-agent help, or submit property interest that
              becomes marketplace-ready seller opportunity.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-5">
              {homeownerPaths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(145deg,#fff7ed_0%,#ffffff_100%)] p-8 shadow-sm">
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                Seller intake preview
              </div>

              <div className="rounded-2xl border border-amber-100 bg-white p-5">
                <div className="grid gap-3">
                  <IntakeField
                    label="Property address"
                    value="1234 Pelham Pkwy, Bronx, NY"
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <IntakeField label="Timeline" value="Within 60 days" />
                    <IntakeField label="Goal" value="Sell at strong price" />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <IntakeField label="Needs agent?" value="Yes" />
                    <IntakeField label="Readiness score" value="86 / 100" />
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">
                    Routing options
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <RoutePill text="Top agent match" />
                    <RoutePill text="Marketplace listing" />
                    <RoutePill text="AI nurture flow" />
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 p-4">
                <div className="text-sm font-semibold text-slate-900">
                  Revenue layer
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A2Z can charge a connection fee, referral fee, premium agent
                  fee, or convert submitted seller interest into verified lead
                  inventory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="admin"
        className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2">
              <Layers3 className="h-4 w-4 text-sky-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                A2Z internal admin panel
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              A2Z needs an autopilot
              <br />
              command center
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              If A2Z is going to generate and sell lead inventory at scale, it
              needs an internal operations layer for campaigns, inventory,
              pricing, routing, QA, royalties, and top-agent assignment.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="grid gap-5 md:grid-cols-3">
                {adminFeatures.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-700 shadow-sm">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#1e3a8a_100%)] p-8 text-white shadow-sm">
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                Internal operations preview
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <AdminMetric label="Autopilot campaigns" value="17" />
                <AdminMetric label="Inventory queued" value="62" />
                <AdminMetric label="Top-agent matches" value="9" />
                <AdminMetric label="Pending QA reviews" value="14" />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4">
                <div className="text-sm font-semibold text-white">
                  Admin routing controls
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <AdminTag text="Approve inventory" />
                  <AdminTag text="Set marketplace pricing" />
                  <AdminTag text="Assign premium agents" />
                  <AdminTag text="Review royalties" />
                  <AdminTag text="Moderate pathways" />
                  <AdminTag text="Audit call quality" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                How it works
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              From lead list to booked
              <br />
              appointment in 6 steps
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              A2Z automates the outbound workflow while keeping logic,
              scheduling, and performance visibility structured and
              controllable.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-200 via-violet-200 to-blue-200 md:block" />

            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className={`relative mb-12 flex flex-col items-center gap-8 md:mb-16 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:pl-0 md:pr-12 md:text-right">
                  {index % 2 === 0 && (
                    <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition hover:border-blue-300 hover:shadow-lg">
                      <h3 className="mb-3 text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg">
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1 md:pl-12 md:pr-0">
                  {index % 2 !== 0 && (
                    <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition hover:border-blue-300 hover:shadow-lg">
                      <h3 className="mb-3 text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                <div className="w-full flex-1 md:hidden">
                  {index % 2 === 0 && (
                    <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8">
                      <h3 className="mb-3 text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="research"
        className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Research & positioning
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Built around the real
              <br />
              prospecting problem
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              The product is positioned around real estate and sales realities:
              prospecting is time-consuming, consistency is difficult, and
              structured systems outperform scattered manual effort.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {researchItems.map((item, index) => (
              <div
                key={index}
                className="rounded-[24px] border border-slate-200 bg-white p-8 transition hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <item.icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
                      {item.source}
                    </div>
                    <p className="text-base leading-relaxed text-slate-700">
                      {item.insight}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                  Why A2Z
                </span>
              </div>
              <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900">
                Why teams choose A2Z Dialer
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-slate-600">
                A2Z is not just another AI tool. It is a full seller opportunity
                infrastructure layer for campaign operators, lead buyers,
                homeowners, script creators, and internal marketplace supply.
              </p>

              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                      <reason.icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-slate-900">
                        {reason.title}
                      </h3>
                      <p className="text-base leading-relaxed text-slate-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10">
              <div className="space-y-8">
                <MetricsPanel
                  label="Active Campaigns"
                  value="12"
                  detail="AI campaigns running"
                />
                <MetricsPanel
                  label="Weekly Call Volume"
                  value="3,421"
                  detail="+32% from last week"
                />
                <MetricsPanel
                  label="Marketplace Inventory"
                  value="29"
                  detail="verified leads available"
                />
                <MetricsPanel
                  label="Pathway Creators"
                  value="18"
                  detail="premium scripts published"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900 px-6 py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-blue-300" />
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-100">
              Start today
            </span>
          </div>

          <h2 className="mb-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Let AI handle the dialing
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-blue-100 md:text-2xl">
            Run campaigns, buy verified appointment leads, validate scripts,
            publish pathways, match homeowners to top agents, and build a more
            scalable outbound business.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-slate-900 shadow-2xl transition hover:scale-[1.02] hover:bg-slate-100 sm:w-auto"
            >
              Launch Your First Campaign
              <ArrowRight className="h-6 w-6" />
            </Link>
            <Link
              href="/login"
              className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 px-10 py-5 text-lg font-bold !text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              Buy Leads Only
            </Link>
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-8 text-blue-100 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm font-medium">
                AI campaigns + marketplace
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm font-medium">
                Script engine + royalties
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm font-medium">
                Homeowner matching + admin supply
              </span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500 opacity-20 blur-3xl" />
      </section>

      <footer className="bg-slate-900 px-6 py-16 text-slate-400">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm">
                  <Image
                    src="/a2z-logo.png"
                    alt="A2Z Dialer"
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <span className="text-lg font-semibold text-white">
                  A2Z Dialer
                </span>
              </div>
              <p className="max-w-md text-sm leading-relaxed">
                AI-powered outbound prospecting, verified appointment lead
                access, homeowner-to-agent matching, autopilot campaign supply,
                and monetizable pathway infrastructure for real estate
                professionals.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Platform</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#features" className="transition hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#marketplace" className="transition hover:text-white">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="#agents" className="transition hover:text-white">
                    Agents
                  </a>
                </li>
                <li>
                  <a href="#scripts" className="transition hover:text-white">
                    Script Engine
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Operations</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#admin" className="transition hover:text-white">
                    Admin Panel
                  </a>
                </li>
                <li>
                  <a href="#workflow" className="transition hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#research" className="transition hover:text-white">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Privacy & Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-sm">
              © 2026 A2Z Dialer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function HeroStatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "blue" | "green" | "purple" | "slate";
}) {
  const styles = {
    blue: "border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700",
    green:
      "border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 text-green-700",
    purple:
      "border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 text-purple-700",
    slate:
      "border-slate-200 bg-gradient-to-br from-slate-50 to-white text-slate-700",
  };

  return (
    <div className={`rounded-xl border p-5 ${styles[tone]}`}>
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-2 text-sm font-medium text-slate-600">{label}</div>
    </div>
  );
}

function FlowNode({
  title,
  text,
  active,
}: {
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        active
          ? "border-blue-200 bg-white shadow-sm"
          : "border-slate-200 bg-white/80"
      }`}
    >
      <div
        className={`text-xs font-semibold uppercase tracking-[0.16em] ${
          active ? "text-blue-700" : "text-slate-500"
        }`}
      >
        {title}
      </div>
      <div className="mt-2 text-sm leading-6 text-slate-700">{text}</div>
    </div>
  );
}

function MiniStrip({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
        {label}
      </div>
      <div className="mt-2 text-sm text-slate-600">{text}</div>
    </div>
  );
}

function MarketPreviewCard({
  zip,
  city,
  type,
  price,
}: {
  zip: string;
  city: string;
  type: string;
  price: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-blue-100/70">
            {zip}
          </div>
          <div className="mt-1 text-sm font-semibold text-white">{city}</div>
          <div className="mt-1 text-xs text-blue-100/75">{type}</div>
        </div>
        <div className="rounded-lg bg-white/15 px-2.5 py-1 text-xs font-semibold text-white">
          {price}
        </div>
      </div>
    </div>
  );
}

function VisualTile({
  label,
  value,
  subtext,
  tone,
}: {
  label: string;
  value: string;
  subtext: string;
  tone: "blue" | "green";
}) {
  const style =
    tone === "blue"
      ? "border-blue-100 bg-gradient-to-br from-blue-50 to-white"
      : "border-emerald-100 bg-gradient-to-br from-emerald-50 to-white";

  return (
    <div className={`rounded-2xl border p-5 ${style}`}>
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-3xl font-bold text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{subtext}</div>
    </div>
  );
}

function ValidatorPill({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/10 p-3">
      <div className="text-xs uppercase tracking-wide text-violet-100/65">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

function IntakeField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </div>
      <div className="mt-1 text-sm font-medium text-slate-900">{value}</div>
    </div>
  );
}

function RoutePill({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
      {text}
    </div>
  );
}

function AdminMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
      <div className="text-xs uppercase tracking-wide text-sky-100/70">
        {label}
      </div>
      <div className="mt-2 text-2xl font-bold text-white">{value}</div>
    </div>
  );
}

function AdminTag({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/90">
      {text}
    </div>
  );
}

function MetricsPanel({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-600">{label}</span>
        <span className="text-2xl font-bold text-slate-900">{value}</span>
      </div>
      <p className="text-sm text-slate-500">{detail}</p>
    </div>
  );
}