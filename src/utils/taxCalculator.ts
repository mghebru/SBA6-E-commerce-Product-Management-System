export function calculateTax(price: number, category: string): number {
  const STANDARD_TAX = 0.0475;
  const GROCERY_TAX = 0.03;

  const taxRate = category === "groceries" ? GROCERY_TAX : STANDARD_TAX;
  return price * taxRate;
}