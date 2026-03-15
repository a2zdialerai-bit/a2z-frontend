"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Users,
} from "lucide-react";
import { register, setToken } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("A2Z Workspace Owner");
  const [workspaceName, setWorkspaceName] = useState("Demo Brokerage");
  const [email, setEmail] = useState("owner@a2zdemo.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await register({
        full_name: fullName,
        workspace_name: workspaceName,
        email,
        password,
      });
      setToken(data.access_token);
      router.push("/app");
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Unable to create workspace.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8fbff] px-6 py-10 text-slate-900">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl overflow-hidden rounded-[36px] border border-[#e6eefc] bg-white shadow-[0_30px_80px_rgba(21,59,122,0.08)] lg:grid-cols-[1fr_1fr]">
        <section className="relative hidden overflow-hidden bg-[#153e8a] px-10 py-12 text-white lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.24),transparent_28%)]" />

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
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                    A2Z Dialer
                  </div>
                  <div className="text-sm text-blue-100/80">
                    AI outbound prospecting platform
                  </div>
                </div>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                <Sparkles className="h-3.5 w-3.5" />
                Launch your workspace
              </div>

              <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight">
                Build a prospecting engine that keeps dialing even when your team can’t.
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100/85">
                Set up your brokerage, agency, or sales team workspace and start
                running AI-powered outbound campaigns that qualify leads and book appointments.
              </p>
            </div>

            <div className="space-y-4">
              <BenefitRow
                icon={<Building2 className="h-5 w-5" />}
                title="Built for brokerages and agencies"
                text="Create one system for operators, managers, campaigns, and appointment flow."
              />
              <BenefitRow
                icon={<Users className="h-5 w-5" />}
                title="Made for daily team use"
                text="Give your team a cleaner control center for leads, calls, appointments, and performance."
              />
              <BenefitRow
                icon={<PhoneCall className="h-5 w-5" />}
                title="Automation-first setup"
                text="Organize lead lists, launch campaigns, and let AI handle outbound calling at scale."
              />

              <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/80">
                  What you unlock
                </div>

                <div className="mt-4 space-y-3">
                  <ChecklistItem text="AI outbound campaign management" />
                  <ChecklistItem text="Lead, call, and appointment visibility" />
                  <ChecklistItem text="Pathway-driven conversation control" />
                  <ChecklistItem text="Backend-compatible onboarding flow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center px-6 py-8 sm:px-10 lg:px-12">
          <div className="w-full">
            <div className="mb-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                Workspace setup
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#163b7a]">
                Create your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Set up your AI outbound calling workspace for your brokerage,
                team, agency, or sales operation.
              </p>
            </div>

            <form onSubmit={onSubmit} className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full name
                </label>
                <input
                  className="w-full rounded-2xl border border-[#dbe7ff] bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#93c5fd] focus:ring-4 focus:ring-[#eaf2ff]"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Owner or admin name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Workspace name
                </label>
                <input
                  className="w-full rounded-2xl border border-[#dbe7ff] bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#93c5fd] focus:ring-4 focus:ring-[#eaf2ff]"
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  placeholder="Brokerage, team, or agency"
                />
              </div>

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
                  <span className="text-xs font-medium text-slate-400">
                    Use a secure password
                  </span>
                </div>
                <input
                  type="password"
                  className="w-full rounded-2xl border border-[#dbe7ff] bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#93c5fd] focus:ring-4 focus:ring-[#eaf2ff]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create password"
                />
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
                {loading ? "Creating workspace..." : "Create workspace"}
                {!loading ? <ArrowRight className="h-4 w-4" /> : null}
              </button>
            </form>

            <div className="mt-6 text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#2563eb] transition hover:text-[#1d4ed8]"
              >
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function BenefitRow({
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

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0f3272]/40 px-4 py-3">
      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
      <span className="text-sm text-blue-50">{text}</span>
    </div>
  );
}
