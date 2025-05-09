"use server"
import { encrypt } from "@/libs";
import { MongoClient } from "mongodb";
import { cookies } from "next/headers";


interface LoginData{
    email:string,
    password:string
}

export async function check(formData: LoginData) {
  const client = new MongoClient("mongodb://localhost:27017/marketminds");

  try {
    await client.connect();

    // Access the database and collection
    const database = client.db("user_data_db");
    const collection = database.collection("user_data_collection");

    // Find the user by email
    const user = await collection.findOne({ "data.email": formData.email });

    if (!user || user.data.password !== formData.password) {
        console.log("error")
      return null;
    }

    // Create the session
    const expires = new Date(Date.now() + 10 * 100000);
    const session = await encrypt({ user: { email: formData.email }, expires });

    // Save the session in a cookie
    (await cookies()).set("session", session, { expires, httpOnly: true });
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Failed to log in");
  } finally {
    await client.close();
  }
}