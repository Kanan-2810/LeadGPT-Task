import PeopleContactedIcon from "../assets/icons/peopleConnected.svg";
import LeadsGeneratedIcon from "../assets/icons/noOfLeads.svg";
import SequenceInProgressIcon from "../assets/icons/sequenceInProgress.svg";
import LeadRateIcon from "../assets/icons/leadRate.svg";
import SuccessRateIcon from "../assets/icons/sequenceSuccessRate.svg";

export const metrics = [
  {
    value: "12,000",
    chip: "People contacted",
    color: "text-indigo-600 bg-indigo-100",
    icon: PeopleContactedIcon as unknown as string,
  },
  {
    value: "48",
    chip: "No. of Leads generated",
    color: "text-emerald-600 bg-emerald-100",
    icon: LeadsGeneratedIcon as unknown as string,
  },
  {
    value: "234",
    chip: "Sequence in progress",
    color: "text-amber-600 bg-amber-100",
    icon: SequenceInProgressIcon as unknown as string,
  },
  {
    value: "12%",
    chip: "Lead rate",
    color: "text-blue-600 bg-blue-100",
    icon: LeadRateIcon as unknown as string,
  },
  {
    value: "27%",
    chip: "Success rate",
    color: "text-purple-600 bg-purple-100",
    icon: SuccessRateIcon as unknown as string,
  },
];

export const leadSummaryChartData = [
  { month: "Apr", generated: 280, delayed: 58, notResponded: 22 },
  { month: "May", generated: 360, delayed: 70, notResponded: 28 },
  { month: "June", generated: 150, delayed: 48, notResponded: 18 },
  { month: "July", generated: 320, delayed: 60, notResponded: 20 },
  { month: "Aug", generated: 210, delayed: 52, notResponded: 16 },
  { month: "Sept", generated: 390, delayed: 76, notResponded: 24 },
];

export const leadFunnelMetrics = [
  {
    label: "Leads utilised",
    value: "1200",
    color: "bg-indigo-500",
    fill: "bg-indigo-200",
  },
  {
    label: "Leads generated",
    value: "827",
    color: "bg-indigo-400",
    fill: "bg-indigo-100",
  },
  {
    label: "Potential leads",
    value: "300",
    color: "bg-slate-400",
    fill: "bg-slate-100",
  },
];

export const progressData = [
  { month: "Apr", contacted: 220, rejected: 110, generated: 40 },
  { month: "May", contacted: 340, rejected: 140, generated: 55 },
  { month: "June", contacted: 310, rejected: 170, generated: 60 },
  { month: "July", contacted: 470, rejected: 185, generated: 72 },
  { month: "Aug", contacted: 360, rejected: 150, generated: 68 },
  { month: "Sept", contacted: 590, rejected: 210, generated: 95 },
];

export const leadSummaryMetricsConfig = [
  {
    key: "generated",
    label: "Leads generated",
    dotColor: "#6366F1",
    textColorClass: "text-slate-900",
  },
  {
    key: "delayed",
    label: "Delayed response",
    dotColor: "#F59E0B",
    textColorClass: "text-amber-500",
  },
  {
    key: "notResponded",
    label: "Not responded",
    dotColor: "#FB7185",
    textColorClass: "text-rose-500",
  },
];

export const progressMetricsConfig = [
  {
    key: "contacted",
    label: "People contacted",
    dotColor: "#6366F1",
    textColorClass: "text-slate-900",
  },
  {
    key: "rejected",
    label: "People rejected",
    dotColor: "#FB7185",
    textColorClass: "text-rose-500",
  },
  {
    key: "generated",
    label: "Leads generated",
    dotColor: "#34D399",
    textColorClass: "text-emerald-600",
  },
];
