import React from "react";
import { AnimatedCard } from "../../../../components/ui/animated-card";
import { Button } from "../../../../components/ui/button";
import { CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { useHover } from "../../../../hooks/useHover";

export const AnalyticsOverviewSection = (): JSX.Element => {
  const [buttonRef, isButtonHovered] = useHover<HTMLButtonElement>();

  const legendData = [
    {
      label: "Organic",
      percentage: "30%",
      color: "bg-primary-colorscolor-1",
    },
    {
      label: "Social",
      percentage: "50%",
      color: "bg-[#0e43fb]",
    },
    {
      label: "Direct",
      percentage: "20%",
      color: "bg-secondary-colorscolor-3",
    },
  ];

  return (
    <div className="w-full relative">
      <AnimatedCard 
        className="w-full bg-secondary-colorscolor-1 border-[0.6px] border-[#0b1739] shadow-general-shadow-01 hover:border-primary-colorscolor-1/30"
        delay={100}
      >
        <CardContent className="p-8">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="[font-family:'Work_Sans',Helvetica] font-medium text-neutral-colors100 text-base tracking-[0] leading-[18px]">
                Website Visitors
              </h3>

              <Button
                ref={buttonRef}
                variant="secondary"
                size="sm"
                className={
                  "h-auto bg-neutral-colors700 hover:bg-neutral-colors600 px-2 py-2 gap-1.5"
                }
              >
                <span className="font-text-single-100-medium font-[number:var(--text-single-100-medium-font-weight)] text-neutral-colors100 text-[length:var(--text-single-100-medium-font-size)] tracking-[var(--text-single-100-medium-letter-spacing)] leading-[var(--text-single-100-medium-line-height)] [font-style:var(--text-single-100-medium-font-style)]">
                  Export
                </span>
                <img
                  className="w-2.5 h-[11.2px]"
                  alt="Custome icon export"
                  src="/custome-icon-export-icon.svg"
                />
              </Button>
            </div>

            {/* Chart Container */}
            <div className="flex justify-center group">
              <div className="relative w-[209px] h-[209px]">
                <div className="absolute w-[209px] h-[209px] top-0 left-0 bg-[url(/ellipse-796.svg)] bg-[100%_100%] transition-transform duration-300 group-hover:scale-105">
                  <img
                    className="absolute w-[209px] h-[209px] top-0 left-0"
                    alt="Ellipse"
                    src="/ellipse-800-3.svg"
                  />
                </div>

                <div className="absolute w-[188px] h-[188px] top-2.5 left-2.5 bg-[url(/ellipse-796.svg)] bg-[100%_100%]">
                  <img
                    className="w-[188px] h-40 absolute top-0 left-0"
                    alt="Ellipse"
                    src="/ellipse-800-2.svg"
                  />
                </div>

                <div className="absolute w-[165px] h-[165px] top-[22px] left-[22px] bg-[url(/ellipse-796.svg)] bg-[100%_100%]">
                  <img
                    className="w-[165px] h-[82px] absolute top-0 left-0"
                    alt="Ellipse"
                    src="/ellipse-800.svg"
                  />
                </div>

                <div className="absolute w-[65px] h-8 top-[89px] left-[73px]">
                  <div className="absolute top-0 left-0 [font-family:'Work_Sans',Helvetica] font-semibold text-neutral-colors100 text-[28px] text-center tracking-[0] leading-8 whitespace-nowrap">
                    150k
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-3.5 space-y-1">
              {legendData.map((item, index) => (
                <React.Fragment key={item.label}>
                  <div 
                    className="flex items-center justify-between p-2 -mx-2 rounded-md transition-colors duration-150 hover:bg-neutral-colors700/30 cursor-pointer group/item"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-[7px] h-[7px] ${item.color} rounded-[80px] transition-transform duration-200 group-hover/item:scale-125`}
                      />
                      <span className="[font-family:'Work_Sans',Helvetica] font-normal text-neutral-colors400 text-sm tracking-[0] leading-4 transition-colors duration-150 group-hover/item:text-neutral-colors100">
                        {item.label}
                      </span>
                    </div>
                    <span className="[font-family:'Work_Sans',Helvetica] font-medium text-sm text-right leading-[14px] text-neutral-colors100 tracking-[0] transition-transform duration-150 group-hover/item:scale-110">
                      {item.percentage}
                    </span>
                  </div>
                  {index < legendData.length - 1 && (
                    <Separator className="bg-[url(/vector-737.svg)] bg-no-repeat bg-center h-px border-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </CardContent>
      </AnimatedCard>
    </div>
  );
};
