"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProducts = fetchProducts;
const errorHandler_1 = require("../utils/errorHandler");
const API_URL = "https://dummyjson.com/products";
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new errorHandler_1.AppError(`Failed to fetch products. Status: ${response.status}`);
        }
        const data = await response.json();
        return data.products;
    }
    catch (error) {
        throw error;
    }
}
//# sourceMappingURL=apiService.js.map