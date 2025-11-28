// Hourly data (last 24 hours)
export const SINGLE_INDEX_DATA_1H = Array.from({ length: 24 }, (_, i) => ({
  value: Math.floor(10 + Math.random() * 80), 
  x: `${i}h`,
}));

// Daily data (last 180 days / about 6 months)
export const SINGLE_INDEX_DATA_1D = Array.from({ length: 180 }, (_, i) => ({
  value: Math.floor(10 + Math.random() * 80),
  x: `D${i + 1}`,
}));

// Weekly data (last 48 weeks / about 1 year)
export const SINGLE_INDEX_DATA_1W = Array.from({ length: 48 }, (_, i) => ({
  value: Math.floor(10 + Math.random() * 80), 
  x: `W${i + 1}`,
}));

// Monthly data (your original data)
export const SINGLE_INDEX_DATA_1M = [
  { value: 15, x: 'Jan' },
  { value: 30, x: 'Feb' },
  { value: 26, x: 'Mar' },
  { value: 75, x: 'Apr' },
  { value: 15, x: 'May' },
  { value: 28, x: 'Jun' },
  { value: 22, x: 'Jul' },
  { value: 40, x: 'Aug' },
  { value: 55, x: 'Sep' },
  { value: 75, x: 'Oct' },
  { value: 15, x: 'Nov' },
  { value: 28, x: 'Dec' },
];

// Yearly data (last 5 years)
export const SINGLE_INDEX_DATA_1Y = Array.from({ length: 5 }, (_, i) => ({
  value: Math.floor(10 + Math.random() * 80),
  x: `${2019 + i}`,
}));


export const CHART_TIME_RANGE = ['1H', '1D', '1W', '1M', '1Y'];

export const SINGLE_INDEX_DATA = [
  {
    id: "1H",
    data: SINGLE_INDEX_DATA_1H,
    spacing: 15,
  },
  {
    id: "1D",
    data: SINGLE_INDEX_DATA_1D,
    spacing: 2,
  },
  {
    id: "1W",
    data: SINGLE_INDEX_DATA_1W,
    spacing: 7,
  },
  {
    id: "1M",
    data: SINGLE_INDEX_DATA_1M,
    spacing: 32,
  },
  {
    id: "1Y",
    data: SINGLE_INDEX_DATA_1Y,
    spacing: 85,
  }
]



// Multi-index data
export const MULTI_INDEX_DATA_A = [
  { value: 15, x: 'Jan' },
  { value: 30, x: 'Feb' },
  { value: 26, x: 'Mar' },
  { value: 75, x: 'Apr' },
  { value: 15, x: 'May' },
  { value: 28, x: 'Jun' },
  { value: 22, x: 'Jul' },
  { value: 40, x: 'Aug' },
  { value: 55, x: 'Sep' },
  { value: 75, x: 'Oct' },
];

export const MULTI_INDEX_DATA_B = [
  { value: 20, x: 'Jan' },
  { value: 15, x: 'Feb' },
  { value: 35, x: 'Mar' },
  { value: 65, x: 'Apr' },
  { value: 25, x: 'May' },
  { value: 40, x: 'Jun' },
  { value: 18, x: 'Jul' },
  { value: 55, x: 'Aug' },
  { value: 52, x: 'Sep' },
  { value: 60, x: 'Oct' },
];

// Large dataset (500 length)
export const LARGE_DATA = Array.from({ length: 500 }, (_, i) => ({
  value: Math.floor(20 + Math.random() * 80),
  x: `P${i + 1}`, // P1, P2, ...
}));
