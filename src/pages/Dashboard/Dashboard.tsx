import { ChevronDownIcon } from "lucide-react";
import React, { JSX } from "react";
import { Button } from "../../components/ui/button";
import { useHover } from "../../hooks/useHover";
import { cn } from "../../lib/utils";
import AnalyticsOverviewSection from "./sections/AnalyticsOverviewSection/AnalyticsOverviewSection";
import TeamProgressSection from "./sections/TeamProgressSection/TeamProgressSection";
import RevenueChartSection from "./sections/RevenueChartSection/RevenueChartSection";
import ProductsSection from "./sections/ProductsSection/ProductsSection";
import WebsiteVisitorsSection from "./sections/WebsiteVisitorsSection/WebsiteVisitorsSection";
import SidebarSection from "./sections/SidebarSection/SidebarSection";


export const Dashboard = (): JSX.Element => {
  const [headerButtonRef, isHeaderButtonHovered] = useHover<HTMLButtonElement>();

  return (
    <div className="bg-[#081028] min-h-screen w-full">
      <div className="bg-neutral-colors800 min-h-screen w-full max-w-[1440px] mx-auto relative flex">
        <SidebarSection />

        <main className="flex-1 p-2 md:p-6 lg:ml-0 transition-all duration-300 min-w-0">
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="[font-family:'Work_Sans',Helvetica] mt-2 md:mt-0 font-semibold text-white text-xl tracking-[0] leading-[22px]">
              Analytics
            </h1>

            <Button
              ref={headerButtonRef}
              variant="default"
              className={cn(
                "bg-primary-colorscolor-1 hover:bg-primary-colorscolor-1/90 text-neutral-colors100 h-auto px-4 py-2 rounded gap-1.5",
                "transition-all duration-200 transform-gpu",
                isHeaderButtonHovered && "scale-105 shadow-lg"
              )}
            >
              <span className="font-text-single-100-medium font-[number:var(--text-single-100-medium-font-weight)] text-[length:var(--text-single-100-medium-font-size)] tracking-[var(--text-single-100-medium-letter-spacing)] leading-[var(--text-single-100-medium-line-height)] [font-style:var(--text-single-100-medium-font-style)]">
                May 2023
              </span>
              <ChevronDownIcon
                className={cn(
                  "w-3 h-3 transition-transform duration-200",
                  isHeaderButtonHovered && "rotate-180"
                )}
              />
            </Button>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-6">
            <div className="lg:col-span-4 w-full order-1 lg:order-1">
              <AnalyticsOverviewSection />
            </div>
            <div className="lg:col-span-8 order-2 lg:order-2">
              <TeamProgressSection />
            </div>
            <div className="lg:col-span-4 order-3 lg:order-3">
              <RevenueChartSection />
            </div>
            <div className="lg:col-span-4 order-4 lg:order-4">
              <ProductsSection />
            </div>
            <div className="lg:col-span-4 order-5 lg:order-5">
              <WebsiteVisitorsSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};