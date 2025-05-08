'use client';
import { useState } from "react";
import { Link, Tags } from "lucide-react";  
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import  Signup
from "@/components/Signup";
import Login from "@/components/login";

export default function LogSign() {
    return(
      <>
      <br></br><br></br>
      <Tabs defaultValue="Login" className="w-[500px] mx-auto   margin:0 padding: 2em "> 
      <TabsList className="grid w-full grid-cols-2 justify-center text-center flex allign-center margin-bottom mb-[--180px]">  
        <TabsTrigger value="Login">
          Login</TabsTrigger>
        <TabsTrigger value="Signup">Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
        <div>
        <Login />
        </div>
      </TabsContent>
      <TabsContent value="Signup">
        <Signup />
      </TabsContent>
    </Tabs>
    </>
    );
  }