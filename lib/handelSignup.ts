"use server";

import { login } from "@/libs";
import { redirect } from "next/navigation";

interface SignUpData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default async function add(formData: SignUpData) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000"; // Default to localhost
    const response = await fetch(`${baseUrl}/api/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
    });

    if (!response.ok) {
        throw new Error(`Failed to sign up: ${response.statusText}`);
    }

    await login(formData);
    redirect("/");
}