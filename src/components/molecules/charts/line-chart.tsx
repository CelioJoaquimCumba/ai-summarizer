"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart as LineChart_, XAxis } from "recharts"

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
  { hour: "0h", desktop: 50 },
  { hour: "1h", desktop: 40 },
  { hour: "2h", desktop: 35 },
  { hour: "3h", desktop: 30 },
  { hour: "4h", desktop: 28 },
  { hour: "5h", desktop: 32 },
  { hour: "6h", desktop: 80 },
  { hour: "7h", desktop: 120 },
  { hour: "8h", desktop: 170 },
  { hour: "9h", desktop: 220 },
  { hour: "10h", desktop: 270 },
  { hour: "11h", desktop: 290 },
  { hour: "12h", desktop: 305 },  // peak
  { hour: "13h", desktop: 240 },
  { hour: "14h", desktop: 230 },
  { hour: "15h", desktop: 260 },
  { hour: "16h", desktop: 280 },
  { hour: "17h", desktop: 300 },
  { hour: "18h", desktop: 237 },
  { hour: "19h", desktop: 200 },
  { hour: "20h", desktop: 160 },
  { hour: "21h", desktop: 120 },
  { hour: "22h", desktop: 90 },
  { hour: "23h", desktop: 65 },
];


const chartConfig = {
  desktop: {
    label: "Calls",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function LineChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Call trend</CardTitle>
        <CardDescription>01 April 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-40 w-full">
          <LineChart_
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart_>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 30 min
        </div>
      </CardFooter>
    </Card>
  )
}
