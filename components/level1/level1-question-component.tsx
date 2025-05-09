"use client"

import { Level1 } from "@/lib/level1-data"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Level1QuestionComponent({ question }: { question: Level1 }) {
  const [selected, setSelected] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = () => {
    if (selected) {
      router.push(`/Level1/${question.id}/answer`)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">{question.title}</h1>

      <div className="bg-white shadow rounded-xl p-6">
        <p className="mb-4 text-gray-700">{question.description}</p>
        <p className="mb-4 font-semibold">{question.question}</p>

        <ul className="space-y-2">
          {question.options.map((option) => (
            <li key={option.id}>
              <label className="block p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="answer"
                  value={option.id}
                  checked={selected === option.id}
                  onChange={() => setSelected(option.id)}
                  className="mr-2"
                />
                {option.text}
              </label>
            </li>
          ))}
        </ul>

        <button
          onClick={handleSubmit}
          disabled={!selected}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
