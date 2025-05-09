export interface DataPoint {
    day: number
    price: number
  }
  
  export interface ScenarioOption {
    id: string
    text: string
    isCorrect: boolean
  }
  
  export interface Scenario {
    id: string
    title: string
    description: string
    chartData: DataPoint[]
    question: string
    options: ScenarioOption[]
    correctAnswer: string
    explanation: string
  }
  
  export const scenarios: Scenario[] = [
    {
      id: "strong-uptrend",
      title: "Strong Uptrend",
      description: "The stock has been steadily rising for the past 7 days.",
      chartData: [
        { day: 1, price: 100 },
        { day: 2, price: 102 },
        { day: 3, price: 104 },
        { day: 4, price: 101 },
        { day: 5, price: 99 },
        { day: 6, price: 100 },
        { day: 7, price: 103 },
      ],
      question: "What is the most likely short-term behavior?",
      options: [
        {
          id: "a",
          text: "The price may continue to rise due to strong momentum",
          isCorrect: true,
        },
        {
          id: "b",
          text: "The stock will crash suddenly without warning",
          isCorrect: false,
        },
        {
          id: "c",
          text: "The price will remain fixed at Rs.102",
          isCorrect: false,
        },
        {
          id: "d",
          text: "The market will close permanently",
          isCorrect: false,
        },
      ],
      correctAnswer: "a",
      explanation:
        "In a strong uptrend, momentum often continues in the short term, making further price increases likely.",
    },
    {
      id: "sideways-market",
      title: "Sideways Action",
      description: "The price seems to be bouncing between Rs.49 and Rs.51.",
      chartData: [
        { day: 1, price: 50 },
        { day: 2, price: 51 },
        { day: 3, price: 49 },
        { day: 4, price: 50 },
        { day: 5, price: 50 },
        { day: 6, price: 51 },
        { day: 7, price: 50 },
      ],
      question: "What does this indicate?",
      options: [
        {
          id: "a",
          text: "The price is moving sideways with no strong trend",
          isCorrect: true,
        },
        {
          id: "b",
          text: "The price is in a downtrend",
          isCorrect: false,
        },
        {
          id: "c",
          text: "The stock is being hacked",
          isCorrect: false,
        },
        {
          id: "d",
          text: "It is a guaranteed buying opportunity",
          isCorrect: false,
        },
      ],
      correctAnswer: "a",
      explanation:
        "When prices oscillate within a narrow range, it indicates a sideways or range-bound market with no clear directional trend.",
    },
    {
      id: "sudden-drop",
      title: "Panic Selling?",
      description: "The stock has dropped quickly from Rs.120 to Rs.85.",
      chartData: [
        { "day": 1, "price": 120 },
        { "day": 2, "price": 118 },
        { "day": 3, "price": 112 },
        { "day": 4, "price": 105 },
        { "day": 5, "price": 95 },
        { "day": 6, "price": 90 },
        { "day": 7, "price": 85 }
      ],
      question: "What might be happening?",
      options: [
        {
          id: "a",
          text: "Investors might be panic-selling due to bad news",
          isCorrect: true,
        },
        {
          id: "b",
          text: "The company has secretly doubled its profits",
          isCorrect: false,
        },
        {
          id: "c",
          text: "This is normal and should be ignored",
          isCorrect: false,
        },
        {
          id: "d",
          text: "The stock is about to rise 200% instantly",
          isCorrect: false,
        },
      ],
      correctAnswer: "a",
      explanation:
        "A rapid price decline often indicates panic selling, typically triggered by negative news or market sentiment.",
    },
        {
      id: "volatile-swings",
      title: "Volatile Swings",
      description: "The stock shows big daily ups and downs.",
      chartData: [
            { day: 1, price: 100 },
            { day: 2, price: 105 },
            { day: 3, price: 98 },
            { day: 4, price: 110 },
            { day: 5, price: 102 },
            { day: 6, price: 108 },
            { day: 7, price: 95 },
            { day: 8, price: 99 },
            { day: 9, price: 101 },
            { day: 10, price: 104 },
            { day: 11, price: 96 },
            { day: 12, price: 107 },
            { day: 13, price: 97 },
            { day: 14, price: 109 },
            { day: 15, price: 103 },
      ],
      question: "What does this suggest?",
      options: [
        {
          id: "a",
          text: "The stock is being regulated",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Long-term stability",
          isCorrect: false,
        },
        {
          id: "c",
          text: "High volatility, possible uncertainty in the market",
          isCorrect: true,
        },
        {
          id: "d",
          text: "Interest rates dropped",
          isCorrect: false,
        },
      ],
      correctAnswer: "c",
      explanation:
        "Sharp fluctuations usually indicate high volatility and market uncertainty.",
    },
            {
      id: "breakout",
      title: "Breakout After Consolidation",
      description: "Price breaks out after being stuck in a range.",
      chartData: [
          { day: 1, price: 50 },
          { day: 2, price: 49.5 },
          { day: 3, price: 50.2 },
          { day: 4, price: 50 },
          { day: 5, price: 49.8 },
          { day: 6, price: 50.1 },
          { day: 7, price: 50.2 },
          { day: 8, price: 49.9 },
          { day: 9, price: 50 },
          { day: 10, price: 50.1 },  
          { day: 11, price: 52 },
          { day: 12, price: 53 },
          { day: 13, price: 52.9 },
          { day: 14, price: 53.5 },
          { day: 15, price: 53.59 },
      ],
      question: " What does this signal?",
      options: [
        {
          id: "a",
          text: " A scam is happening",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Flat price movement",
          isCorrect: false,
        },
        {
          id: "c",
          text: "Sudden crash ahead",
          isCorrect: false,
        },
        {
          id: "d",
          text: "A breakout potential start of a new trend ",
          isCorrect: true,
        },
      ],
      correctAnswer: "d",
      explanation:
        "When price breaks a resistance after consolidation, it often begins a new trend.",
    },
  ]
  
  export function getScenarioById(id: string): Scenario | undefined {
    return scenarios.find((scenario) => scenario.id === id)
  }
  
  export function getNextScenarioId(currentId: string): string {
    const currentIndex = scenarios.findIndex((scenario) => scenario.id === currentId)
    if (currentIndex === -1 || currentIndex === scenarios.length - 1) {
      return scenarios[0].id
    }
    return scenarios[currentIndex + 1].id
  }
  