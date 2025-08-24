
import { AnimatedCard } from "../../../../components/ui/animated-card";
import { CardContent } from "../../../../components/ui/card";
import { ElipseChart } from "../../../../components/recharts/elipse-chart";

export default function WebsiteVisitorsSection(){
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
      className="w-full min-h-[350px] bg-secondary-colorscolor-1 rounded-xl border-[0.6px] border-solid border-[#0b1739] shadow-general-shadow-01 hover:border-secondary-colorscolor-3/30"
      delay={400}
    >
      <CardContent className="flex flex-col h-full p-6">
        <h3 className="[font-family:'Work_Sans',Helvetica] font-medium text-neutral-colors100 text-base tracking-[0] leading-[18px]">
          Website Visitors
        </h3>


        <div className="flex-1 flex items-center justify-center my-4">
          <div className="group transition-transform duration-300 hover:scale-105">
            <div className="w-full h-[180px]">
              <ElipseChart />
            </div>
          </div>
        </div>


        <div className="flex w-full justify-center items-center gap-8">
          {legendItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 rounded cursor-pointer group/legend"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <div
                className={`w-2 h-2 ${item.color} rounded-full transition-transform duration-200 group-hover/legend:scale-125`}
              />
              <div className="[font-family:'Work_Sans',Helvetica] font-normal text-neutral-colors400 text-sm tracking-[0] leading-4 whitespace-nowrap transition-colors duration-150 group-hover/legend:text-neutral-colors100">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </AnimatedCard>
  );
};