import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { News } from "./news";

const chartData = [
    { desktop: "Jan 29, 2025", Open: 130 },
];

export function LineChartR() {
    const [data, setData] = useState(chartData);
    const wsref = useRef<WebSocket | null>(null);
    const messageCount = useRef(0); // Counter to track the number of messages
    const [info, setInfo] = useState<any[]>([]); // Store dynamic data for News

    useEffect(() => {
        setTimeout(() => {
            const ws = new WebSocket(`ws://localhost:3001`);
            wsref.current = ws;
            ws.onopen = () => {
                console.log("WebSocket connection opened");
            };
            ws.onmessage = (event) => {
                const res = JSON.parse(event.data);
                let data1 = { desktop: res.Date, Open: res.Close };
                setData((prevData) => [...prevData, data1]); // Update chart data
                console.log(data1);

                // Update info for News
                setInfo((prevInfo) => [
                    ...prevInfo,
                    {
                        Date: res.Date,
                        Open: res.Open,
                        High: res.High,
                        Low: res.Low,
                        Close: res.Close,
                        AdjClose: res.AdjClose,
                        Volume: res.Volume,
                    },
                ]);

                ws.send("received");

                // Increment the message counter
                messageCount.current += 1;

                // Close the WebSocket after 20 messages
                if (messageCount.current >= 20) {
                    ws.close();
                    console.log("WebSocket connection closed after 20 messages");
                }
            };
            ws.onclose = () => {
                console.log("WebSocket connection closed");
            };
        }, 5000);
    }, [wsref]);

    return (
        <Card className="flex flex-row">
            <Card className="w-200 float-left">
                <CardHeader>
                    <CardTitle>Line Chart - Linear</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <AreaChart
                        width={600}
                        height={200}
                        data={data}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis dataKey="desktop" />
                        <Area
                            dataKey="Open"
                            type="natural"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                        />
                    </AreaChart>
                </CardContent>
            </Card>
            <News className="ml-4 float-right" data={info} />
        </Card>
    );
}
