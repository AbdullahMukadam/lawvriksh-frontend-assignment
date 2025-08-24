import React from "react";
import { AnimatedCard } from "../../../../components/ui/animated-card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { CardContent } from "../../../../components/ui/card";
import { ProgressBar } from "../../../../components/ui/progress-bar";

const teamMembers = [
  {
    name: "John Carter",
    email: "contact@sophiemoore.com",
    progress: "60%",
    avatar: "/group-1000004603-1.png",
  },
  {
    name: "Sophie Moore",
    email: "contact@sophiemoore.com",
    progress: "33%",
    avatar: "/group-1000004603.png",
  },
  {
    name: "Matt Cannon",
    email: "info@mattcannon.com",
    progress: "75%",
    avatar: "/group-1000004602.png",
  },
];

export const ProductsSection = (): JSX.Element => {
  return (
    <div className="w-full relative">
      <AnimatedCard 
        className="w-full max-w-[318px] h-auto bg-secondary-colorscolor-1 rounded-xl shadow-general-shadow-01 border-0 hover:border hover:border-primary-colorscolor-1/20"
        delay={300}
      >
        <CardContent className="p-0 relative h-full">
          <div className="p-8">
            <div className="[font-family:'Work_Sans',Helvetica] font-medium text-neutral-colors100 text-base tracking-[0] leading-[18px] whitespace-nowrap mb-8">
            Team progress
          </div>

            <div className="flex flex-col gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group/member p-3 -mx-3 rounded-lg transition-all duration-200 hover:bg-neutral-colors700/20 cursor-pointer"
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                  <div className="relative">
                      <Avatar className="w-8 h-8 transition-transform duration-200 group-hover/member:scale-110">
                      <AvatarImage
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                        <AvatarFallback className="w-8 h-8 text-xs">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                      <div className="absolute -inset-px rounded-[800px] border-[1.4px] border-solid border-[#0b1739] transition-colors duration-200 group-hover/member:border-primary-colorscolor-1/30" />
                  </div>

                  <div className="flex flex-col">
                    <div
                        className={`font-medium text-neutral-colors100 text-sm leading-[14px] tracking-[0] whitespace-nowrap transition-colors duration-150 group-hover/member:text-primary-colorscolor-1 ${index === 0 ? "[font-family:'Work_Sans',Helvetica]" : "font-paragraph-small font-[number:var(--paragraph-small-font-weight)]"}`}
                    >
                      {member.name}
                    </div>
                      <div className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-neutral-colors400 text-xs tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)] transition-colors duration-150 group-hover/member:text-neutral-colors300">
                      {member.email}
                    </div>
                  </div>
                </div>

                  <div className="font-text-single-100-medium font-[number:var(--text-single-100-medium-font-weight)] text-sm text-right leading-[var(--text-single-100-medium-line-height)] text-neutral-colors100 tracking-[var(--text-single-100-medium-letter-spacing)] whitespace-nowrap [font-style:var(--text-single-100-medium-font-style)] transition-transform duration-150 group-hover/member:scale-110">
                  {member.progress}
                </div>
                </div>
                
                <ProgressBar 
                  value={parseInt(member.progress)} 
                  className="opacity-0 group-hover/member:opacity-100 transition-opacity duration-300"
                  color={index === 0 ? 'success' : index === 1 ? 'secondary' : 'primary'}
                />
              </div>
            ))}
          </div>
          </div>
        </CardContent>
      </AnimatedCard>
    </div>
  );
};
