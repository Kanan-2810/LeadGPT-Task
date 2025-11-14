import { metrics } from "@/utils/contants";
import Image from "next/image";

import NextIcon from "../../assets/icons/next.svg";

export function DataStates() {
  return (
    <section className="relative space-y-3">
      <div className="flex items-end justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-wide">Overview</p>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5 w-full">
          {metrics.map((metric) => (
            <article
              key={metric.chip}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3"
            >
              <div className="flex items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-md">
                  <Image
                    src={metric.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </span>
                <span className="text-[13px] font-medium text-slate-500">
                  {metric.chip}
                </span>
              </div>
              <p className="ml-2 text-2xl font-semibold text-slate-900">
                {metric.value}
              </p>
            </article>
          ))}
        </div>

        <button className="flex items-center justify-center p-2 hover:bg-slate-100 rounded-full">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={NextIcon}
            alt="arrow"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </button>
      </div>
    </section>
  );
}

export default DataStates;
