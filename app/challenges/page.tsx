"use client"

import { useRouter } from "next/navigation"
import { scenarios } from "@/lib/scenario-data"
import {  getTotalQuestions } from "@/lib/level1-data"

export default function ChallengePage() {
  const router = useRouter()
  const questions = getTotalQuestions()
  const handleLevelClick = (level: number) => {
    if (level === 1) {
      router.push(`/level1/1`)
    }
    else if (level === 2) {
      router.push(`/scenario/${scenarios[0].id}`)
    }
    // else if (...) // Future logic for Level 2
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center space-y-10">
        <h1 className="text-5xl font-bold text-gray-900">Challenge</h1>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={() => handleLevelClick(1)}
            className="w-64 py-4 bg-blue-100 text-blue-700 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-200 hover:scale-105 transform transition-all duration-200"
          >
            Level 1
          </button>

          <button
            onClick={() => handleLevelClick(2)}
            className="w-64 py-4 bg-blue-100 text-blue-700 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-200 hover:scale-105 transform transition-all duration-200"          >
            Level 2
          </button>
                    <button
            onClick={() => handleLevelClick(3)}
            className="w-64 py-4 bg-blue-100 text-blue-700 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-200 hover:scale-105 transform transition-all duration-200"          >
            Level 3
          </button>
        </div>
      </div>
    </div>
  )
}
