"use client";

import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";



const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={className}>{children}</div>
);

const Button = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <button className={className}>{children}</button>
);

const Badge = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <span className={className}>{children}</span>
);

const AnimatedCard = ({ className, children }: { className?: string; children: React.ReactNode; delay: number }) => (
  <div className={className}>{children}</div>
);


const chartData = [
  { month: "Jan", clients: 25 },
  { month: "Feb", clients: 39 },
  { month: "Mar", clients: 48 },
  { month: "Apr", clients: 54 },
  { month: "May", clients: 39 },
  { month: "Jun", clients: 64 },
  { month: "Jul", clients: 22 },
  { month: "Aug", clients: 56 },
  { month: "Sep", clients: 31 },
  { month: "Oct", clients: 9 },
  { month: "Nov", clients: 47 },
  { month: "Dec", clients: 39 },
];

const legendItems = [
  { key: "clients", label: "Current clients", color: "#CB3CFF" },
  { key: "subscribers", label: "Subscribers", color: "#0E43FB" },
  { key: "new", label: "New customers", color: "#00C2FF" },
];


export default function TeamProgressSection() {
  return (
    <section className="w-full">
      <AnimatedCard
        className="w-full h-auto bg-[#0B1739] rounded-xl border-[0.6px] border-solid border-[#0b1739] shadow-lg hover:border-purple-500/20"
        delay={0}
      >
        <CardContent className="p-6">
          <header className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:items-center mb-8">
            <div>
              <h2 className="text-base text-slate-400 font-medium">
                Revenue by customer type
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-2xl font-bold text-slate-100">$240.8K</p>
                <Badge className="inline-flex items-center rounded-md border border-green-400/20 bg-green-500/10 px-2 py-0.5 text-sm font-medium text-green-400">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                  </svg>
                  14.8%
                </Badge>
              </div>
            </div>

            <div className="flex w-full flex-wrap items-end justify-start gap-x-4 gap-y-2 lg:w-auto lg:justify-end">
              <div className="flex items-center gap-4">
                {legendItems.map((item) => (
                  <div key={item.key} className="flex cursor-pointer items-center gap-2 group/chart-legend">
                    <div
                      className="h-2 w-2 rounded-full transition-transform group-hover/chart-legend:scale-125"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-slate-400 transition-colors group-hover/chart-legend:text-slate-100">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="inline-flex items-end justify-center translate-y-1 rounded-md border border-slate-600 bg-[#0A1330] px-3 py-1.5 text-xs text-slate-300 shadow-md hover:bg-slate-600">
                <CalendarIcon className="w-3 h-3 mr-2" />
                Jan 2024 - Dec 2024
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </header>

          <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer>
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                barGap={8}
                barCategoryGap="35%"
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#374151"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                  tickFormatter={(value) => `${value}K`}
                  domain={[0, 100]}
                />
                <Bar dataKey="clients" stackId="a" fill="#CB3CFF" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </AnimatedCard>
    </section>
  );
};
