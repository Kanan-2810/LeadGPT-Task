import { progressData, progressMetricsConfig } from "@/utils/contants";

import { MetricsTooltip } from "@/components/charts/chart-utils/CustomTooltip";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function ProgressOverTimeChart() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Progress over time
          </h2>
        </div>
        <button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600">
          Select parameters
        </button>
      </header>

      <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold">
        <span className="flex items-center gap-1.5 rounded-full bg-[#6F5DED14] px-2 py-1 text-[#6F5DED]">
          People contacted
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-[#1EC8A514] px-2 py-1 text-[#1EC8A5]">
          Leads generated
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-[#FF5A5F14] px-2 py-1 text-[#FF5A5F]">
          People rejected
        </span>
      </div>

      <div className="relative mt-4 flex-1 min-h-[200px] rounded-2xl bg-linear-to-b from-slate-50 to-white p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={progressData}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorContacted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorRejected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fb7185" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#fb7185" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorGenerated" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#e2e8f0"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              domain={[0, 650]}
            />
            <Tooltip
              content={<MetricsTooltip metricsConfig={progressMetricsConfig} />}
              cursor={{ stroke: "#cbd5f5", strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="contacted"
              stroke="#6366f1"
              strokeWidth={3}
              fill="url(#colorContacted)"
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="rejected"
              stroke="#fb7185"
              strokeWidth={3}
              fill="url(#colorRejected)"
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="generated"
              stroke="#34d399"
              strokeWidth={3}
              fill="url(#colorGenerated)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}

export default ProgressOverTimeChart;
