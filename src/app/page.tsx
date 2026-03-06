import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <Image
              src="/a2z-logo.png"
              alt="A2Z Dialer"
              width={220}
              height={60}
              priority
              className="h-12 w-auto object-contain"
            />
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#how-it-works" className="hover:text-slate-900">
              How It Works
            </a>
            <a href="#benefits" className="hover:text-slate-900">
              Why Agents Love Us
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              AI Cold Calling for Real Estate
            </div>

            <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Turn more leads into listing appointments automatically.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              A2Z Dialer helps agents upload leads, launch AI-powered outbound
              campaigns, handle objections, and book appointments with a cleaner,
              faster workflow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Start Free
              </Link>
              <Link
                href="/login"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Sign In
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <div className="mt-1 text-sm text-slate-500">AI follow-up</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">Fast</div>
                <div className="mt-1 text-sm text-slate-500">Campaign setup</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">Smart</div>
                <div className="mt-1 text-sm text-slate-500">Objection handling</div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Live Campaign Snapshot
                  </div>
                  <div className="text-xs text-slate-500">
                    Your outbound system at a glance
                  </div>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Live
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Calls made</div>
                  <div className="mt-2 text-3xl font-bold text-slate-900">182</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Reached</div>
                  <div className="mt-2 text-3xl font-bold text-slate-900">61</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Appointments</div>
                  <div className="mt-2 text-3xl font-bold text-slate-900">9</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Positive rate</div>
                  <div className="mt-2 text-3xl font-bold text-slate-900">31%</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 p-4">
                <div className="mb-3 text-sm font-semibold text-slate-900">
                  Built for real estate teams
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>• Upload lead lists in minutes</li>
                  <li>• Launch AI cold calling campaigns fast</li>
                  <li>• Track call logs and appointments</li>
                  <li>• Keep outreach organized in one dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              How It Works
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              A simple system from lead upload to booked appointment.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["1", "Upload Leads", "Import your lead list and organize your outreach."],
              ["2", "Launch Campaigns", "Run AI-powered calling flows built for real conversations."],
              ["3", "Book Appointments", "Turn interest into meetings and opportunities."],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {num}
                </div>
                <div className="mt-5 text-xl font-semibold text-slate-900">{title}</div>
                <div className="mt-3 text-sm leading-7 text-slate-600">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Why Agents Love Us
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Clean, premium, and built for results.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A2Z Dialer is designed to help you move faster without the usual messy calling workflow.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Lead Management",
              text: "Keep lists organized and easy to work through.",
            },
            {
              title: "AI Calling Campaigns",
              text: "Launch campaigns with less manual follow-up.",
            },
            {
              title: "Structured Pathways",
              text: "Control objection handling and call flow logic.",
            },
            {
              title: "Appointment Booking",
              text: "Turn warm conversations into real calendar opportunities.",
            },
            {
              title: "Call Logs",
              text: "Review outcomes, statuses, and history in one place.",
            },
            {
              title: "DNC Tracking",
              text: "Keep suppression and opt-outs visible and organized.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-lg font-semibold text-slate-900">{item.title}</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Calendar Sync
            </div>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Keep your appointments moving.
            </h3>
            <p className="mt-4 text-slate-600">
              Connect your workflow so booked calls and follow-ups stay organized for your team.
            </p>
          </div>

          <div id="pricing" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Pricing & Setup
            </div>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Simple plans for teams that want to scale.
            </h3>
            <p className="mt-4 text-slate-600">
              Start with a clean setup and grow into a full outbound calling operation.
            </p>
            <div className="mt-6">
              <Link
                href="/register"
                className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/a2z-logo.png"
              alt="A2Z Dialer"
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <span>© {new Date().getFullYear()} A2Z Dialer. All rights reserved.</span>
          </div>

          <div className="flex gap-5">
            <Link href="/login" className="hover:text-slate-900">
              Login
            </Link>
            <Link href="/register" className="hover:text-slate-900">
              Register
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}