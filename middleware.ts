import { NextRequest } from "next/server";
import { updateSession } from "./libs";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}