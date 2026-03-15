"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CalendarCheck2,
  MapPinned,
  PhoneCall,
  Sparkles,
  Users,
  BadgeDollarSign,
  CheckCircle2,
  Search,
  LockKeyhole,
  AudioWaveform,
  Bot,
} from "lucide-react";
import { login, setToken } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("owner@a2zdemo.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await login({ email, password });
      setToken(data.access_token);
      router.push("/app");
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f7faff_0%,#f3f7ff_45%,#eef4ff_100%)] px-6 py-10 text-slate-900">
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-140px] right-[-100px] h-[340px] w-[340px] rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl overflow-hidden rounded-[38px] border border-[#e3edff] bg-white shadow-[0_35px_100px_rgba(33,80,160,0.10)] lg:grid-cols-[1.12fr_0.88fr]">
        <section className="relative hidden overflow-hidden bg-[linear-gradient(155deg,#0f172a_0%,#153e8a_42%,#2563eb_100%)] px-10 py-12 text-white lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_30%)]" />
          <div className="pointer-events-none absolute -left-16 top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-sm backdrop-blur">
                  <Image
                    src="/a2z-logo.png"
                    alt="A2Z Dialer logo"
                    width={44}
                    height={44}
                    className="h-11 w-11 object-contain"
                    priority
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">
                    A2Z Dialer
                  </div>
                  <div className="text-sm text-blue-100/80">
                    AI outbound prospecting + lead marketplace
                  </div>
                </div>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                <Sparkles className="h-3.5 w-3.5" />
                Which path will you choose?
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight">
                Run your own AI campaigns or buy verified appointments already booked in your target market.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/85">
                A2Z is built for agents who want more than a dialer. Launch
                outbound campaigns with AI, or use the marketplace to buy
                territory-based appointment opportunities by zip code or city.
              </p>

              <div className="mt-8 grid gap-4 xl:grid-cols-2">
                <PathCard
                  icon={<PhoneCall className="h-5 w-5" />}
                  title="Run AI campaigns"
                  text="Upload leads, launch campaigns, manage pathways, and let AI handle outbound prospecting."
                />
                <PathCard
                  icon={<MapPinned className="h-5 w-5" />}
                  title="Buy verified leads"
                  text="Search territories, review availability, and unlock appointment leads with buyer access."
                />
              </div>
            </div>

            <div className="mt-10 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/75">
                      Workspace preview
                    </div>
                    <div className="mt-1 text-lg font-semibold text-white">
                      AI outbound engine
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Live
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <MiniStat label="Calls Today" value="1,284" />
                  <MiniStat label="Booked" value="48" />
                  <MiniStat label="Connect Rate" value="34%" />
                  <MiniStat label="Campaigns" value="12" />
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-[#0c2b66]/45 p-4">
                  <div className="flex items-center gap-2 text-blue-100">
                    <Bot className="h-4 w-4" />
                    <span className="text-sm font-semibold">
                      AI handled objection and booked consultation
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-blue-100/75">
                    Recent call outcome: homeowner interested, follow-up confirmed,
                    appointment added to queue.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="mb-4 flex items-center gap-2">
                  <MapPinned className="h-4 w-4 text-blue-100" />
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/75">
                    Lead marketplace preview
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0c2b66]/45 p-4">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-blue-100/85">
                    <Search className="h-4 w-4" />
                    Search by zip code or city
                  </div>

                  <div className="mt-4 space-y-3">
                    <LeadTile zip="10462" city="Bronx, NY" count="3 appointments" price="$85 each" />
                    <LeadTile zip="11375" city="Forest Hills, NY" count="2 seller leads" price="$110 each" />
                    <LeadTile zip="11230" city="Brooklyn, NY" count="4 appointments" price="$95 each" />
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-3">
                    <div className="flex items-center gap-2 text-sm text-blue-100">
                      <LockKeyhole className="h-4 w-4" />
                      Buyer account unlocks lead details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex items-center px-6 py-8 sm:px-10 lg:px-12">
          <div className="pointer-events-none absolute right-[-40px] top-[-20px] h-40 w-40 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-40px] left-[-20px] h-40 w-40 rounded-full bg-violet-100/50 blur-3xl" />

          <div className="relative z-10 w-full">
            <div className="mb-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                Welcome back
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#163b7a]">
                Sign in to A2Z Dialer
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Access your campaigns, pathways, appointments, call activity,
                or sign in to browse verified appointment leads in the marketplace.
              </p>
            </div>

            <div className="mb-6 rounded-[30px] border border-[#dbe7ff] bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#163b7a]">
                <CheckCircle2 className="h-4 w-4 text-[#2563eb]" />
                Which path will you choose?
              </div>

              <div className="grid gap-3">
                <ChoiceCard
                  icon={<Users className="h-4 w-4" />}
                  title="Workspace users"
                  text="Run campaigns, manage leads, monitor outreach, and track booked appointments."
                  action={
                    <button
                      type="button"
                      className="rounded-xl border border-[#dbe7ff] bg-white px-4 py-2 text-sm font-semibold text-[#163b7a] transition hover:bg-[#f8fbff]"
                    >
                      Run campaigns
                    </button>
                  }
                />
                <ChoiceCard
                  icon={<BadgeDollarSign className="h-4 w-4" />}
                  title="Lead buyers"
                  text="Search by territory and unlock verified appointment leads without running campaigns."
                  action={
                    <Link
                      href="/register"
                      className="rounded-xl bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]"
                    >
                      Buy leads
                    </Link>
                  }
                />
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  className="w-full rounded-2xl border border-[#dbe7ff] bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#93c5fd] focus:ring-4 focus:ring-[#eaf2ff]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-sm font-medium text-[#2563eb] transition hover:text-[#1d4ed8]"
                  >
                    Forgot password
                  </button>
                </div>
                <input
                  type="password"
                  className="w-full rounded-2xl border border-[#dbe7ff] bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#93c5fd] focus:ring-4 focus:ring-[#eaf2ff]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>

              <div className="rounded-2xl border border-[#dbe7ff] bg-[#f8fbff] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#163b7a]">
                  <AudioWaveform className="h-4 w-4 text-[#2563eb]" />
                  Built for outbound teams and lead buyers
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  One login experience supports both campaign operators and
                  buyers who only want access to verified lead inventory.
                </p>
              </div>

              {error ? (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in"}
                {!loading ? <ArrowRight className="h-4 w-4" /> : null}
              </button>
            </form>

            <div className="mt-6 space-y-3">
              <div className="text-sm text-slate-500">
                Need a workspace?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-[#2563eb] transition hover:text-[#1d4ed8]"
                >
                  Create one
                </Link>
              </div>

              <div className="text-sm text-slate-500">
                Only want to buy leads?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-[#2563eb] transition hover:text-[#1d4ed8]"
                >
                  Buy leads
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function FeatureRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
      <div className="mt-0.5 rounded-xl bg-white/10 p-2 text-blue-100">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="mt-1 text-sm leading-6 text-blue-100/80">{text}</div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f3272]/40 p-4">
      <div className="text-xs uppercase tracking-[0.16em] text-blue-100/70">
        {label}
      </div>
      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}

function PathCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <div className="flex items-center gap-2 text-blue-100">
        {icon}
        <span className="text-sm font-semibold text-white">{title}</span>
      </div>
      <p className="mt-2 text-sm leading-6 text-blue-100/80">{text}</p>
    </div>
  );
}

function LeadTile({
  zip,
  city,
  count,
  price,
}: {
  zip: string;
  city: string;
  count: string;
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
          <div className="mt-1 text-xs text-blue-100/75">{count}</div>
        </div>
        <div className="rounded-lg bg-white/15 px-2.5 py-1 text-xs font-semibold text-white">
          {price}
        </div>
      </div>
    </div>
  );
}

function ChoiceCard({
  icon,
  title,
  text,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  action: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#dbe7ff] bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#2563eb]">
            {icon}
            <span className="text-sm font-semibold text-[#163b7a]">{title}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
        </div>
        <div className="shrink-0">{action}</div>
      </div>
    </div>
  );
}