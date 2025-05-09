
import { notFound } from "next/navigation"
import { getScenarioById } from "@/lib/scenario-data"
import ScenarioComponent from "@/components/scenario/scenario-component"

export default async function ScenarioPage({ params }: { params: { id: string } }) {
  const {id}=await params;
    const scenario = getScenarioById(id)

  if (!scenario) {
    notFound()
  }

  return (<ScenarioComponent scenario={scenario} />)
}

// Generate static params for all scenarios
export function generateStaticParams() {
  return [{ id: "strong-uptrend" }, { id: "sideways-market" }, { id: "sudden-drop" },{ id: "volatile-swings" },{ id: "breakout" }]
}
