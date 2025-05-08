"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"
import type { Scenario } from "@/lib/scenario-data"
import { getNextScenarioId } from "@/lib/scenario-data"

interface ScenarioComponentProps {
  scenario: Scenario
}

export default function ScenarioComponent({ scenario }: ScenarioComponentProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [reason, setReason] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [showNextButton, setShowNextButton] = useState(false)
  const router = useRouter()

  // Reset state when scenario changes
  useEffect(() => {
    setSelectedOption(null)
    setReason("")
    setFeedback(null)
    setShowNextButton(false)
  }, [scenario.id])

  // Calculate percentage change for display
  const percentageChange =
    scenario.chartData.length > 0
      ? ((scenario.chartData[scenario.chartData.length - 1].price - scenario.chartData[0].price) /
          scenario.chartData[0].price) *
        100
      : 0

  // Enhanced chart data with OHLC values
  const enhancedChartData = scenario.chartData.map((entry) => {
    const open = entry.price + Math.random() * 2 - 1
    const high = Math.max(open, entry.price) + Math.random() * 2
    const low = Math.min(open, entry.price) - Math.random() * 2
    const close = entry.price

    return {
      day: entry.day,
      price: close,
      open: Number.parseFloat(open.toFixed(2)),
      high: Number.parseFloat(high.toFixed(2)),
      low: Number.parseFloat(low.toFixed(2)),
      close: Number.parseFloat(close.toFixed(2)),
    }
  })

  const handleSubmit = () => {
    if (selectedOption && reason.trim()) {
      const selectedOptionObj = scenario.options.find((opt) => opt.id === selectedOption)
      const isCorrect = selectedOptionObj?.isCorrect || false

      setFeedback(
        isCorrect
          ? "✅ Correct! " + scenario.explanation
          : `❌ Wrong! The correct answer is: "${scenario.options.find((opt) => opt.isCorrect)?.text}"`,
      )
      setShowNextButton(true)
    } else {
      alert("Please select an option and provide a reason before submitting.")
    }
  }

  const handleReasonRedirect = () => {
    router.push(`/scenario/${scenario.id}/answer`)
  }

  const handleNext = () => {
    const nextId = getNextScenarioId(scenario.id)
    // Reset the state before navigating
    setSelectedOption(null)
    setReason("")
    setFeedback(null)
    setShowNextButton(false)
    router.push(`/scenario/${nextId}`)
  }

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* Left Side - Stock Chart */}
      <div className="md:w-1/2 bg-white shadow p-5 rounded-xl border h-[450px]">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-xl font-bold">Company X</h2>
            <p className="text-sm text-gray-500">NSE: COMPX</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">
              Rs.
              {enhancedChartData.length > 0 ? enhancedChartData[enhancedChartData.length - 1].price.toFixed(2) : "0.00"}
            </p>
            <p className={`text-sm font-medium ${percentageChange >= 0 ? "text-green-600" : "text-red-600"}`}>
              {percentageChange >= 0 ? "+" : ""}
              {percentageChange.toFixed(2)}%
            </p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="65%">
          <LineChart data={enhancedChartData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
            <XAxis dataKey="day" tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis
              domain={["dataMin - 1", "dataMax + 1"]}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickFormatter={(value) => `Rs.${value}`}
              axisLine={false}
              tickLine={false}
              width={60}
            />
            <Tooltip
              formatter={(value) => [`Rs.${value}`, "Price"]}
              labelFormatter={(label) => `Day ${label}`}
              contentStyle={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "0.375rem",
                padding: "8px 12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="price"
              strokeWidth={3}
              dot={false}
              isAnimationActive={false}
              stroke="#3b82f6"
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-sm text-gray-500">Open</p>
            <p className="font-medium">
              Rs.
              {enhancedChartData.length > 0 ? enhancedChartData[0].open?.toFixed(2) : "0.00"}
            </p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-sm text-gray-500">High</p>
            <p className="font-medium">
              Rs.
              {enhancedChartData.length > 0
                ? Math.max(...enhancedChartData.map((d) => d.high || d.price)).toFixed(2)
                : "0.00"}
            </p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-sm text-gray-500">Low</p>
            <p className="font-medium">
              Rs.
              {enhancedChartData.length > 0
                ? Math.min(...enhancedChartData.map((d) => d.low || d.price)).toFixed(2)
                : "0.00"}
            </p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-sm text-gray-500">Close</p>
            <p className="font-medium">
              Rs.
              {enhancedChartData.length > 0
                ? enhancedChartData[enhancedChartData.length - 1].close?.toFixed(2)
                : "0.00"}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Scenario + Options */}
      <div className="md:w-1/2 bg-white shadow p-5 rounded-xl border relative">
        <h1 className="text-2xl font-bold mb-4">Scenario: {scenario.title}</h1>

        <p className="font-semibold mb-4 text-gray-800">
          {scenario.description} {scenario.question}
        </p>

        <form className="space-y-3 mb-6">
          {scenario.options.map((option) => {
            const id = `option-${option.id}`
            return (
              <div key={id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <input
                  type="radio"
                  id={id}
                  name="answer"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="mt-1 form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
                  disabled={!!feedback}
                />
                <label htmlFor={id} className="select-none text-gray-800 cursor-pointer">
                  {option.id.toUpperCase()}. {option.text}
                </label>
              </div>
            )
          })}

          <textarea
            placeholder="Why did you choose this option? (required)"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full mt-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            required
            disabled={!!feedback}
          />
        </form>

        {feedback && <div className="mb-3 text-sm font-medium text-gray-800">{feedback}</div>}

        <button
          onClick={handleSubmit}
          className={`w-full px-4 py-3 rounded-lg transition ${
            selectedOption && reason.trim()
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!selectedOption || !reason.trim() || !!feedback}
        >
          Submit Answer
        </button>

        <div className="flex justify-between mt-3 space-x-2">
          {showNextButton && (
            <>
              <button
                onClick={handleReasonRedirect}
                className="px-4 py-2 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200"
              >
                Reason
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
              >
                Next Question →
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
