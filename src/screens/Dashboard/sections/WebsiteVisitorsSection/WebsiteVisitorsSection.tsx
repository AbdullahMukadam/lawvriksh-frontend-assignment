import React from "react";
import { AnimatedCard } from "../../../../components/ui/animated-card";
import { CardContent } from "../../../../components/ui/card";

export const WebsiteVisitorsSection = (): JSX.Element => {
  const legendItems = [
    {
      color: "bg-primary-colorscolor-1",
      label: "Sell",
    },
    {
      color: "bg-[#0038ff]",
      label: "Distribute",
    },
    {
      color: "bg-secondary-colorscolor-3",
      label: "Return",
    },
  ];

  return (
    <AnimatedCard 
      className="w-full h-auto bg-secondary-colorscolor-1 rounded-xl border-[0.6px] border-solid border-[#0b1739] shadow-general-shadow-01 hover:border-secondary-colorscolor-3/30"
      delay={400}
    >
      <CardContent className="p-0 relative">
        <div className="pt-[30px] pl-[31px] pb-6">
          <h3 className="[font-family:'Work_Sans',Helvetica] font-medium text-neutral-colors100 text-base tracking-[0] leading-[18px] whitespace-nowrap mb-6">
            Website Visitors
          </h3>

          <div className="flex justify-center mb-8">
            <div className="relative w-[220px] h-[220px] group">
              <div className="absolute w-[220px] h-[220px] top-0 left-0">
                <div className="relative h-[110px] transition-transform duration-300 group-hover:scale-105">
                  <img
                    className="absolute w-[110px] h-[110px] top-0 left-[110px]"
                    alt="Ellipse"
                    src="/ellipse-796-3.svg"
                  />
                  <img
                    className="absolute w-[82px] h-[87px] top-1 left-[136px]"
                    alt="Ellipse"
                    src="/ellipse-798.svg"
                  />
                  <img
                    className="absolute w-[69px] h-14 top-1 left-[136px]"
                    alt="Ellipse"
                    src="/ellipse-799.svg"
                  />
                  <img
                    className="w-[138px] h-[110px] absolute top-0 left-0"
                    alt="Ellipse"
                    src="/ellipse-800-1.svg"
                  />
                </div>
              </div>

              <div className="absolute w-[77px] h-[60px] top-[49px] left-[71px]">
                <div className="inline-flex flex-col items-center justify-center gap-[3px] relative transition-transform duration-200 group-hover:scale-110">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-semibold text-[31.6px] leading-[43.8px] text-neutral-colors100 tracking-[0] whitespace-nowrap">
                    80%
                  </div>
                  <div className="relative w-fit [font-family:'Work_Sans',Helvetica] font-normal text-neutral-colors500 text-[12.3px] tracking-[0] leading-[12.3px] whitespace-nowrap">
                    Transactions
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[245px] h-4 items-start gap-[30px] pl-[18px]">
            {legendItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 relative flex-[0_0_auto] p-1 -m-1 rounded transition-colors duration-150 hover:bg-neutral-colors700/20 cursor-pointer group/legend"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div
                  className={`relative w-[7px] h-[7px] ${item.color} rounded-[80px] transition-transform duration-200 group-hover/legend:scale-125`}
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-normal text-neutral-colors400 text-sm tracking-[0] leading-4 whitespace-nowrap transition-colors duration-150 group-hover/legend:text-neutral-colors100">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </AnimatedCard>
  );
};
