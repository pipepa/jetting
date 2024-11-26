// Utility function to calculate average price
export function calculateAveragePrice(prices: number[], minPrice: number = null): number {
  if (prices.length === 0) return 0;
  const totalSum = prices.reduce((acc, price) => acc + price, 0);
  return ((totalSum / prices.length) + minPrice) / 2
}