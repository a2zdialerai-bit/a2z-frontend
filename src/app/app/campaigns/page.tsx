"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { fetchCampaigns } from "@/lib/api";

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    fetchCampaigns()
      .then((res) => setCampaigns(Array.isArray(res) ? res : []))
      .catch(() => setCampaigns([]));
  }, []);

  return (
    <AppShell
      title="Campaigns"
      subtitle="Launch, pause, and monitor outbound autopilot campaigns by workspace."
    >
      <div className="space-y-6">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Campaign Control Center</h2>
              <p className="mt-1 text-sm text-white/50">
                Assign lead lists, pathways, timing windows, and workspace settings.
              </p>
            </div>
            <button className="rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-semibold hover:bg-blue-500">
              New Campaign
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          {(campaigns.length ? campaigns : [
            { id: 1, name: "Bronx Expired March", status: "running", pathway: "Expired Listings Master Flow" },
            { id: 2, name: "Queens FSBO Test", status: "paused", pathway: "FSBO Conversion Flow" },
          ]).map((campaign: any) => (
            <div
              key={campaign.id}
              className="rounded-[28px] border border-white/10 bg-white/5 p-5"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-lg font-semibold">
                    {campaign.name || "Untitled Campaign"}
                  </div>
                  <div className="mt-1 text-sm text-white/50">
                    Pathway: {campaign.pathway || campaign.pathway_name || "—"}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-blue-200">
                    {campaign.status || "draft"}
                  </div>
                  <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                    Pause
                  </button>
                  <button className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold hover:bg-emerald-500">
                    Start
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
