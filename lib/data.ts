export interface StockData {
  Date: string
  Open: number
  High: number
  Low: number
  Close: number
  AdjClose: number
  Volume: string
}

export let stocks: StockData[] = [
  {
    "Date": "Feb 24, 2025",
    "Open": 136.56,
    "High": 138.59,
    "Low": 130.08,
    "Close": 130.28,
    "AdjClose": 130.27,
    "Volume": "251,381,100"
  },
  {
    "Date": "Feb 21, 2025",
    "Open": 140.04,
    "High": 141.46,
    "Low": 134.03,
    "Close": 134.43,
    "AdjClose": 134.42,
    "Volume": "228,217,600"
  },
  {
    "Date": "Feb 20, 2025",
    "Open": 140.03,
    "High": 140.66,
    "Low": 136.79,
    "Close": 140.11,
    "AdjClose": 140.1,
    "Volume": "143,903,600"
  },
  {
    "Date": "Feb 19, 2025",
    "Open": 139.51,
    "High": 141.36,
    "Low": 137.22,
    "Close": 139.23,
    "AdjClose": 139.22,
    "Volume": "167,536,000"
  },
  {
    "Date": "Feb 18, 2025",
    "Open": 141.27,
    "High": 143.44,
    "Low": 137.93,
    "Close": 139.4,
    "AdjClose": 139.39,
    "Volume": "219,176,600"
  },
  {
    "Date": "Feb 14, 2025",
    "Open": 136.48,
    "High": 139.25,
    "Low": 135.5,
    "Close": 138.85,
    "AdjClose": 138.84,
    "Volume": "195,479,600"
  },
  {
    "Date": "Feb 13, 2025",
    "Open": 131.56,
    "High": 136.5,
    "Low": 131.17,
    "Close": 135.29,
    "AdjClose": 135.28,
    "Volume": "197,430,000"
  },
  {
    "Date": "Feb 12, 2025",
    "Open": 130.02,
    "High": 132.24,
    "Low": 129.08,
    "Close": 131.14,
    "AdjClose": 131.13,
    "Volume": "160,278,600"
  },
  {
    "Date": "Feb 11, 2025",
    "Open": 132.58,
    "High": 134.48,
    "Low": 131.02,
    "Close": 132.8,
    "AdjClose": 132.79,
    "Volume": "178,902,400"
  },
  {
    "Date": "Feb 10, 2025",
    "Open": 130.09,
    "High": 135,
    "Low": 129.96,
    "Close": 133.57,
    "AdjClose": 133.56,
    "Volume": "216,989,100"
  },
  {
    "Date": "Feb 7, 2025",
    "Open": 129.22,
    "High": 130.37,
    "Low": 125,
    "Close": 129.84,
    "AdjClose": 129.83,
    "Volume": "228,186,300"
  },
  {
    "Date": "Feb 6, 2025",
    "Open": 127.42,
    "High": 128.77,
    "Low": 125.21,
    "Close": 128.68,
    "AdjClose": 128.67,
    "Volume": "251,483,600"
  },
  {
    "Date": "Feb 5, 2025",
    "Open": 121.76,
    "High": 125,
    "Low": 120.76,
    "Close": 124.83,
    "AdjClose": 124.82,
    "Volume": "262,230,800"
  },
  {
    "Date": "Feb 4, 2025",
    "Open": 116.96,
    "High": 121.2,
    "Low": 116.7,
    "Close": 118.65,
    "AdjClose": 118.64,
    "Volume": "256,550,000"
  },
  {
    "Date": "Feb 3, 2025",
    "Open": 114.75,
    "High": 118.57,
    "Low": 113.01,
    "Close": 116.66,
    "AdjClose": 116.65,
    "Volume": "371,235,700"
  },
  {
    "Date": "Jan 31, 2025",
    "Open": 123.78,
    "High": 127.85,
    "Low": 119.19,
    "Close": 120.07,
    "AdjClose": 120.06,
    "Volume": "390,372,900"
  },
  {
    "Date": "Jan 30, 2025",
    "Open": 123.1,
    "High": 125,
    "Low": 118.1,
    "Close": 124.65,
    "AdjClose": 124.64,
    "Volume": "392,925,500"
  },
  {
    "Date": "Jan 29, 2025",
    "Open": 126.5,
    "High": 126.89,
    "Low": 120.05,
    "Close": 123.7,
    "AdjClose": 123.69,
    "Volume": "467,120,600"
  },
  {
    "Date": "Jan 28, 2025",
    "Open": 121.81,
    "High": 129,
    "Low": 116.25,
    "Close": 128.99,
    "AdjClose": 128.98,
    "Volume": "579,666,400"
  },
  {
    "Date": "Jan 27, 2025",
    "Open": 124.8,
    "High": 128.4,
    "Low": 116.7,
    "Close": 118.42,
    "AdjClose": 118.41,
    "Volume": "818,830,900"
  }
];

stocks=stocks.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());

export function getTotalStockEntries(): number {
  return stocks.length;
}
