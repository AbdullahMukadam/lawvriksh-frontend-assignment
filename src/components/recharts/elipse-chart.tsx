"use client"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export const ElipseChart = () => {


  return (
    <div className="flex items-center">
      <div className="relative w-64 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[{ value: 70 }, {value : 30}, {value: 20}, {value: 10}]}
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={100}
              startAngle={180}
              endAngle={0}
              dataKey="value"
              stroke='none'
            >
              <Cell fill="#CB3CFF" />
              <Cell fill="#0038FF" />
              <Cell fill="#00C2FF" />
              <Cell fill="#9A91FB" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        

        <div className="absolute inset-0 flex items-center flex-col justify-center">
          <span className="text-white text-2xl font-bold">80%</span>
          <span className='text-gray-600'>Transactions</span>
        </div>
      </div>
    </div>
  );
};