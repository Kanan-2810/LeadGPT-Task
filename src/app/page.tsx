"use client";

import LeadSummaryChart from "@/components/charts/lead-chart/LeadSummaryChart";
import ProgressOverTimeChart from "@/components/charts/progress-chart/ProgressOverTimeChart";
import DataStates from "@/components/sections/DataStates";
import FilterIcon from "../assets/icons/filter.svg";
import Image from "next/image";
import ExpandIcon from "../assets/icons/Expand.svg";
import FrameIcon from "../assets/icons/Frame.svg";

export default function Home() {
  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden">
      <section className="flex shrink-0 flex-wrap items-center justify-between gap-3 rounded-3xl py-3 text-sm">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={FilterIcon}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
          Filters
        </button>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
          >
            Date range:{" "}
            <span className="font-semibold text-slate-900">All</span>
            <Image
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              src={ExpandIcon}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Image
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              src={FrameIcon}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            Edit insights
          </button>
        </div>
      </section>

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
