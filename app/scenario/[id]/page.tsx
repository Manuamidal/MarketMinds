
import { notFound } from "next/navigation"
import { getScenarioById } from "@/lib/scenario-data"
import ScenarioComponent from "@/components/scenario/scenario-component"

export default function ScenarioPage({ params }: { params: { id: string } }) {
  const scenario = getScenarioById(params.id)

  if (!scenario) {
    notFound()
  }

  return (<ScenarioComponent scenario={scenario} />)
}

// Generate static params for all scenarios
export function generateStaticParams() {
  return [{ id: "strong-uptrend" }, { id: "sideways-market" }, { id: "sudden-drop" }]
}
