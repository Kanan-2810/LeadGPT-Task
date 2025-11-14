import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MetricsTooltip } from "../chart-utils/CustomTooltip";
import {
  leadSummaryChartData,
  leadSummaryMetricsConfig,
} from "@/utils/contants";
import LeadDetails from "./LeadDetails";

export default function LeadSummaryChart() {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4">
      <section className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Leads summary
            </h2>
          </div>
        </div>
        <div className="h-40 w-full rounded-2xl bg-slate-50/50 p-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={leadSummaryChartData} barSize={20}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 11 }}
                width={30}
                ticks={[0, 100, 200, 300, 400, 500]}
              />
              <Tooltip
                content={
                  <MetricsTooltip metricsConfig={leadSummaryMetricsConfig} />
                }
                cursor={{ fill: "rgba(99,102,241,0.05)" }}
              />
              <Bar
                dataKey="generated"
                fill="#7c6ff1"
                radius={[6, 6, 2, 2]}
                stackId="a"
              />
              <Bar
                dataKey="delayed"
                fill="#f9b04c"
                radius={[0, 0, 2, 2]}
                stackId="a"
              />
              <Bar
                dataKey="notResponded"
                fill="#fb6f92"
                radius={[0, 0, 2, 2]}
                stackId="a"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-3 text-[11px] font-semibold text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Overall leads
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Delayed response
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            Not responded
          </span>
        </div>
      </section>
      <LeadDetails />
    </article>
  );
}
