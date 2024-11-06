"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { browser: "HTML", progress: 95, fill: "#F95454" },
  { browser: "CSS", progress: 90, fill: "#0D92F4" },
  { browser: "tailwind", progress: 85, fill: "#E85C0D" },
  { browser: "TS", progress: 80, fill: "#4379F2" },
  { browser: "JS", progress: 75, fill: "#FCDE70" },
  { browser: "Next JS", progress: 50, fill: "black" },
];

const chartConfig = {
  progress: {
    label: "Progress",
  },
  HTML: {
    label: "HTML",
    color: "hsl(var(--chart-1))",
  },
  CSS: {
    label: "CSS",
    color: "hsl(var(--chart-2))",
  },
  tailwind: {
    label: "Tailwind",
    color: "hsl(var(--chart-3))",
  },
  TS: {
    label: "TS",
    color: "hsl(var(--chart-4))",
  },
  JS: {
    label: "JS",
    color: "hsl(var(--chart-5))",
  },
  NextJS: {
    label: "Next JS",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Piechart() {
  const totalprogress = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.progress, 0);
  }, []);

  return (
    <Card className="flex flex-col h-full w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle className="pb-1 md:pb-5 md:text-[1.5rem] text-[1rem]">My Progress</CardTitle>
        <CardDescription className="text-[0.7rem] md:text-[1rem]">September 2023 - October 2024</CardDescription>
      </CardHeader>
      <CardContent className=" pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="progress"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalprogress.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          progress
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-1 md:gap-2 text-sm pt-1 md:pt-5">
        <div className="flex items-center gap-2 md:gap-3 font-medium leading-none text-[0.7rem] md:text-[1rem]">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground text-[0.6rem] md:text-[1rem] ">
          Showing total progress for the last 12 months
        </div>
      </CardFooter>
    </Card>
  );
}
