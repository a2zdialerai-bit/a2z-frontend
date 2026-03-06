"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
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
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <div className="w-full max-w-lg rounded-[28px] border border-white/10 bg-[#0e1420]/90 p-8 shadow-2xl shadow-black/30">
        <div className="mb-8">
          <div className="text-sm font-medium text-purple-300">A2Z Dialer</div>
          <h1 className="mt-2 text-3xl font-semibold">Create workspace</h1>
          <p className="mt-2 text-sm text-white/60">
            Set up your AI outbound calling workspace for your team, brokerage, or agency.
          </p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
          <div>
            <label className="mb-2 block text-sm text-white/70">Full name</label>
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Owner or admin name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">Workspace name</label>
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="Brokerage, team, or agency"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">Email</label>
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">Password</label>
            <input
              type="password"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create password"
            />
          </div>

          {error ? (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-2xl bg-purple-600 px-4 py-3 text-sm font-semibold transition hover:bg-purple-500 disabled:opacity-60"
          >
            {loading ? "Creating workspace..." : "Create workspace"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-white/55">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-300 hover:text-purple-200">
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
