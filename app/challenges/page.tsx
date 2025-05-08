"use client"

import { useRouter } from "next/navigation"
import { scenarios } from "@/lib/scenario-data"

export default function ChallengePage() {
  const router = useRouter()

  const handleLevelClick = (level: number) => {
    if (level === 1) {
      // Redirect to the first scenario
      router.push(`/scenario/${scenarios[0].id}`)
    } else if (level === 2) {
      // For now, redirect to the second scenario if it exists
      // You can modify this logic based on your requirements
      if (scenarios.length > 1) {
        router.push(`/scenario/${scenarios[1].id}`)
      } else {
        // If there's no second scenario, show an alert
        alert("Level 2 is coming soon!")
      }
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-12">Challenge</h1>

      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => handleLevelClick(1)}
          className="w-64 py-4 bg-blue-100 text-blue-700 rounded-md text-lg font-medium hover:bg-blue-200 transition-colors"
        >
          Level 1
        </button>

        <button
          onClick={() => handleLevelClick(2)}
          className="w-64 py-4 bg-slate-700 text-white rounded-md text-lg font-medium hover:bg-slate-800 transition-colors"
        >
          Level 2
        </button>
      </div>
    </div>
  )
}
