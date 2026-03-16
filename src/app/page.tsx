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
  Clock3,
  Crown,
  FileCode2,
  FileText,
  GitBranch,
  Home,
  Languages,
  Layers3,
  LockKeyhole,
  MapPinned,
  Mic2,
  Phone,
  Play,
  Route,
  Search,
  Shield,
  Sparkles,
  Star,
  Store,
  Target,
  Trophy,
  Upload,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

const platformFeatures = [
  {
    icon: Bot,
    title: "AI Campaign Operator",
    description:
      "Agents and teams can upload lead lists, assign pathways, launch AI outbound campaigns, handle objections, qualify sellers, and push booked conversations into the next stage.",
    bullets: [
      "CSV upload for expireds, FSBOs, circle prospecting, and old CRM data",
      "Realtime AI calling with deterministic pathway logic",
      "Structured objection handling and field extraction",
      "Appointment-first workflow built around seller qualification",
    ],
    tone: "blue",
  },
  {
    icon: Store,
    title: "Seller Opportunity Marketplace",
    description:
      "Not every user wants to run campaigns. A2Z also supports buyers who only want to search a market, unlock details, and purchase qualified seller leads or booked appointments.",
    bullets: [
      "Buy seller leads by city, zip code, or territory",
      "Buy booked appointments without running campaigns",
      "Browse inventory using a marketplace-style interface",
      "Separate buyer path inside the same platform",
    ],
    tone: "emerald",
  },
  {
    icon: FileCode2,
    title: "Script Creator Marketplace",
    description:
      "A2Z supports a creator economy for pathways. Agents and operators can build scripts, validate them, convert them into structured routing logic, and earn royalties when others license them.",
    bullets: [
      "Bring-your-own-script workflow",
      "Pathway compatibility validation",
      "Script-to-JSON conversion support",
      "Licensing and recurring royalties",
    ],
    tone: "violet",
  },
  {
    icon: Mic2,
    title: "Voice Partner Program",
    description:
      "This is separate from script royalties. Agents can partner with A2Z, license their cloned voice and approved script package, and earn per booked appointment when A2Z runs campaigns using it.",
    bullets: [
      "Voice licensing program",
      "Appointment-based royalty payouts",
      "Separate monetization layer from script licensing",
      "Potential creator network growth loop",
    ],
    tone: "amber",
  },
  {
    icon: Trophy,
    title: "Top Agent Network",
    description:
      "A2Z can also function as a premium top-agent discovery layer where homeowners compare featured agents, review player-card profiles, and book consultations directly.",
    bullets: [
      "Player-card style agent profiles",
      "Territory pages like /agents/bronx",
      "Featured placement and premium visibility",
      "Top-agent matching for seller traffic",
    ],
    tone: "sky",
  },
  {
    icon: Home,
    title: "Homeowner Raise-Hand Flow",
    description:
      "Homeowners should be able to enter the system directly, submit their property interest, request agent help, and get routed into matching, nurturing, or inventory creation.",
    bullets: [
      "Direct seller intake flow",
      "Seller readiness scoring",
      "Top-agent routing",
      "Marketplace inventory generation",
    ],
    tone: "rose",
  },
  {
    icon: Layers3,
    title: "Admin Autopilot",
    description:
      "The internal admin layer powers supply generation, inventory approval, pricing, moderation, quality control, and territory-level routing across the platform.",
    bullets: [
      "Autopilot inventory generation",
      "Marketplace pricing and controls",
      "Top-agent assignment and moderation",
      "Quality assurance and internal routing",
    ],
    tone: "slate",
  },
];

const marketplacePreview = [
  {
    area: "Bronx · 10462",
    type: "Booked appointments",
    count: "3 available",
    price: "$85 each",
  },
  {
    area: "Queens · 11375",
    type: "Qualified seller leads",
    count: "2 available",
    price: "$110 each",
  },
  {
    area: "Brooklyn · 11230",
    type: "Booked appointments",
    count: "4 available",
    price: "$95 each",
  },
];

const scriptFeatures = [
  {
    icon: FileText,
    title: "Bring your own script",
    text: "Agents can paste raw outbound scripts and let A2Z structure them into usable AI-ready call flows.",
  },
  {
    icon: GitBranch,
    title: "Compatibility validation",
    text: "The platform can assess whether a script is actually usable for routing, objection handling, extraction, and booking.",
  },
  {
    icon: Workflow,
    title: "Convert into pathway logic",
    text: "Freeform human sales copy can be transformed into nodes, transitions, fallback logic, and extractable fields.",
  },
  {
    icon: BadgeDollarSign,
    title: "Publish and earn royalties",
    text: "Creators can publish validated pathways and earn revenue when other users license them through the marketplace.",
  },
];

const voiceSteps = [
  {
    title: "Join the Voice Partner Program",
    text: "Agent opts into the A2Z partnership model under approved voice and usage terms.",
  },
  {
    title: "Clone voice + approve script package",
    text: "A2Z stores the approved voice model and the allowed campaign script package.",
  },
  {
    title: "A2Z runs campaigns using the package",
    text: "A2Z can operate campaigns using the approved voice and script inside permitted lanes.",
  },
  {
    title: "Booked appointment triggers royalty",
    text: "When campaigns using that package generate booked appointments, the partner earns payout.",
  },
];

const workflowSteps = [
  {
    icon: Upload,
    title: "Upload leads or receive seller intent",
    text: "Import expired listings, FSBOs, circle prospecting lists, old CRM contacts, or direct homeowner submissions.",
  },
  {
    icon: Route,
    title: "Assign pathway and voice mode",
    text: "Choose the right objection flow, extraction model, booking logic, and voice delivery mode for the campaign.",
  },
  {
    icon: AudioWaveform,
    title: "AI runs the conversation",
    text: "The voice layer handles speech while the pathway engine controls routing, structure, and next-step logic.",
  },
  {
    icon: UserCheck,
    title: "Qualify and score the seller",
    text: "A2Z captures timing, openness, motivation, objections, and seller readiness in structured form.",
  },
  {
    icon: CalendarCheck,
    title: "Book, route, match, or monetize",
    text: "Results can become appointments, top-agent matches, marketplace inventory, or nurture opportunities.",
  },
];

const adminLanes = [
  {
    icon: Layers3,
    title: "Autopilot Campaign Supply",
    text: "Generate internal seller opportunity inventory across chosen markets.",
  },
  {
    icon: BadgeDollarSign,
    title: "Pricing + Inventory Controls",
    text: "Approve, price, and distribute marketplace inventory at the admin layer.",
  },
  {
    icon: Crown,
    title: "Top Agent Assignment",
    text: "Rank agents, feature premium placements, and control territory visibility.",
  },
  {
    icon: Shield,
    title: "Moderation + QA",
    text: "Audit pathways, review quality, and control what reaches buyers or sellers.",
  },
];

const integrations = [
  {
    icon: CalendarRange,
    title: "Google Calendar Sync",
    text: "Booked appointments can be pushed into connected Google Calendar workflows so agents and teams can stay organized.",
  },
  {
    icon: CalendarCheck,
    title: "Calendly Sync",
    text: "A2Z can route successful seller conversations into Calendly booking flows for cleaner scheduling and confirmation.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmation Workflow",
    text: "After booking, the system can support confirmations, handoff flow, and cleaner appointment management.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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
              <div className="text-lg font-semibold text-slate-900">A2Z Dialer</div>
              <div className="text-xs text-slate-500">
                seller opportunity platform
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#platform" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Platform
            </a>
            <a href="#marketplace" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Marketplace
            </a>
            <a href="#scripts" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Scripts
            </a>
            <a href="#voice" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Voice Partners
            </a>
            <a href="#agents" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Agents
            </a>
            <a href="#homeowners" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Homeowners
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

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f2f7ff_42%,#ffffff_100%)] px-6 pb-24 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_25%),radial-gradient(circle_at_top_left,rgba(124,58,237,0.10),transparent_22%)]" />
        <div className="pointer-events-none absolute left-[-90px] top-[-90px] h-[300px] w-[300px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[340px] w-[340px] rounded-full bg-violet-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                AI campaigns + marketplace buying + script royalties + voice royalties
              </span>
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-[0.94] tracking-tight text-slate-900 md:text-7xl">
              Run AI campaigns,
              <br />
              buy seller opportunities,
              <br />
              match with top agents,
              <br />
              and monetize scripts or voice.
            </h1>

            <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-slate-600 md:text-2xl">
              A2Z Dialer is a premium seller opportunity platform for agents,
              teams, creators, and homeowners — combining AI outbound calling,
              booked appointment buying, qualified lead purchasing, script
              royalties, voice partner royalties, top-agent discovery,
              homeowner raise-hand flow, and admin autopilot supply.
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
                Buy Seller Opportunities
              </a>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_28px_80px_rgba(15,23,42,0.08)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    operator console preview
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
                <MetricTile label="Calls Today" value="1,284" />
                <MetricTile label="Booked" value="48" />
                <MetricTile label="Connect Rate" value="34%" />
                <MetricTile label="Pathway" value="Expired Flow" />
              </div>

              <div className="mt-5 rounded-[26px] border border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#153b7a_100%)] p-5 text-white">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">
                  active workflow
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <DarkRow title="Voice mode" value="Realtime AI + premium support" />
                  <DarkRow title="Goal" value="Appointment booked" />
                  <DarkRow title="Objection logic" value="Pathway controlled" />
                  <DarkRow title="Outcome" value="Seller qualification" />
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[34px] border border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#1e3a8a_55%,#2563eb_100%)] p-6 text-white shadow-[0_30px_80px_rgba(37,99,235,0.22)]">
                <div className="mb-4 flex items-center gap-2">
                  <MapPinned className="h-4 w-4 text-blue-200" />
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                    seller opportunity marketplace
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-blue-100/85">
                    <Search className="h-4 w-4" />
                    Search by zip code or city
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/10 p-4">
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">
                      territory map visual
                    </div>

                    <div className="relative h-52 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_28%_34%,rgba(59,130,246,0.24),transparent_18%),radial-gradient(circle_at_56%_46%,rgba(16,185,129,0.24),transparent_16%),radial-gradient(circle_at_70%_66%,rgba(168,85,247,0.24),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
                      <div className="absolute left-[24%] top-[30%] rounded-full bg-blue-400 px-3 py-1 text-xs font-semibold text-slate-950 shadow-lg">
                        Bronx · 3 appts
                      </div>
                      <div className="absolute left-[52%] top-[42%] rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-slate-950 shadow-lg">
                        Queens · 2 leads
                      </div>
                      <div className="absolute left-[66%] top-[64%] rounded-full bg-violet-400 px-3 py-1 text-xs font-semibold text-slate-950 shadow-lg">
                        Brooklyn · 4 appts
                      </div>
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px]" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {marketplacePreview.map((item) => (
                      <MarketCard
                        key={item.area}
                        area={item.area}
                        type={item.type}
                        count={item.count}
                        price={item.price}
                      />
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-3">
                    <div className="flex items-center gap-2 text-sm text-blue-100">
                      <LockKeyhole className="h-4 w-4" />
                      Buyer accounts unlock lead details, appointment context, and seller information
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <MiniFeature
                  icon={<FileCode2 className="h-6 w-6" />}
                  title="Script royalties"
                  text="Creators can publish pathways and earn royalties when agents license their scripts."
                  tone="violet"
                />
                <MiniFeature
                  icon={<Mic2 className="h-6 w-6" />}
                  title="Voice royalties"
                  text="Voice partners can earn separately when A2Z runs campaigns using their approved voice + script package."
                  tone="amber"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                Full platform feature set
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Every major feature
              <br />
              should be visible here
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              This landing page should communicate the full memo vision, not a shortened version.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {platformFeatures.map((card) => (
              <PlatformCard
                key={card.title}
                icon={<card.icon className="h-6 w-6" />}
                title={card.title}
                description={card.description}
                bullets={card.bullets}
                tone={card.tone as any}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="marketplace" className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">
              <Store className="h-4 w-4 text-emerald-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                seller opportunity marketplace
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Buy leads or booked appointments
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              This feature stays separate and visible. Some users will never run campaigns.
              They only want to buy verified seller opportunities.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {marketplacePreview.map((item) => (
              <MarketplaceBuyCard
                key={item.area}
                area={item.area}
                type={item.type}
                count={item.count}
                price={item.price}
              />
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-blue-100 bg-blue-50 p-6 text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              Marketplace buyers are a core user type
            </h3>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600">
              A2Z should support both campaign operators and users who only want to
              search a market, compare pricing, and buy seller conversations.
            </p>
          </div>
        </div>
      </section>

      <section id="scripts" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2">
                <FileCode2 className="h-4 w-4 text-violet-700" />
                <span className="text-xs font-semibold uppercase tracking-wide text-violet-700">
                  script creator marketplace
                </span>
              </div>

              <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                Script royalties stay
                <br />
                as their own feature
              </h2>

              <p className="max-w-3xl text-xl leading-relaxed text-slate-600">
                The script marketplace should stay separate from the voice partner program.
                Pathways and scripts can earn royalties on their own.
              </p>

              <div className="mt-8 grid gap-4">
                {scriptFeatures.map((item) => (
                  <ScriptCard
                    key={item.title}
                    icon={<item.icon className="h-5 w-5" />}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#1e1b4b_50%,#4c1d95_100%)] p-8 text-white shadow-[0_20px_60px_rgba(79,70,229,0.18)]">
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
                pathway marketplace preview
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="text-sm font-semibold text-white">
                  Example creator package
                </div>

                <div className="mt-4 grid gap-3">
                  <DarkInfo label="Script Type" value="Expired listing objection flow" />
                  <DarkInfo label="Compatibility" value="Validated for AI execution" />
                  <DarkInfo label="Booking Logic" value="Calendar-ready output" />
                  <DarkInfo label="Monetization" value="Licensing + royalties" />
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className="text-sm font-semibold text-white">
                    Script royalties remain separate
                  </div>
                  <p className="mt-2 text-sm leading-6 text-violet-100/80">
                    A creator can earn from their script package even if they are not
                    participating in the voice partner program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="voice" className="bg-[linear-gradient(180deg,#faf7ff_0%,#ffffff_100%)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2">
                <Mic2 className="h-4 w-4 text-amber-700" />
                <span className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  voice partner program
                </span>
              </div>

              <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                Voice royalty is a
                <br />
                different feature
              </h2>

              <p className="max-w-3xl text-xl leading-relaxed text-slate-600">
                A2Z can run campaigns using an approved partner voice and script package.
                That should have its own royalty model, separate from script licensing alone.
              </p>

              <div className="mt-8 grid gap-4">
                {voiceSteps.map((step, index) => (
                  <VoiceStep
                    key={step.title}
                    number={index + 1}
                    title={step.title}
                    text={step.text}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#1e3a8a_50%,#2563eb_100%)] p-8 text-white shadow-[0_20px_60px_rgba(37,99,235,0.18)]">
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                voice partner payout model
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="text-sm font-semibold text-white">
                  Example structure
                </div>

                <div className="mt-4 grid gap-3">
                  <DarkInfo label="Partner" value="Licensed agent voice" />
                  <DarkInfo label="Campaign Package" value="Voice + approved script bundle" />
                  <DarkInfo label="Operator" value="A2Z-managed campaign flow" />
                  <DarkInfo label="Payout Trigger" value="Booked appointment" />
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className="text-sm font-semibold text-white">
                    Why this is different
                  </div>
                  <p className="mt-2 text-sm leading-6 text-blue-100/80">
                    Script royalties reward pathway usage. Voice royalties reward
                    appointment outcomes generated through the approved voice package.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agents" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
              <Trophy className="h-4 w-4 text-blue-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                top agent network
              </span>
            </div>

            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Territory pages and
              <br />
              premium player cards
            </h2>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
  A2Z territory pages are designed to showcase top-performing agents first, while also
  giving other agents a way to compete for visibility through premium featured placement.
  Agents can pay to have their name, business, profile, and player card promoted in the
  markets they want to win — but top agents with stronger positioning, reviews, and
  production should remain the most visible.
</p>
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(21,59,122,0.08)]">
              <div className="relative h-80 w-full bg-slate-100">
                <Image
                  src="/agents/andi.jpg"
                  alt="Andi Mustafaj"
                  fill
                  className="object-cover"
                />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur">
                  Featured Agent — Bronx
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                      Andi Mustafaj
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">Bronx market</p>
                  </div>

                  <div className="rounded-2xl bg-slate-100 px-3 py-2 text-right">
                    <div className="text-sm font-bold text-slate-900">
                      Verified Presence
                    </div>
                    <div className="text-xs text-slate-500">
                      Public review verification pending
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <InfoBox label="Specialty" value="Seller Representation" />
                  <InfoBox label="Brokerage / profile" value="Profile setup in progress" />
                </div>

                <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                    data integrity rule
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Ratings, review counts, and production metrics should only be shown once
                    they are verified from trusted public sources.
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

            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(21,59,122,0.08)]">
              <div className="relative flex h-80 items-center justify-center bg-[linear-gradient(145deg,#dbeafe_0%,#eff6ff_45%,#ffffff_100%)]">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-blue-100 bg-white text-3xl font-bold text-slate-900 shadow-sm">
                  JN
                </div>
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur">
                  Top Agent — NYC
                </div>
                <div className="absolute right-5 top-5 rounded-full bg-[#2563eb] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  Featured
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                      Jampa Nyandak
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">NYC market</p>
                  </div>

                  <div className="rounded-2xl bg-amber-50 px-3 py-2 text-right">
                    <div className="flex items-center gap-1 text-sm font-bold text-amber-700">
                      <Star className="h-4 w-4 fill-current" />
                      33+ 5-star reviews
                    </div>
                    <div className="text-xs text-slate-500">4 years in the business</div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <StatBox value="55+" label="Sales" />
                  <StatBox value="45+" label="Rentals" />
                  <StatBox value="$40M" label="Sale Volume" />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <InfoBox label="Languages" value="Hindi · Tibetan · English" />
                  <InfoBox label="Positioning" value="Featured top agent profile" />
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Languages className="h-4 w-4 text-[#2563eb]" />
                    Speaks 3 languages fluently
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    55+ sales, 45+ rentals, $40M in sale volume, 33+ five-star reviews,
                    and 4 years in the business.
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
          </div>
        </div>
      </section>

      <section id="homeowners" className="bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2">
                <Home className="h-4 w-4 text-amber-700" />
                <span className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  homeowner raise-hand flow
                </span>
              </div>

              <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                Sellers can enter
                <br />
                directly too
              </h2>

              <p className="max-w-3xl text-xl leading-relaxed text-slate-600">
                A2Z should not rely only on outbound. Homeowners can submit selling intent directly,
                request top-agent help, and be routed by readiness.
              </p>

              <div className="mt-8 grid gap-4">
                <HomeownerCard
                  title="Book a top agent"
                  text="Route the seller into the top-agent network for premium matching and booking."
                />
                <HomeownerCard
                  title="Submit property interest"
                  text="Turn direct seller intent into marketplace-ready supply or nurture flow."
                />
                <HomeownerCard
                  title="Score seller readiness"
                  text="Use motivation, timeline, and openness to assign opportunity value."
                />
              </div>
            </div>

            <div className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(21,59,122,0.08)]">
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                seller intake preview
              </div>

              <div className="grid gap-3">
                <FormField label="Property address" value="1234 Pelham Pkwy, Bronx, NY" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <FormField label="Timeline" value="Within 60 days" />
                  <FormField label="Goal" value="Sell at strong price" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <FormField label="Needs agent?" value="Yes" />
                  <FormField label="Readiness score" value="86 / 100" />
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">Routing options</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <RoutePill text="Top agent match" />
                  <RoutePill text="Marketplace supply" />
                  <RoutePill text="AI nurture flow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integrations" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
              <CalendarRange className="h-4 w-4 text-blue-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                scheduling integrations
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Google Calendar + Calendly sync
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              Appointment booking should not stop at the call. A2Z should support scheduling handoff
              and syncing into the tools agents already use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {integrations.map((item) => (
              <IntegrationCard
                key={item.title}
                icon={<item.icon className="h-5 w-5" />}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="admin" className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <Layers3 className="h-4 w-4 text-slate-700" />
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                admin autopilot
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Internal command center
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              If A2Z is going to generate, route, and sell opportunities at scale,
              it needs high-control admin systems behind the scenes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {adminLanes.map((lane) => (
              <AdminCard
                key={lane.title}
                icon={<lane.icon className="h-5 w-5" />}
                title={lane.title}
                text={lane.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                How it works
              </span>
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              From prospect to seller opportunity
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
              A2Z connects outreach, scoring, matching, appointments, purchasing, and royalties
              into one operating system.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-5">
            {workflowSteps.map((step) => (
              <WorkflowCard
                key={step.title}
                icon={<step.icon className="h-6 w-6" />}
                title={step.title}
                text={step.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900 px-6 py-24">
        <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]}" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-blue-300" />
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-100">
              Start in the right lane
            </span>
          </div>

          <h2 className="mb-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Build seller opportunity
            <br />
            at platform scale
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-blue-100 md:text-2xl">
            Run AI campaigns, buy seller opportunities, publish scripts, join the voice partner
            program, sync appointments, and grow through premium agent matching.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-slate-900 shadow-2xl transition hover:scale-[1.02] hover:bg-slate-100 sm:w-auto"
            >
              Launch Your First Campaign
              <ArrowRight className="h-6 w-6" />
            </Link>
            <a
              href="#marketplace"
              className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 px-10 py-5 text-lg font-bold !text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              Buy Seller Opportunities
            </a>
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
                <span className="text-lg font-semibold text-white">A2Z Dialer</span>
              </div>
              <p className="max-w-md text-sm leading-relaxed">
                AI outbound prospecting, lead and appointment purchasing, script royalties,
                voice royalties, top-agent matching, homeowner intake, Google Calendar + Calendly sync,
                and admin autopilot.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Platform</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#platform" className="transition hover:text-white">Platform</a></li>
                <li><a href="#marketplace" className="transition hover:text-white">Marketplace</a></li>
                <li><a href="#scripts" className="transition hover:text-white">Scripts</a></li>
                <li><a href="#voice" className="transition hover:text-white">Voice Partners</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Growth Lanes</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#agents" className="transition hover:text-white">Agents</a></li>
                <li><a href="#homeowners" className="transition hover:text-white">Homeowners</a></li>
                <li><a href="#integrations" className="transition hover:text-white">Integrations</a></li>
                <li><a href="#admin" className="transition hover:text-white">Admin</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-sm">© 2026 A2Z Dialer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function MetricTile({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(145deg,#ffffff_0%,#f7fbff_100%)] p-5">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-3xl font-bold text-slate-900">{value}</div>
    </div>
  );
}

function DarkRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-blue-100/75">
        {title}
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

function MarketCard({
  area,
  type,
  count,
  price,
}: {
  area: string;
  type: string;
  count: string;
  price: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-blue-100/70">
            {area}
          </div>
          <div className="mt-1 text-sm font-semibold text-white">{type}</div>
          <div className="mt-1 text-xs text-blue-100/75">{count}</div>
        </div>
        <div className="rounded-lg bg-white/15 px-2.5 py-1 text-xs font-semibold text-white">
          {price}
        </div>
      </div>
    </div>
  );
}

function MiniFeature({
  icon,
  title,
  text,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  tone: "violet" | "amber";
}) {
  const styles =
    tone === "violet"
      ? "bg-violet-100 text-violet-700"
      : "bg-amber-100 text-amber-700";

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles}`}>
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function PlatformCard({
  icon,
  title,
  description,
  bullets,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  tone: "blue" | "emerald" | "violet" | "amber" | "sky" | "rose" | "slate";
}) {
  const toneMap = {
    blue: "bg-blue-100 text-blue-700",
    emerald: "bg-emerald-100 text-emerald-700",
    violet: "bg-violet-100 text-violet-700",
    amber: "bg-amber-100 text-amber-700",
    sky: "bg-sky-100 text-sky-700",
    rose: "bg-rose-100 text-rose-700",
    slate: "bg-slate-100 text-slate-700",
  };

  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(21,59,122,0.05)]">
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${toneMap[tone]}`}>
        {icon}
      </div>
      <h3 className="mt-5 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>

      <div className="mt-5 grid gap-3">
        {bullets.map((bullet) => (
          <div
            key={bullet}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
          >
            {bullet}
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketplaceBuyCard({
  area,
  type,
  count,
  price,
}: {
  area: string;
  type: string;
  count: string;
  price: string;
}) {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(21,59,122,0.05)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            {area}
          </div>
          <div className="mt-2 text-2xl font-bold text-slate-900">{type}</div>
          <div className="mt-2 text-sm text-slate-600">{count}</div>
        </div>
        <div className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
          {price}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <BadgeDollarSign className="h-4 w-4 text-emerald-600" />
          Ready to unlock
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
          <LockKeyhole className="h-4 w-4" />
          Buyer access
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <Link
          href="/register"
          className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-4 py-2.5 text-sm font-semibold !text-white transition hover:bg-[#1d4ed8]"
        >
          Buy Opportunity
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
  );
}

function ScriptCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function InfoBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-900">{value}</div>
    </div>
  );
}

function StatBox({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>
    </div>
  );
}

function VoiceStep({
  number,
  title,
  text,
}: {
  number: number;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
          {number}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
        </div>
      </div>
    </div>
  );
}

function DarkInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/10 p-3">
      <div className="text-xs uppercase tracking-wide text-blue-100/65">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

function HomeownerCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function FormField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-900">{value}</div>
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

function IntegrationCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(21,59,122,0.05)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function AdminCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(21,59,122,0.05)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function WorkflowCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}