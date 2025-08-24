import {
  ChevronLeftIcon,
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

export default function SidebarSection(){
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };


  return (
    <>
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={handleToggleCollapse}
        />
      )}

      <aside
        data-sidebar
        className={`h-screen bg-neutral-colors800 shadow-general-shadow-03 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-[70px]' : 'w-[300px] sm:w-[260px] md:w-[280px]'} ${!isCollapsed ? 'fixed top-0 z-50 md:sticky md:z-auto' : 'relative md:sticky md:top-0'}`}
      >
        <img
          className="absolute w-px h-full top-0 right-0"
          alt=""
          src="/divider.svg"
        />

        <header className="px-4 py-4">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <h1 className="font-text-single-400-bold font-[number:var(--text-single-400-bold-font-weight)] text-neutral-colors100 text-[length:var(--text-single-400-bold-font-size)] tracking-[var(--text-single-400-bold-letter-spacing)] leading-[var(--text-single-400-bold-line-height)] [font-style:var(--text-single-400-bold-font-style)]">
                Dashdark X
              </h1>
            )}
            <div className="flex items-center gap-2">
              <div className="flex" onClick={handleToggleCollapse}>
                <button className="p-1" type="button">
                  <ChevronLeftIcon className="w-3 h-3 text-neutral-colors400" />
                </button>
                <button className="p-1" type="button">
                  <ChevronRightIcon className="w-3 h-3 text-neutral-colors400" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {!isCollapsed && (
          <div className="px-7 mt-6 mb-[72px]">
            <div className="relative text-[#343B4F]">
              <SearchIcon color="gray" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-200" />
              <Input
                placeholder="Search for..."
                className="w-full h-[42px] bg-[#0B1739] border-[0.6px] border-solid rounded-[7px] pl-10 font-text-single-100-medium text-neutral-colors400 text-[length:var(--text-single-100-medium-font-size)] leading-[var(--text-single-100-medium-line-height)] font-[number:var(--text-single-100-medium-font-weight)] tracking-[var(--text-single-100-medium-letter-spacing)] [font-style:var(--text-single-100-medium-font-style)] shadow-[0px_2px_4px_#01051133] transition-all duration-200 border-[#343B4F] focus:border-primary-colorscolor-1/50 focus:shadow-lg"
              />
            </div>
          </div>
        )}

        <nav className="flex-1 px-7 overflow-y-auto">
          <div>
            <Button
              variant="ghost"
              className={`w-full h-[42px] ${isCollapsed ? 'justify-center' : 'justify-start'} px-0 rounded-[7px] bg-neutral-colors800 text-[#CB3CFF] hover:text-neutral-colors100 hover:bg-neutral-colors700/30 transition-all duration-200 group/bottom-nav`}
              title={isCollapsed ? "Dashboard" : undefined}
            >
              {isCollapsed ? (
                <HomeIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover/nav:scale-110" />
              ) : (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-center gap-1">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.0683594 6.33355C0.0683594 5.91283 0.249846 5.51216 0.567115 5.23244L6.07891 0.372996C6.643 -0.124332 7.49372 -0.124332 8.05781 0.372995L13.5696 5.23244C13.8869 5.51216 14.0684 5.91283 14.0684 6.33355V12.5259C14.0684 13.34 13.4021 14 12.5802 14H1.55656C0.73465 14 0.0683594 13.34 0.0683594 12.5259V6.33355Z" fill="#CB3CFF" />
                    </svg>

                    <span className="font-text-single-200-medium translate-y-[2px] font-[number:var(--text-single-200-medium-font-weight)] text-base tracking-[var(--text-single-200-medium-letter-spacing)] leading-[var(--text-single-200-medium-line-height)] [font-style:var(--text-single-200-medium-font-style)]">
                      Dashboard
                    </span>
                  </div>

                </div>
              )}
            </Button>
          </div>
        </nav>

        <div className="mt-auto px-7 pb-8 space-y-4">
          <nav className="space-y-1">
            <Button
              variant="ghost"
              className={`w-full h-[42px] ${isCollapsed ? 'justify-center' : 'justify-start'} px-0 rounded-[7px] bg-neutral-colors800 text-neutral-colors400 hover:text-neutral-colors100 hover:bg-neutral-colors700/30 transition-all duration-200 group/bottom-nav`}
              title={isCollapsed ? "Settings" : undefined}
            >
              {isCollapsed ? (
                <SettingsIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover/bottom-nav:scale-110" />
              ) : (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1">
                    <SettingsIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover/bottom-nav:scale-110" />
                    <span className="font-text-single-200-medium font-[number:var(--text-single-200-medium-font-weight)] text-[length:var(--text-single-200-medium-font-size)] tracking-[var(--text-single-200-medium-letter-spacing)] leading-[var(--text-single-200-medium-line-height)] [font-style:var(--text-single-200-medium-font-style)]">
                      Settings
                    </span>
                  </div>
                  <ChevronRightIcon className="w-3 h-3 text-neutral-colors400 transition-transform duration-200 group-hover/bottom-nav:translate-x-1" />
                </div>
              )}
            </Button>

            <Button
              variant="ghost"
              className={`w-full h-[42px] ${isCollapsed ? 'justify-center' : 'justify-start'} px-0 rounded-[7px] bg-neutral-colors800 text-neutral-colors400 hover:text-neutral-colors100 hover:bg-neutral-colors700/30 transition-all duration-200 group/bottom-nav`}
              title={isCollapsed ? "Template pages" : undefined}
            >
              {isCollapsed ? (
                <GlobeIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover/bottom-nav:scale-110" />
              ) : (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1">
                    <GlobeIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover/bottom-nav:scale-110" />
                    <span className="font-text-single-200-medium font-[number:var(--text-single-200-medium-font-weight)] text-[length:var(--text-single-200-medium-font-size)] tracking-[var(--text-single-200-medium-letter-spacing)] leading-[var(--text-single-200-medium-line-height)] [font-style:var(--text-single-200-medium-font-style)]">
                      Template pages
                    </span>
                  </div>
                  <ChevronRightIcon className="w-3 h-3 text-neutral-colors400 transition-transform duration-200 group-hover/bottom-nav:translate-x-1" />
                </div>
              )}
            </Button>
          </nav>

          <button
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} w-full -m-2 rounded-lg transition-colors duration-200 hover:bg-neutral-colors700/20 cursor-pointer group/profile`}
            type="button"
            title={isCollapsed ? "John Carter - Account settings" : undefined}
          >
            {isCollapsed ? (
              <Avatar className="w-8 h-8 ml-4 transition-transform duration-200 group-hover/profile:scale-110">
                <AvatarImage src="/group-39488.png" alt="John Carter" />
                <AvatarFallback>JC</AvatarFallback>
              </Avatar>
            ) : (
              <>
                <div className="flex items-center gap-2.5">
                  <img className="w-10 h-10 rounded-full" src="/Group 39488.png" alt="" />
                  <div className="flex flex-col text-left gap-1">
                    <span className="font-text-single-200-medium text-neutral-colors100 text-[length:var(--text-single-200-medium-font-size)] leading-[var(--text-single-200-medium-line-height)] font-[number:var(--text-single-200-medium-font-weight)] tracking-[var(--text-single-200-medium-letter-spacing)] [font-style:var(--text-single-200-medium-font-style)] transition-colors duration-150 group-hover/profile:text-primary-colorscolor-1">
                      John Carter
                    </span>
                    <span className="font-text-single-100-medium text-neutral-colors400 text-[length:var(--text-single-100-medium-font-size)] leading-[var(--text-single-100-medium-line-height)] font-[number:var(--text-single-100-medium-font-weight)] tracking-[var(--text-single-100-medium-letter-spacing)] [font-style:var(--text-single-100-medium-font-style)] transition-colors duration-150 group-hover/profile:text-neutral-colors300">
                      Account settings
                    </span>
                  </div>
                </div>
                <ChevronRightIcon className="w-5 h-4 text-neutral-colors400 transition-transform duration-200 group-hover/bottom-nav:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};