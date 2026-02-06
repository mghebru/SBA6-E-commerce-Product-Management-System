"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiService_1 = require("./services/apiService");
const product_1 = require("./models/product");
const errorHandler_1 = require("./utils/errorHandler");
async function main() {
    try {
        const productsData = await (0, apiService_1.fetchProducts)();
        const products = productsData.map((p) => new product_1.Product(p.id, p.title, p.price, p.discountPercentage, p.category, p.rating, p.stock));
        products.forEach((product) => product.displayDetails());
    }
    catch (error) {
        (0, errorHandler_1.handleError)(error);
    }
}
main();
//# sourceMappingURL=main.js.map