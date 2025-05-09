"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getQuestion, getScenarioTitle } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function QuestionPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const questionId = Number.parseInt(params.id)
  const question = getQuestion(questionId)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [notes, setNotes] = useState("")

  // Reset selection when question changes
  useEffect(() => {
    setSelectedOption(null)
    setNotes("")
  }, [questionId])

  if (!question) {
    return <div className="p-8 text-center">Question not found</div>
  }

  const handleSubmit = () => {
    if (!selectedOption) return

    // Store the answer in sessionStorage
    const userAnswers = JSON.parse(sessionStorage.getItem("userAnswers") || "{}")
    userAnswers[questionId] = {
      selectedOption,
      notes,
    }
    sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers))

    // Navigate to the answer page
    router.push(`/level1/${questionId}/answer`)
  }

  const scenarioTitle = getScenarioTitle(question.question)

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Scenario: {scenarioTitle}</h1>

      <p className="text-lg mb-8">{question.question}</p>

      <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-4 mb-8">
        {question.options.map((option) => (
          <div key={option.id} className="flex items-start space-x-2 p-3 rounded-md border hover:bg-gray-50">
            <RadioGroupItem value={option.id} id={`option-${option.id}`} className="mt-1" />
            <Label htmlFor={`option-${option.id}`} className="font-medium cursor-pointer flex-1">
              {option.id}. {option.text}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="mb-8">
        <Label htmlFor="notes" className="mb-2 block">
          Notes (optional)
        </Label>
        <Textarea
          id="notes"
          placeholder="Add your thoughts or reasoning here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[100px]"
        />
      </div>

      <Button onClick={handleSubmit} disabled={!selectedOption} className="w-full py-6 text-lg">
        Submit Answer
      </Button>
    </div>
  )
}
