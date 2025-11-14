import { useState } from "react";

function LeadDetails() {
  const [isProgressTooltipVisible, setIsProgressTooltipVisible] =
    useState(false);
  return (
    <div>
      <section className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
          <p className="text-2xl font-semibold text-slate-900">1200</p>
          <span>Purchases leads available</span>
          <button className="ml-auto text-xs font-semibold text-indigo-600 hover:text-indigo-700">
            Get more leads →
          </button>
        </div>
        <div
          className="relative"
          tabIndex={0}
          onMouseEnter={() => setIsProgressTooltipVisible(true)}
          onMouseLeave={() => setIsProgressTooltipVisible(false)}
          onFocus={() => setIsProgressTooltipVisible(true)}
          onBlur={() => setIsProgressTooltipVisible(false)}
        >
          <div className="h-2.5 rounded-full bg-white/80">
            <div className="h-full w-[32%] rounded-full bg-indigo-500" />
          </div>
          <div
            className={`absolute -top-12 left-[22%] w-32 rounded-xl border border-slate-200 bg-white p-2.5 text-xs shadow-lg transition-all duration-150 ${
              isProgressTooltipVisible
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Leads Generated
            </div>
            <p className="text-xl font-semibold text-slate-900">392</p>
            <span className="absolute -bottom-1 left-8 h-2 w-2 rotate-45 border-r border-b border-slate-200 bg-white" />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-[11px] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Leads utilised
            </div>
            <p className="text-xl font-semibold text-slate-900">1200</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-[11px] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              Leads generated
            </div>
            <p className="text-xl font-semibold text-slate-900">827</p>
          </div>
          <div className="space-y-1">
            <div className="text-[11px] text-slate-500">Potential leads</div>
            <p className="text-xl font-semibold text-slate-900">300</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LeadDetails;
