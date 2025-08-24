import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { AnimatedCard } from "../../../../components/ui/animated-card";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { CardContent } from "../../../../components/ui/card";
import { useHover } from "../../../../hooks/useHover";

export const TeamProgressSection = (): JSX.Element => {
  const [dateButtonRef, isDateButtonHovered] = useHover<HTMLButtonElement>();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const yAxisLabels = [
    { value: "100K", top: "top-[115px]" },
    { value: "80K", top: "top-[184px]" },
    { value: "40K", top: "top-[254px]" },
    { value: "20K", top: "top-[322px]" },
    { value: "0K", top: "top-[391px]" },
  ];

  const horizontalLines = [
    { top: "top-0" },
    { top: "top-[69px]" },
    { top: "top-[138px]" },
    { top: "top-[207px]" },
    { top: "top-[276px]" },
  ];

  const verticalLines = [
    { left: "left-[22px]", top: "top-0.5" },
    { left: "left-[70px]", top: "top-0" },
    { left: "left-[119px]", top: "top-0" },
    { left: "left-[168px]", top: "top-0" },
    { left: "left-[218px]", top: "top-0" },
    { left: "left-[267px]", top: "top-0.5" },
    { left: "left-[312px]", top: "top-0.5" },
    { left: "left-[359px]", top: "top-0" },
    { left: "left-[408px]", top: "top-0" },
    { left: "left-[457px]", top: "top-0" },
    { left: "left-[506px]", top: "top-0" },
    { left: "left-[556px]", top: "top-0" },
  ];

  const legendItems = [
    { color: "bg-primary-colorscolor-1", label: "Current clients" },
    { color: "bg-[#0e43fb]", label: "Subscribers" },
    { color: "bg-secondary-colorscolor-3", label: "New customers" },
  ];

  const chartBars = [
    {
      left: "left-[89px]",
      bars: [
        {
          height: "h-[69px]",
          top: "top-[332px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-[38px]", top: "top-[314px]", color: "bg-[#cb3cff]" },
        { height: "h-[42px]", top: "top-[272px]", color: "bg-[#cb3cff]" },
      ],
    },
    {
      left: "left-[139px]",
      bars: [
        {
          height: "h-[107px]",
          top: "top-[294px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-[27px]", top: "top-[268px]", color: "bg-[#cb3cff]" },
        { height: "h-[62px]", top: "top-[205px]", color: "bg-[#cb3cff]" },
      ],
    },
    {
      left: "left-[186px]",
      bars: [
        {
          height: "h-[133px]",
          top: "top-[268px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-[62px]", top: "top-[205px]", color: "bg-[#cb3cff]" },
      ],
    },
    {
      left: "left-[236px]",
      bars: [
        {
          height: "h-[150px]",
          top: "top-[251px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-5", top: "top-[251px]", color: "bg-[#cb3cff]" },
      ],
    },
    {
      left: "left-[285px]",
      bars: [
        {
          height: "h-[107px]",
          top: "top-[294px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-[54px]", top: "top-[294px]", color: "bg-[#cb3cff]" },
        { height: "h-[21px]", top: "top-[294px]", color: "bg-[#cb3cff]" },
      ],
    },
    {
      left: "left-[334px]",
      bars: [
        {
          height: "h-44",
          top: "top-[225px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-[83px]", top: "top-[228px]", color: "bg-[#cb3cff]" },
      ],
    },
    {
      left: "left-[380px]",
      bars: [
        {
          height: "h-[60px]",
          top: "top-[341px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-[23px]", top: "top-[341px]", color: "bg-[#cb3cff]" },
      ],
    },
    {
      left: "left-[426px]",
      bars: [
        {
          height: "h-[154px]",
          top: "top-[247px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-3.5", top: "top-[247px]", color: "bg-[#cb3cff]" },
      ],
    },
    {
      left: "left-[476px]",
      bars: [
        {
          height: "h-[86px]",
          top: "top-[315px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-[39px]", top: "top-[315px]", color: "bg-[#cb3cff]" },
      ],
    },
    {
      left: "left-[525px]",
      bars: [
        {
          height: "h-[26px]",
          top: "top-[375px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-[58px]", top: "top-[324px]", color: "bg-[#cb3cff]" },
      ],
    },
    {
      left: "left-[574px]",
      bars: [
        {
          height: "h-[130px]",
          top: "top-[271px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-[79px]", top: "top-[268px]", color: "bg-[#cb3cff]" },
      ],
    },
    {
      left: "left-[624px]",
      bars: [
        {
          height: "h-[107px]",
          top: "top-[294px]",
          color: "bg-primary-colorscolor-1",
        },
        { height: "h-[17px]", top: "top-[294px]", color: "bg-[#cb3cff]" },
      ],
    },
  ];

  return (
    <section className="w-full">
      <AnimatedCard 
        className="w-full h-auto bg-secondary-colorscolor-1 rounded-xl border-[0.6px] border-solid border-[#0b1739] shadow-general-shadow-01 hover:border-primary-colorscolor-1/20"
        delay={0}>
        <CardContent className="relative p-0 w-full h-[463px]">
          <header className="absolute w-[623px] h-14 top-[30px] left-7">
            <div className="absolute w-[175px] h-14 top-0 left-0">
              <div className="relative w-[177px] h-14">
                <h2 className="absolute top-0 left-0 font-text-single-200-medium font-[number:var(--text-single-200-medium-font-weight)] text-neutral-colors400 text-[length:var(--text-single-200-medium-font-size)] tracking-[var(--text-single-200-medium-letter-spacing)] leading-[var(--text-single-200-medium-line-height)] whitespace-nowrap [font-style:var(--text-single-200-medium-font-style)]">
                  Revenue by customer type
                </h2>

                <div className="inline-flex items-center gap-1.5 absolute top-6 left-0">
                  <div className="relative w-fit mt-[-1.00px] font-special-headings-display-4 font-[number:var(--special-headings-display-4-font-weight)] text-neutral-colors100 text-[length:var(--special-headings-display-4-font-size)] tracking-[var(--special-headings-display-4-letter-spacing)] leading-[var(--special-headings-display-4-line-height)] whitespace-nowrap [font-style:var(--special-headings-display-4-font-style)]">
                    $240.8K
                  </div>

                  <Badge className="inline-flex flex-col items-start gap-2.5 px-1 py-0.5 bg-othergreen-50 rounded-sm border-[0.6px] border-solid border-[#05c16833] h-auto">
                    <div className="relative w-[38px] h-3.5">
                      <div className="inline-flex items-center gap-0.5 relative">
                        <span className="relative w-fit mt-[-1.00px] font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-system-colorsgreen-300 text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)]">
                          14.8%
                        </span>

                        <img
                          className="relative w-2 h-2"
                          alt="Line rounded arrow"
                          src="/line-rounded-arrow-external-right.svg"
                        />
                      </div>
                    </div>
                  </Badge>
                </div>
              </div>
            </div>

            <div className="absolute w-[431px] h-[30px] top-[26px] left-[193px]">
              <Button className="inline-flex flex-col items-start gap-2.5 p-[9px] absolute top-0 left-[280px] bg-neutral-colors700 rounded border-[0.6px] border-solid border-[#0b1739] shadow-general-shadow-01 h-auto">
                
            
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <CalendarIcon className="relative w-2.5 h-[10.8px] mt-[-0.40px] mb-[-0.40px]" />

                    <span className="relative w-fit mt-[-1.00px] font-text-single-50-medium text-neutral-colors400 text-[length:var(--text-single-50-medium-font-size)] leading-[var(--text-single-50-medium-line-height)] font-[number:var(--text-single-50-medium-font-weight)] tracking-[var(--text-single-50-medium-letter-spacing)] whitespace-nowrap [font-style:var(--text-single-50-medium-font-style)]">
                      Jan 2024 - Dec 2024
                    </span>
                  </div>

                  <ChevronDownIcon className="relative w-3 h-3" />
                </div>
              </Button>

              <div className="inline-flex items-start gap-4 absolute top-2 left-0">
                {legendItems.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-1 relative flex-[0_0_auto] p-1 -m-1 rounded transition-colors duration-150 hover:bg-neutral-colors700/20 cursor-pointer group/chart-legend"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`relative w-[7px] h-[7px] ${item.color} rounded-[80px] transition-transform duration-200 group-hover/chart-legend:scale-125`}
                    />

                    <span className="relative w-fit mt-[-1.00px] font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-neutral-colors400 text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)] transition-colors duration-150 group-hover/chart-legend:text-neutral-colors100">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <div className="absolute w-[581px] h-[308px] top-[125px] left-[71px]">
            <div className="absolute w-[581px] h-[277px] top-0 left-0">
              {horizontalLines.map((line, index) => (
                <img
                  key={`horizontal-${index}`}
                  className={`absolute w-[581px] h-px ${line.top} left-0`}
                  alt="Vector"
                  src="/vector-741.svg"
                />
              ))}

              {verticalLines.map((line, index) => (
                <img
                  key={`vertical-${index}`}
                  className={`absolute w-px h-[275px] ${line.top} ${line.left}`}
                  alt="Vector"
                  src="/vector-754.svg"
                />
              ))}
            </div>

            <div className="flex w-[559px] items-start justify-between absolute top-[294px] left-3.5">
              {months.map((month, index) => (
                <span
                  key={index}
                  className="relative w-fit mt-[-1.00px] font-paragraph-small text-neutral-colors400 text-[length:var(--paragraph-small-font-size)] leading-[var(--paragraph-small-line-height)] font-[number:var(--paragraph-small-font-weight)] tracking-[var(--paragraph-small-letter-spacing)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)]"
                >
                  {month}
                </span>
              ))}
            </div>
          </div>

          {yAxisLabels.map((label, index) => (
            <div
              key={index}
              className={`absolute w-[35px] ${label.top} left-7 font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-neutral-colors400 text-[length:var(--paragraph-small-font-size)] text-right tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]`}
            >
              {label.value}
            </div>
          ))}

          {chartBars.map((barGroup, groupIndex) => (
            <div key={groupIndex}>
              {barGroup.bars.map((bar, barIndex) => (
                <div
                  key={`${groupIndex}-${barIndex}`}
                  className={`absolute w-[7px] ${bar.height} ${bar.top} ${barGroup.left} ${bar.color} transition-all duration-300 hover:opacity-80 cursor-pointer`}
                  style={{ 
                    animationDelay: `${groupIndex * 50}ms`,
                    transform: 'scaleY(0)',
                    animation: 'slideUp 0.6s ease-out forwards'
                  }}
                />
              ))}
            </div>
          ))}

          <img
            className="absolute w-[7px] h-11 top-[161px] left-[186px]"
            alt="Rectangle"
            src="/rectangle-5429.svg"
          />

          <img
            className="absolute w-[7px] h-[42px] top-[209px] left-[236px]"
            alt="Rectangle"
            src="/rectangle-5430.svg"
          />

          <img
            className="absolute w-[7px] h-[26px] top-[216px] left-[334px]"
            alt="Rectangle"
            src="/rectangle-5429.svg"
          />

          <img
            className="absolute w-[7px] h-[92px] top-[155px] left-[426px]"
            alt="Rectangle"
            src="/rectangle-5429.svg"
          />

          <img
            className="absolute w-[7px] h-[47px] top-[268px] left-[476px]"
            alt="Rectangle"
            src="/rectangle-5430.svg"
          />

          <img
            className="absolute w-[7px] h-[90px] top-[234px] left-[525px]"
            alt="Rectangle"
            src="/rectangle-5430.svg"
          />

          <img
            className="absolute w-[7px] h-10 top-[251px] left-[574px]"
            alt="Rectangle"
            src="/rectangle-5429.svg"
          />

          <img
            className="absolute w-[7px] h-[78px] top-[216px] left-[624px]"
            alt="Rectangle"
            src="/rectangle-5430.svg"
          />
        </CardContent>
      </AnimatedCard>
    </section>
  );
};
