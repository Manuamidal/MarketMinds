import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"


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
import { useEffect, useRef, useState } from "react"
import { News } from "./news"
const chartData = [
    { month: "January", price: 0 },
]

const chartConfig = {
    desktop: {
        label: "price",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function LineChartR() {
    const [data, setData] = useState(chartData);
    const wsref = useRef<WebSocket | null>(null);
    useEffect(() => {
        setTimeout(() => {
            const ws = new WebSocket(`ws://localhost:3001`);
            wsref.current = ws;
            ws.onopen = () => {
                console.log("open");
            }
            ws.onmessage = (event) => {
                const res = JSON.parse(event.data);
                console.log(res, event.data);
                setData([...data, res]);
                ws.send("recived");
            };
        }, 300)
    });
    return (
        <Card className="flex flex-row">
            <Card className="w-200 float-left">
                <CardHeader>
                    <CardTitle>Line Chart - Linear</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            accessibilityLayer
                            data={data}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
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
                                dataKey="price"
                                type="linear"
                                stroke="var(--color-desktop)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Showing total visitors for the last 6 months
                    </div>
                </CardFooter>
            </Card>
            <News className="ml-4 float-right" />
        </Card>
    )
}
