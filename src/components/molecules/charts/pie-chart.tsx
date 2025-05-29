"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart as PieChart_ } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "usual", services: 60, fill: "var(--color-chrome)" },
  { browser: "warning", services: 10, fill: "var(--color-edge)" },
  { browser: "critical", services: 1, fill: "var(--color-other)" },
]

const chartConfig = {
  services: {
    label: "Services",
  },
  chrome: {
    label: "usual",
    color: "#28a745",
  },
  edge: {
    label: "warning",
    color: "#ffc107",
  },
  other: {
    label: "critical",
    color: "#ff0000",
  }
} satisfies ChartConfig

export function PieChart() {
  const totalServices = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.services, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Services Statuses</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full"
        >
          <PieChart_>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="services"
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
                          {totalServices.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          services
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart_>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total services for today
        </div>
      </CardFooter>
    </Card>
  )
}
