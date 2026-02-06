"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const discountCalculator_1 = require("../utils/discountCalculator");
const taxCalculator_1 = require("../utils/taxCalculator");
class Product {
    id;
    title;
    price;
    discountPercentage;
    category;
    rating;
    stock;
    constructor(id, title, price, discountPercentage, category, rating, stock) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
        this.rating = rating;
        this.stock = stock;
    }
    getPriceWithDiscount() {
        const discountAmount = (0, discountCalculator_1.calculateDiscount)(this.price, this.discountPercentage);
        return this.price - discountAmount;
    }
    displayDetails() {
        const discountedPrice = this.getPriceWithDiscount();
        const tax = (0, taxCalculator_1.calculateTax)(discountedPrice, this.category);
        console.log("——————————————");
        console.log(`Product: ${this.title}`);
        console.log(`Category: ${this.category}`);
        console.log(`Rating: ${this.rating}`);
        console.log(`Stock: ${this.stock}`);
        console.log(`Base Price: $${this.price.toFixed(2)}`);
        console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
        console.log(`Tax: $${tax.toFixed(2)}`);
        console.log(`Final Price: $${(discountedPrice + tax).toFixed(2)}`);
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map