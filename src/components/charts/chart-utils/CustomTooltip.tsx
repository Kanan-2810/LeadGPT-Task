type PayloadPoint = {
  name?: string;
  value?: number;
  color?: string;
};

const TooltipShell = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm">
    {children}
  </div>
);

export const MetricsTooltip = ({
  active,
  payload,
  metricsConfig,
}: {
  active?: boolean;
  payload?: PayloadPoint[];
  metricsConfig: {
    key: string;
    label: string;
    dotColor?: string;
    textColorClass?: string;
  }[];
}) => {
  if (!active || !payload || !payload.length) return null;

  const findValue = (key: string) =>
    payload.find((p) => p.name === key)?.value ?? 0;

  return (
    <TooltipShell>
      <div className="flex flex-col gap-3">
        {metricsConfig.map((m) => (
          <div key={m.key} className="flex items-start gap-3">
            <span
              className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
              style={{ background: m.dotColor ?? "#CBD5E1" }}
            />
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">{m.label}</span>
              <span
                className={`mt-1 text-base font-semibold ${
                  m.textColorClass ?? "text-slate-900"
                }`}
              >
                {findValue(m.key)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </TooltipShell>
  );
};
