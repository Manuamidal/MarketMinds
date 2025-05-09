import { notFound } from "next/navigation"
import Link from "next/link"
import { getScenarioById, getNextScenarioId } from "@/lib/scenario-data"

export default function ScenarioAnswerPage({ params }: { params: { id: string } }) {
  const scenario = getScenarioById(params.id)

  if (!scenario) {
    notFound()
  }

  const nextScenarioId = getNextScenarioId(scenario.id)

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Explanation: {scenario.title}</h1>

      <div className="bg-white shadow rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Question</h2>
        <p className="mb-4">
          {scenario.description} {scenario.question}
        </p>

        <h2 className="text-xl font-semibold mb-4">Correct Answer</h2>
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg mb-4">
          <p className="font-medium text-green-800">{scenario.options.find((opt) => opt.isCorrect)?.text}</p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700">{scenario.explanation}</p>
      </div>

      <div className="flex justify-between">
        <Link
          href={`/scenario/${scenario.id}`}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
        >
          ← Back to Question
        </Link>
        <Link
          href={`/scenario/${nextScenarioId}`}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next Scenario →
        </Link>
      </div>
    </div>
  )
}