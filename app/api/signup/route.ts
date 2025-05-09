import { MongoClient } from "mongodb";

interface SignUpData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export async function POST(req: Request) {
    if (req.method === "POST") {
        const { data } = await req.json(); // Parse JSON body

        const client = new MongoClient("mongodb://localhost:27017/marketminds");

        try {
            await client.connect();

            // Choose a name for your database
            const database = client.db("user_data_db");

            // Choose a name for your collection
            const collection = database.collection("user_data_collection");

            await collection.insertOne({ data });

            return new Response(
                JSON.stringify({ message: "Data saved successfully!" }),
                { status: 201, headers: { "Content-Type": "application/json" } }
            );
        } catch (error) {
            return new Response(
                JSON.stringify({ message: "Something went wrong!" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        } finally {
            await client.close();
        }
    } else {
        return new Response(
            JSON.stringify({ message: `Method not allowed! ${req.method}` }),
            { status: 405, headers: { "Content-Type": "application/json" } }
        );
    }
}