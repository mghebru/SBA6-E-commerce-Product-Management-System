export declare class Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;
    rating: number;
    stock: number;
    constructor(id: number, title: string, price: number, discountPercentage: number, category: string, rating: number, stock: number);
    getPriceWithDiscount(): number;
    displayDetails(): void;
}
//# sourceMappingURL=product.d.ts.map