"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getQuestion, getNextQuestionId, getTotalQuestions, getScenarioTitle } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

export default function AnswerPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const questionId = Number.parseInt(params.id)
  const question = getQuestion(questionId)
  const nextQuestionId = getNextQuestionId(questionId)
  const [userAnswer, setUserAnswer] = useState<{ selectedOption: string; notes: string } | null>(null)
  const totalQuestions = getTotalQuestions()

  useEffect(() => {
    // Get the user's answer from sessionStorage
    const userAnswers = JSON.parse(sessionStorage.getItem("userAnswers") || "{}")
    const currentAnswer = userAnswers[questionId]

    if (!currentAnswer) {
      // If no answer is found, redirect back to the question
      router.push(`/level1/${questionId}`)
      return
    }

    setUserAnswer(currentAnswer)
  }, [questionId, router])

  if (!question || !userAnswer) {
    return <div className="p-8 text-center">Loading...</div>
  }

  const isCorrect = userAnswer.selectedOption === question.answer
  const scenarioTitle = getScenarioTitle(question.question)

  const handleNextQuestion = () => {
    if (nextQuestionId) {
      router.push(`/level1/${nextQuestionId}`)
    } else {
      router.push("/level1/results")
    }
  }

  // const handleShowReason = () => {
  //   // You could implement a modal or expand a section here
  //   alert(question.explanation)
  // }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Scenario: {scenarioTitle}</h1>

      <p className="text-lg mb-8">{question.question}</p>

      <div className="space-y-4 mb-8">
        {question.options.map((option) => {
          const isUserSelection = option.id === userAnswer.selectedOption
          const isCorrectAnswer = option.id === question.answer

          let className = "flex items-start space-x-2 p-3 rounded-md border"

          if (isUserSelection && isCorrect) {
            className += " bg-green-50 border-green-300"
          } else if (isUserSelection && !isCorrect) {
            className += " bg-red-50 border-red-300"
          } else if (isCorrectAnswer) {
            className += " bg-green-50 border-green-300"
          }

          return (
            <div key={option.id} className={className}>
              <div className="flex items-center h-5 w-5 mt-1">
                {isUserSelection && isCorrect && <CheckCircle className="h-5 w-5 text-green-500" />}
                {isUserSelection && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
                {!isUserSelection && isCorrectAnswer && <CheckCircle className="h-5 w-5 text-green-500" />}
                {!isUserSelection && !isCorrectAnswer && (
                  <div className="h-5 w-5 rounded-full border border-gray-300" />
                )}
              </div>
              <div className="font-medium flex-1">
                {option.id}. {option.text}
              </div>
            </div>
          )
        })}
      </div>

      {userAnswer.notes && (
        <div className="mb-8 p-4 bg-gray-50 rounded-md border">
          <h3 className="font-medium mb-2">Your Notes:</h3>
          <p>{userAnswer.notes}</p>
        </div>
      )}

      <div className="mb-8">
        {isCorrect ? (
          <div className="flex items-center text-green-600 mb-2">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span className="font-bold">Correct!</span>
          </div>
        ) : (
          <div className="flex items-center text-red-600 mb-2">
            <XCircle className="mr-2 h-5 w-5" />
            <span className="font-bold">
              Wrong! The correct answer is: "{question.answer}.{" "}
              {question.options.find((o) => o.id === question.answer)?.text}"
            </span>
          </div>
        )}

        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <p className="font-medium">✅ Correct Answer: {question.answer}</p>
          <p className="mt-2">📘 Explanation: {question.explanation}</p>
        </div>
      </div>

      <div className="flex justify-between">
        {/* <Button variant="outline" onClick={handleShowReason}>
          Reason
        </Button> */}

        <Button onClick={handleNextQuestion}>
          {nextQuestionId ? `Next Question →` : `View Results (${questionId}/${totalQuestions})`}
        </Button>
      </div>
    </div>
  )
}
