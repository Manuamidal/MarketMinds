"use client"
import Scenario from "@/components/scenario";
import { useState } from "react";

let Data=[{
    name:"kshithij",
    id:1
},
{
    name:"purvagan",
    id:2
}]


export default function Page(){
    let [quesNo,setQuesNo]=useState(0);
    return(
        <div>
        <Scenario name={Data[quesNo].name} id={Data[quesNo].id} />
        <button onClick={()=>{setQuesNo(quesNo+1)}}>
            click
        </button>
        </div>
    )
}