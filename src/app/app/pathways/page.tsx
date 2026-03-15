"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { fetchPathways } from "@/lib/api";
import {
  CheckCircle2,
  GitBranch,
  Save,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const sampleJson = `{
  "start_node": "step1_intro_listen",
  "nodes": {
    "step1_intro_listen": {
      "say": "Hi, this is {{agent_name}} with {{workspace_name}}. I was calling about your home.",
      "routes": [
        { "intent": "interested", "next": "qualify_interest" },
        { "intent": "not_interested", "next": "objection_not_interested" }
      ],
      "fallback_next": "clarify_response"
    }
  },
  "extract": {
    "confirmed_homeowner": true,
    "listing_status": ""
  }
}`;

export default function PathwaysPage() {
  const [pathways, setPathways] = useState<any[]>([]);

  useEffect(() => {
    fetchPathways()
      .then((res) => setPathways(Array.isArray(res) ? res : []))
      .catch(() => setPathways([]));
  }, []);

  const rows = pathways.length
    ? pathways
    : [
        { id: 1, name: "Expired Listings Master Flow", version: "v1" },
        { id: 2, name: "FSBO Conversion Flow", version: "v1" },
      ];

  return (
    <AppShell
      title="Pathways"
      subtitle="Manage deterministic call flows, objection routing, and extraction logic for your AI outbound campaigns."
    >
      <div className="space-y-6">
        <section className="rounded-[32px] border border-[#e6eefc] bg-white p-6 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                <Workflow className="h-3.5 w-3.5" />
                Conversation control
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#163b7a]">
                Define how your AI thinks, routes, and qualifies
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Pathways make conversations more predictable, auditable, and
                easier to control than fully open-ended AI calling flows.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={<GitBranch className="h-5 w-5" />}
            label="Structured Logic"
            text="Control how calls move through each node and objection route."
          />
          <InfoCard
            icon={<ShieldCheck className="h-5 w-5" />}
            label="Auditable"
            text="Make pathway behavior easier to review, debug, and improve."
          />
          <InfoCard
            icon={<Sparkles className="h-5 w-5" />}
            label="Campaign-Specific"
            text="Use different pathways for expired listings, FSBO, and other lead sources."
          />
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[32px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
            <div>
              <h3 className="text-lg font-semibold text-[#163b7a]">
                Saved Pathways
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Each pathway acts as the conversation brain for a specific campaign type.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {rows.map((pathway: any) => (
                <div
                  key={pathway.id}
                  className="rounded-2xl border border-[#e6eefc] bg-[#f7fbff] p-4 transition hover:border-[#d3e2ff] hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-[#163b7a]">
                        {pathway.name || "Untitled Pathway"}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        {pathway.version || "Draft"}
                      </div>
                    </div>

                    <div className="inline-flex rounded-full bg-[#eef4ff] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#2563eb]">
                      Active
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#163b7a]">
                  JSON Editor
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Deterministic route logic lives here and should stay versioned.
                </p>
              </div>

              <div className="flex gap-2">
                <button className="inline-flex items-center gap-2 rounded-2xl border border-[#dbe7ff] bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#f7fbff]">
                  <CheckCircle2 className="h-4 w-4" />
                  Validate
                </button>
                <button className="inline-flex items-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">
                  <Save className="h-4 w-4" />
                  Save
                </button>
              </div>
            </div>

            <textarea
              defaultValue={sampleJson}
              className="min-h-[540px] w-full rounded-[28px] border border-[#dbe7ff] bg-[#0b1730] p-4 font-mono text-sm leading-6 text-blue-50 outline-none"
            />
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function InfoCard({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-[#e6eefc] bg-white p-5 shadow-[0_10px_30px_rgba(21,59,122,0.05)]">
      <div className="rounded-2xl bg-[#eef4ff] p-3 text-[#2563eb] w-fit">{icon}</div>
      <div className="mt-4 text-base font-semibold text-[#163b7a]">{label}</div>
      <div className="mt-2 text-sm leading-6 text-slate-500">{text}</div>
    </div>
  );
}
