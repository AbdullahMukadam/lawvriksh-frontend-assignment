"use client"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export const AnalyticsChart = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-64 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[{ value: 70 }]}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={85}
              startAngle={230}
              endAngle={540}
              dataKey="value"
              stroke="none"
            >
              <Cell fill="#CB3CFF" />
            </Pie>

            <Pie
              data={[{ value: 50 }]}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={70}
              startAngle={300}
              endAngle={540}
              dataKey="value"
              stroke="none"
            >
              <Cell fill="#0E43FB" />
            </Pie>

            <Pie
              data={[{ value: 20 }]}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={55}
              startAngle={340}
              endAngle={540}
              dataKey="value"
              stroke="none"
            >
              <Cell fill="#00C2FF" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">150k</span>
        </div>
      </div>
    </div>
  );
};