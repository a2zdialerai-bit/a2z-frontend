import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10">
        <header className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">A2Z Dialer</div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/5"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
            >
              Start Free
            </Link>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
              AI Outbound Calling • Appointment Setting • Multi-Tenant SaaS
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Turn lead lists into real conversations, booked appointments, and
              predictable pipeline.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              A2Z Dialer helps real estate teams, lead gen agencies, and sales
              operators upload leads, run AI-powered outbound campaigns, handle
              objections with deterministic pathway logic, and book appointments
              automatically.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
              >
                Create Workspace
              </Link>
              <Link
                href="/login"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                Open Dashboard
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-medium">Deterministic Brain</div>
                <div className="mt-2 text-sm text-white/60">
                  Pathway JSON controls routing, objection flow, extraction, and
                  decision logic.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-medium">Campaign Autopilot</div>
                <div className="mt-2 text-sm text-white/60">
                  Upload CSVs, launch campaigns, monitor status, and review call
                  outcomes from one console.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-medium">Booked Appointments</div>
                <div className="mt-2 text-sm text-white/60">
                  Capture qualified intent, create appointments, and sync
                  confirmations across your workflow.
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f1726]/90 shadow-2xl shadow-black/30">
              <div className="border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="grid gap-4 p-5">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Active Campaigns
                    </div>
                    <div className="mt-2 text-3xl font-semibold">12</div>
                    <div className="mt-1 text-sm text-emerald-300">+3 today</div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Calls Today
                    </div>
                    <div className="mt-2 text-3xl font-semibold">486</div>
                    <div className="mt-1 text-sm text-white/60">
                      72 connected
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Appointments
                    </div>
                    <div className="mt-2 text-3xl font-semibold">18</div>
                    <div className="mt-1 text-sm text-white/60">
                      9 confirmed
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#0b1320] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">
                        Campaign Performance
                      </div>
                      <div className="text-xs text-white/50">
                        Real-time visibility for your AI dialing ops
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                      Live
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        name: "Bronx Expired Listings",
                        rate: "32%",
                        width: "w-[32%]",
                      },
                      {
                        name: "FSBO Queens",
                        rate: "19%",
                        width: "w-[19%]",
                      },
                      {
                        name: "Circle Prospecting Manhattan",
                        rate: "41%",
                        width: "w-[41%]",
                      },
                    ].map((row) => (
                      <div key={row.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-white/75">{row.name}</span>
                          <span className="text-white/55">{row.rate}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ${row.width}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-medium">Latest Call</div>
                    <div className="mt-3 text-sm text-white/65">
                      “Yes, I’d be open to seeing what you can do. What does
                      tomorrow look like?”
                    </div>
                    <div className="mt-3 text-xs text-white/40">
                      Route: objection_price → reframe_value → appointment_offer
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-medium">Workspace Controls</div>
                    <div className="mt-3 text-sm text-white/65">
                      Caller identity, pathways, DNC, integrations, calendars,
                      and campaign rules — all scoped by workspace.
                    </div>
                    <div className="mt-3 text-xs text-blue-200">
                      Built for brokerages, teams, agencies, and solo operators
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
