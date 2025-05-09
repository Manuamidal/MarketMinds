"use client";

import { Button } from "@/components/ui/button";
import { LineChartR } from "@/components/ui/linechart";
import {  useState } from "react";
import { ResponsiveContainer } from "recharts";


export default function Home() {

  const [render,setRender]=useState(false);
  return (
    <>
    {!render?
    <Button onClick={()=>{setRender(!render)}} className=" text-xl">Start</Button>
    :
    <>
    <ResponsiveContainer>
      <LineChartR/>
    </ResponsiveContainer>
    </>
    }
    </>
  );
}
