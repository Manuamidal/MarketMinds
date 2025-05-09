export interface Question {
  id: number
  question: string
  options: {
    id: string
    text: string
  }[]
  answer: string
  explanation: string
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'What is a "bull market"?',
    options: [
      { id: "A", text: "A market where prices are falling" },
      { id: "B", text: "A market where prices are stable" },
      { id: "C", text: "A market where prices are rising" },
      { id: "D", text: "A market with no trading" },
    ],
    answer: "C",
    explanation: "A bull market indicates a period of rising prices and investor optimism.",
  },
  {
    id: 2,
    question: "What does a candlestick chart show?",
    options: [
      { id: "A", text: "Only the closing price" },
      { id: "B", text: "Only volume" },
      { id: "C", text: "The opening, closing, high, and low prices for a specific period" },
      { id: "D", text: "Only trends" },
    ],
    answer: "C",
    explanation: "Each candlestick shows the open, close, high, and low for a given time.",
  },
  {
    id: 3,
    question: 'In trading, what is "resistance"?',
    options: [
      { id: "A", text: "A price level where buying pressure increases" },
      { id: "B", text: "A price level where selling pressure increases" },
      { id: "C", text: "A technical indicator" },
      { id: "D", text: "A stop-loss order" },
    ],
    answer: "B",
    explanation: "Resistance is where the price often struggles to rise past due to selling pressure.",
  },
  {
    id: 4,
    question: "Identify the trend in this 7-day chart (📈 upward trend shown)",
    options: [
      { id: "A", text: "Downtrend" },
      { id: "B", text: "Sideways trend" },
      { id: "C", text: "Uptrend" },
      { id: "D", text: "Panic selling" },
    ],
    answer: "C",
    explanation: "An uptrend shows higher highs and higher lows, indicating strong buyer interest.",
  },
  {
    id: 5,
    question: 'What does "volume" represent in trading?',
    options: [
      { id: "A", text: "The number of shares traded" },
      { id: "B", text: "The number of investors" },
      { id: "C", text: "The price movement" },
      { id: "D", text: "Market volatility" },
    ],
    answer: "A",
    explanation: "Volume shows how many shares or contracts are traded during a given time.",
  },
  {
    id: 6,
    question: 'What is a "stop-loss" order?',
    options: [
      { id: "A", text: "A way to short a stock" },
      { id: "B", text: "An automatic order to buy once a stock drops" },
      { id: "C", text: "An automatic order to sell a stock at or below a specific price to limit loss" },
      { id: "D", text: "A limit order to sell at profit" },
    ],
    answer: "C",
    explanation: "It helps minimize losses by selling before the price drops further.",
  },
  {
    id: 7,
    question: "Which pattern suggests a possible trend reversal?",
    options: [
      { id: "A", text: "Head and shoulders" },
      { id: "B", text: "Symmetrical triangle" },
      { id: "C", text: "Flag pattern" },
      { id: "D", text: "Cup and handle" },
    ],
    answer: "A",
    explanation: 'The "Head and Shoulders" pattern often signals a reversal from a bullish to bearish trend.',
  },
  {
    id: 8,
    question: 'What is "short selling"?',
    options: [
      { id: "A", text: "Buying a stock and holding it long term" },
      { id: "B", text: "Selling a stock before buying it, hoping the price falls" },
      { id: "C", text: "Buying a stock for a short price" },
      { id: "D", text: "Selling a stock at market close" },
    ],
    answer: "B",
    explanation: "Traders borrow shares, sell them, and hope to buy them back at a lower price.",
  },
  {
    id: 9,
    question: 'What is a "breakout" in chart analysis?',
    options: [
      { id: "A", text: "When price moves below support" },
      { id: "B", text: "When volume suddenly decreases" },
      { id: "C", text: "When price moves strongly above resistance" },
      { id: "D", text: "When a stock splits" },
    ],
    answer: "C",
    explanation: "A breakout happens when the price moves beyond a key level with strong momentum.",
  },
  {
    id: 10,
    question: "You see a 30-day chart with sharp drops and spikes. What's likely happening?",
    options: [
      { id: "A", text: "Sideways movement" },
      { id: "B", text: "Low volatility" },
      { id: "C", text: "Panic buying/selling" },
      { id: "D", text: "Consolidation" },
    ],
    answer: "C",
    explanation: "Sharp moves often point to emotional trading, fear, or hype in the market.",
  },
]
export function getTotalQuestions() {
  return questions.length
}