


import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { questions } from "./level1-data"

export function getQuestion(id: number) {
  return questions.find((q) => q.id === id) || null
}

export function getTotalQuestions() {
  return questions.length
}

export function getNextQuestionId(currentId: number) {
  const nextId = currentId + 1
  return nextId <= questions.length ? nextId : null
}

export function getScenarioTitle(question: string) {
  if (question.includes("upward trend")) return "Strong Uptrend"
  if (question.includes("bouncing between")) return "Sideways Action"
  if (question.includes("bull market")) return "Bull Market"
  if (question.includes("candlestick")) return "Chart Analysis"
  if (question.includes("resistance")) return "Support & Resistance"
  if (question.includes("volume")) return "Volume Analysis"
  if (question.includes("stop-loss")) return "Risk Management"
  if (question.includes("pattern")) return "Pattern Recognition"
  if (question.includes("short selling")) return "Short Selling"
  if (question.includes("breakout")) return "Breakout Trading"
  if (question.includes("sharp drops")) return "Market Volatility"
  return "Trading Scenario"
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
