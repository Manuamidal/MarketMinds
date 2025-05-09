import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./table";

export interface StockData {
  Date: string;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  AdjClose: number;
  Volume: string;
}[];
export interface StockData1 {
  Date: string;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  AdjClose: number;
  Volume: string;
};
export function News({ className, ...props }: React.ComponentProps<"div"> & { data: StockData }) {
  return (
    <Card className={cn("w-130", className)}>
      <CardHeader>
        <CardTitle className="text-2xl">News</CardTitle>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Open</TableHead>
                <TableHead>High</TableHead>
                <TableHead>Low</TableHead>
                <TableHead>Close</TableHead>
                <TableHead>Adj Close</TableHead>
                <TableHead>Volume</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.data.map((stock:StockData1, index:number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{stock.Date}</TableCell>
                  <TableCell>{stock.Open}</TableCell>
                  <TableCell>{stock.High}</TableCell>
                  <TableCell>{stock.Low}</TableCell>
                  <TableCell>{stock.Close}</TableCell>
                  <TableCell>{stock.AdjClose}</TableCell>
                  <TableCell>{stock.Volume}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </CardHeader>
    </Card>
  );
}