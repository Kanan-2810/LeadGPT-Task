import FilterIcon from "../../assets/icons/filter.svg";
import Image from "next/image";
import ExpandIcon from "../../assets/icons/Expand.svg";
import FrameIcon from "../../assets/icons/Frame.svg";

function DataFilters() {
  return (
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
          Date range: <span className="font-semibold text-slate-900">All</span>
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
  );
}

export default DataFilters;
