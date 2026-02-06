"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(price, category) {
    const STANDARD_TAX = 0.0475;
    const GROCERY_TAX = 0.03;
    const taxRate = category === "groceries" ? GROCERY_TAX : STANDARD_TAX;
    return price * taxRate;
}
//# sourceMappingURL=taxCalculator.js.map