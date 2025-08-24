import {
  ChevronRightIcon,
  GlobeIcon,
  HomeIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { useHover } from "../../../../hooks/useHover";

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: HomeIcon,
    isActive: true,
    hasChevron: false,
  },
];

const bottomNavigationItems = [
  {
    id: "settings",
    label: "Settings",
    icon: SettingsIcon,
    hasChevron: true,
  },
  {
    id: "template-pages",
    label: "Template pages",
    icon: GlobeIcon,
    hasChevron: true,
  },
];

export const SidebarSection = (): JSX.Element => {
  const [searchRef, isSearchFocused] = useHover<HTMLInputElement>();

  return (
    <aside className="w-[300px] h-full bg-neutral-colors800 shadow-general-shadow-03 flex flex-col relative transition-all duration-300 lg:w-[300px] md:w-[280px] sm:w-[260px]">
      <img
        className="absolute w-px h-full top-0 right-0"
        alt="Divider"
        src="/divider.svg"
      />

      <header className="px-7 py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-text-single-400-bold font-[number:var(--text-single-400-bold-font-weight)] text-neutral-colors100 text-[length:var(--text-single-400-bold-font-size)] tracking-[var(--text-single-400-bold-letter-spacing)] leading-[var(--text-single-400-bold-line-height)] [font-style:var(--text-single-400-bold-font-style)]">
            Dashdark X
          </h1>
          <div className="flex flex-col gap-2">
            <ChevronRightIcon className="w-3 h-3 text-neutral-colors400 -rotate-90" />
            <ChevronRightIcon className="w-3 h-3 text-neutral-colors400 -rotate-90" />
          </div>
        </div>
      </header>

      <div className="px-7 mb-[72px]">
        <div className="relative">
          <SearchIcon className={
            "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-200"} />
          <Input
            ref={searchRef}
            placeholder="SearchIcon for..."
            className={
              "w-full h-[42px] bg-secondary-colorscolor-1 border-[0.6px] border-solid rounded-[7px] pl-10 font-text-single-100-medium text-neutral-colors400 text-[length:var(--text-single-100-medium-font-size)] leading-[var(--text-single-100-medium-line-height)] font-[number:var(--text-single-100-medium-font-weight)] tracking-[var(--text-single-100-medium-letter-spacing)] [font-style:var(--text-single-100-medium-font-style)] shadow-[0px_2px_4px_#01051133]",
              "transition-all duration-200 focus:border-primary-colorscolor-1/50 focus:shadow-lg"}
          />
        </div>
      </div>

      <nav className="flex-1 px-7">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={
                  "w-full h-[42px] justify-start px-0 rounded-[7px] transition-all duration-200 group/nav",
                  item.isActive
                    ? "bg-neutral-colors700/50 text-primary-colorscolor-1 shadow-sm"
                    : "bg-neutral-colors800 text-neutral-colors400 hover:text-neutral-colors100 hover:bg-neutral-colors700/30"
                }
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-5">
                    <IconComponent className="w-3.5 h-3.5 transition-transform duration-200 group-hover/nav:scale-110" />
                    <span className="font-text-single-200-medium font-[number:var(--text-single-200-medium-font-weight)] text-[length:var(--text-single-200-medium-font-size)] tracking-[var(--text-single-200-medium-letter-spacing)] leading-[var(--text-single-200-medium-line-height)] [font-style:var(--text-single-200-medium-font-style)]">
                      {item.label}
                    </span>
                  </div>
                  {item.hasChevron && (
                    <ChevronRightIcon className="w-3 h-3 text-neutral-colors400 transition-transform duration-200 group-hover/nav:translate-x-1" />
                  )}
                </div>
              </Button>
            );
          })}
        </div>
      </nav>

      <div className="px-7 pb-8 space-y-4">
        <div className="space-y-1">
          {bottomNavigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full h-[42px] justify-start px-0 rounded-[7px] bg-neutral-colors800 text-neutral-colors400 hover:text-neutral-colors100 hover:bg-neutral-colors700/30 transition-all duration-200 group/bottom-nav"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-5">
                    <IconComponent className="w-3.5 h-3.5 transition-transform duration-200 group-hover/bottom-nav:scale-110" />
                    <span className="font-text-single-200-medium font-[number:var(--text-single-200-medium-font-weight)] text-[length:var(--text-single-200-medium-font-size)] tracking-[var(--text-single-200-medium-letter-spacing)] leading-[var(--text-single-200-medium-line-height)] [font-style:var(--text-single-200-medium-font-style)]">
                      {item.label}
                    </span>
                  </div>
                  {item.hasChevron && (
                    <ChevronRightIcon className="w-3 h-3 text-neutral-colors400 transition-transform duration-200 group-hover/bottom-nav:translate-x-1" />
                  )}
                </div>
              </Button>
            );
          })}
        </div>

        <div className="flex items-center justify-between w-full px-[5px] p-2 -m-2 rounded-lg transition-colors duration-200 hover:bg-neutral-colors700/20 cursor-pointer group/profile">
          <div className="flex items-center gap-2.5">
            <Avatar className="w-8 h-8 transition-transform duration-200 group-hover/profile:scale-110">
              <AvatarImage src="/group-39488.png" alt="John Carter" />
              <AvatarFallback>JC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-text-single-200-medium text-neutral-colors100 text-[length:var(--text-single-200-medium-font-size)] leading-[var(--text-single-200-medium-line-height)] font-[number:var(--text-single-200-medium-font-weight)] tracking-[var(--text-single-200-medium-letter-spacing)] [font-style:var(--text-single-200-medium-font-style)] transition-colors duration-150 group-hover/profile:text-primary-colorscolor-1">
                John Carter
              </span>
              <span className="font-text-single-100-medium text-neutral-colors400 text-[length:var(--text-single-100-medium-font-size)] leading-[var(--text-single-100-medium-line-height)] font-[number:var(--text-single-100-medium-font-weight)] tracking-[var(--text-single-100-medium-letter-spacing)] [font-style:var(--text-single-100-medium-font-style)] transition-colors duration-150 group-hover/profile:text-neutral-colors300">
                Account settings
              </span>
            </div>
          </div>
          <ChevronRightIcon className="w-3 h-3 text-neutral-colors400 transition-transform duration-200 group-hover/profile:translate-x-1" />
        </div>
      </div>
    </aside>
  );
};
