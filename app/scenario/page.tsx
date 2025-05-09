
import { redirect } from "next/navigation"
import { scenarios } from "@/lib/scenario-data"

export default function ScenarioPage() {
  // Redirect to the first scenario by default
  redirect(`/scenario/${scenarios[0].id}`)
}