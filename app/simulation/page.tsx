import { decrypt, getSession } from "@/libs";
import { cookies } from "next/headers"

export default async function Page(){
    const session = (await cookies()).get("session")?.value;
    if (!session) console.log("aaaa");
    else    console.log(await decrypt(session));
    return(
        <>
            <h1>Simulation</h1>
        </>
    )
}