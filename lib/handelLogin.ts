"use server";

import { login } from "@/libs";
import { redirect } from "next/navigation";

interface LoginData{
    email:string,
    password:string
}

export default async function check(formData:LoginData){

    await login(formData);
    redirect("/");
}