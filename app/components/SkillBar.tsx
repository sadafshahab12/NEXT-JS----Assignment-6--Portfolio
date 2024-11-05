"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart"

export const description = "A multiple bar chart of my projects and progress"

const chartData = [
  { skills: "HTML", percentage: 95, projects: 20 },
  { skills: "CSS", percentage: 90, projects: 30 },
  { skills: "JS", percentage: 80, projects: 15},
  { skills: "TS", percentage:85, projects: 10 },
  { skills: "Next JS", percentage: 50, projects: 5 },
  { skills: "Tailwind CSS", percentage: 75, projects: 5 },
]

const chartConfig = {
  percentage: {
    label: "percentage",
    color: "hsl(var(--chart-1))",
  },
  projects: {
    label: "projects",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function SkillBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="md:pb-5 pb-2 text-center md:text-[1.5rem] text-[1rem]">My Progress and Projects</CardTitle>
        <CardDescription className="text-center text-[0.7rem] md:text-[1rem]">September 2023 - October 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="skills"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="percentage" fill="red" radius={20} />
            <Bar dataKey="projects" fill="black" radius={20} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm pt-5 ">
        <div className="flex gap-2 font-medium leading-none mx-auto text-[0.7rem] md:text-[1rem]">
          Trending up by 5.2% this skills <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground text-center text-[0.7rem] md:text-[1rem]">
          Showing total Skills for the last 12 months
        </div>
      </CardFooter>
    </Card>
  )
}
