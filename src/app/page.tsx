"use client";

import LeadSummaryChart from "@/components/charts/lead-chart/LeadSummaryChart";
import ProgressOverTimeChart from "@/components/charts/progress-chart/ProgressOverTimeChart";
import DataFilters from "@/components/sections/DataFilters";
import DataStates from "@/components/sections/DataStates";

export default function Home() {
  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden">
      <DataFilters />
      <div className="shrink-0">
        <DataStates />
      </div>
      <section className="grid mb-4 flex-1 min-h-0 gap-4 xl:grid-cols-[1.3fr_0.9fr]">
        <ProgressOverTimeChart />
        <LeadSummaryChart />
      </section>
    </div>
  );
}
