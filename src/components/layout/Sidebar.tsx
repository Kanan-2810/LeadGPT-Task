"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { Mail, Video } from "lucide-react";

import CampaignsIcon from "../../assets/icons/campaings.svg";
import DashboardIcon from "../../assets/icons/Dashboard.svg";
import InboxIcon from "../../assets/icons/inbox.svg";
import PlaybookIcon from "../../assets/icons/playbook.svg";
import SendersIcon from "../../assets/icons/Senders.svg";
import StatisticsIcon from "../../assets/icons/statastics.svg";
import AnalyticsIcon from "../../assets/icons/analytics.svg";
import IntegrationsIcon from "../../assets/icons/integrations.svg";
import KnowledgeBaseIcon from "../../assets/icons/knowledgebase.svg";
import LogoIcon from "../../assets/icons/Icon.svg";
import CollapseIcon from "../../assets/icons/collapse.svg";
import SidebarProfileIcon from "../../assets/icons/side-profile.svg";
import HelpIcon from "../../assets/icons/help.svg";

type NavItem = {
  label: string;
  icon: StaticImageData;
};

const iconSize = 20;

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const campaignsNav: NavItem[] = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Campaigns",
    icon: CampaignsIcon,
  },
  {
    label: "Inbox",
    icon: InboxIcon,
  },
  {
    label: "Senders",
    icon: SendersIcon,
  },
  {
    label: "Playbook / Resources",
    icon: PlaybookIcon,
  },
];

const insightsNav: NavItem[] = [
  {
    label: "Statistics",
    icon: StatisticsIcon,
  },
  {
    label: "Analytics",
    icon: AnalyticsIcon,
  },
  {
    label: "Integrations",
    icon: IntegrationsIcon,
  },
  {
    label: "Knowledge base",
    icon: KnowledgeBaseIcon,
  },
];
/* eslint-enable @typescript-eslint/no-unsafe-assignment */

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`relative flex flex-col border-r border-slate-200 bg-white/95 py-4 transition-all duration-300 ${
        collapsed ? "w-20 px-3" : "w-68 px-5"
      }`}
    >
      {!collapsed && (
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="absolute right-3 top-6 rounded-full border border-slate-200 bg-white/80 px-2 py-1 text-xs font-semibold text-slate-600 shadow-sm hover:bg-slate-100 cursor-pointer"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={collapsed ? CollapseIcon : CollapseIcon}
            alt="Arrow"
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
        </button>
      )}

      <div>
        <div className="flex items-center justify-center">
          <div
            className={`w-full rounded-2xl ${
              collapsed ? "p-2" : "p-2 mr-[40px]"
            }`}
          >
            <Image
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              src={!collapsed ? LogoIcon : CollapseIcon}
              alt="LeadGPT logo"
              width={160}
              height={48}
              priority
              className={`mx-auto object-contain ${
                collapsed ? "h-8 w-8 cursor-pointer" : "h-8 w-full"
              }`}
              onClick={() => collapsed && setCollapsed((prev) => !prev)}
            />
          </div>
        </div>
        <nav
          className={`mt-6 space-y-5 text-[13px] font-medium text-slate-600 ${
            collapsed ? "text-center" : ""
          }`}
        >
          <div>
            {!collapsed && (
              <p className="mb-2 text-[11px] uppercase text-slate-400">
                Campaigns & Outreach
              </p>
            )}
            <ul className="space-y-1.5">
              {campaignsNav.map(({ label, icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    className={`flex items-center rounded-lg px-3 py-1.5 transition hover:bg-[linear-gradient(276.78deg,#A08BFF_12.73%,#6F5DED_66.26%)] hover:text-white ${
                      collapsed ? "justify-center" : "gap-3"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${
                        collapsed
                          ? "flex h-9 w-9 items-center justify-center"
                          : ""
                      }`}
                    >
                      <Image
                        src={icon}
                        alt=""
                        width={iconSize}
                        height={iconSize}
                        className="h-5 w-5 object-contain"
                      />
                    </span>
                    {!collapsed && (
                      <span className="flex-1 text-left">{label}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {!collapsed && (
              <p className="mb-2 text-[11px] uppercase tracking-wide text-slate-400">
                Insights & Management
              </p>
            )}
            <ul className="space-y-1.5">
              {insightsNav.map(({ label, icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    className={`flex items-center rounded-lg px-3 py-1.5 transition hover:bg-[linear-gradient(276.78deg,#A08BFF_12.73%,#6F5DED_66.26%)] hover:text-white ${
                      label === "Statistics"
                        ? "bg-[linear-gradient(276.78deg,#A08BFF_12.73%,#6F5DED_66.26%)] text-white shadow-lg"
                        : ""
                    } ${collapsed ? "justify-center" : "gap-3"}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${
                        collapsed
                          ? "flex h-9 w-9 items-center justify-center "
                          : ""
                      }`}
                    >
                      <Image
                        src={icon}
                        alt=""
                        width={iconSize}
                        height={iconSize}
                        className="h-5 w-5 object-contain"
                      />
                    </span>
                    {!collapsed && <span>{label}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {!collapsed && (
        <div className="mt-auto space-y-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={SidebarProfileIcon}
                alt="Profile photo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-2xl object-cover"
              />
              <div>
                <p className="text-xs text-slate-400">Your LeadGPT expert is</p>
                <p className="text-base font-semibold text-slate-900">
                  Aman Kaya
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 items-center rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow">
                <span className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-slate-500" />
                  Email
                </span>
              </button>
              <button className="flex-1 items-center rounded-md bg-[#6956ED] px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#5645c2]">
                <span className="flex items-center justify-center gap-2">
                  <Video className="h-4 w-4" />
                  Meet
                </span>
              </button>
            </div>
          </div>

          <div className="-mx-4 px-4 border-t-2 border-slate-200">
            <div className="flex w-full items-center content-center gap-3 pt-3 text-sm font-medium text-slate-700 transition">
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={HelpIcon}
                alt="Arrow"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              <div className="flex-1 text-left">Help and Support</div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
