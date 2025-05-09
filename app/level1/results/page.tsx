"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { questions } from "@/lib/level1-data"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

interface UserAnswer {
  selectedOption: string
  notes: string
}

export default function ResultsPage() {
  const router = useRouter()
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswer>>({})
  const [score, setScore] = useState({ correct: 0, total: questions.length })

  useEffect(() => {
    // Get all user answers from sessionStorage
    const storedAnswers = JSON.parse(sessionStorage.getItem("userAnswers") || "{}")
    setUserAnswers(storedAnswers)

    // Calculate score
    const correctCount = Object.entries(storedAnswers).reduce((count, [questionId, answer]) => {
      const question = questions.find((q) => q.id === Number.parseInt(questionId))
      if (question && (answer as UserAnswer).selectedOption === question.answer) {
        return count + 1
      }
      return count
    }, 0)

    setScore({ correct: correctCount, total: questions.length })
  }, [])

  const handleRestartQuiz = () => {
    // Clear user answers
    sessionStorage.removeItem("userAnswers")
    // Redirect to the first question
    router.push("/level1/1")
  }

  const percentage = Math.round((score.correct / score.total) * 100)

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Quiz Results</h1>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg border text-center">
        <h2 className="text-xl font-bold mb-2">Your Score</h2>
        <div className="text-4xl font-bold mb-2">
          {score.correct} / {score.total}
        </div>
        <div className="text-lg">{percentage}%</div>
      </div>

      <h2 className="text-xl font-bold mb-4">Question Summary</h2>

      <div className="space-y-6 mb-8">
        {questions.map((question) => {
          const userAnswer = userAnswers[question.id]
          const isAnswered = !!userAnswer
          const isCorrect = isAnswered && userAnswer.selectedOption === question.answer

          return (
            <div key={question.id} className="p-4 rounded-lg border">
              <div className="flex items-start gap-2">
                <div className="mt-1">
                  {isAnswered &&
                    (isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    ))}
                </div>
                <div>
                  <h3 className="font-medium">
                    Question {question.id}: {question.question}
                  </h3>

                  {isAnswered && (
                    <div className="mt-2">
                      <p>
                        Your answer: {userAnswer.selectedOption}.{" "}
                        {question.options.find((o) => o.id === userAnswer.selectedOption)?.text}
                      </p>
                      <p className="mt-1">
                        Correct answer: {question.answer}.{" "}
                        {question.options.find((o) => o.id === question.answer)?.text}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <Button onClick={handleRestartQuiz} className="w-full">
        Restart Quiz
      </Button>
    </div>
  )
}
