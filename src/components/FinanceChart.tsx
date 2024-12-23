"use client";
import Image from "next/image";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: "June",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: "July",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: "Aug",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: "Sep",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: "Oct",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: "Nov",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: "Dec",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full">
      {/**TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/**CHART */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#DDD" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#D1D5DB" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#D1D5DB" }} tickLine={false} tickMargin={20} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
