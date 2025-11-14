"use client";

import Image from "next/image";
import NotificationIcon from "../../assets/icons/bell.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between px-8 pt-4 pb-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Statistics
        </h1>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center"
          >
            <Image
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              src={NotificationIcon}
              alt=""
              width={20}
              height={20}
              className="h-10 w-10 object-contain"
            />
          </button>
          <div className="h-10 w-10 overflow-hidden rounded-full border border-slate-200">
            <Image
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              src={ProfileIcon}
              alt=""
              width={20}
              height={20}
              className="h-10 w-10 object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
