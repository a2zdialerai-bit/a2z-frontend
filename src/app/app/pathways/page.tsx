"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { fetchPathways } from "@/lib/api";

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

  return (
    <AppShell
      title="Pathways"
      subtitle="Manage deterministic JSON call flows, objection routing, and extraction logic."
    >
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold">Saved Pathways</h2>
          <p className="mt-1 text-sm text-white/50">
            Each pathway controls the call brain for a specific campaign type.
          </p>

          <div className="mt-5 space-y-3">
            {(pathways.length ? pathways : [
              { id: 1, name: "Expired Listings Master Flow", version: "v1" },
              { id: 2, name: "FSBO Conversion Flow", version: "v1" },
            ]).map((pathway: any) => (
              <div
                key={pathway.id}
                className="rounded-2xl border border-white/10 bg-black/10 p-4"
              >
                <div className="text-sm font-medium">
                  {pathway.name || "Untitled Pathway"}
                </div>
                <div className="mt-1 text-xs text-white/45">
                  {pathway.version || "Draft"}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">JSON Editor</h2>
              <p className="mt-1 text-sm text-white/50">
                Deterministic route logic lives here and should stay versioned.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                Validate
              </button>
              <button className="rounded-2xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500">
                Save
              </button>
            </div>
          </div>

          <textarea
            defaultValue={sampleJson}
            className="min-h-[520px] w-full rounded-3xl border border-white/10 bg-[#08101b] p-4 font-mono text-sm text-white/85"
          />
        </div>
      </div>
    </AppShell>
  );
}
