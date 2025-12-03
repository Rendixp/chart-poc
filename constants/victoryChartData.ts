export const VICTORY_DATA = Array.from({ length: 365 }, (_, i) => ({
    day: i,
    highTmp: i * 2,
  }));

export const VICTORY_DATA2 = Array.from({ length: 365 }, (_, i) => ({
    day: i,
    highTmp: i < 150 ? 364 - i : i,
  }));