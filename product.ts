import { calculateDiscount } from "../utils/discountCalculator";
import { calculateTax } from "../utils/taxCalculator";

//represents a product in the system
export class Product {
  //new product instance
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public discountPercentage: number,
    public category: string,
    public rating: number,
    public stock: number
  ) {}

  //calculate price after applying discounts
  getPriceWithDiscount(): number {
    const discountAmount = calculateDiscount(
      this.price,
      this.discountPercentage
    );
    return this.price - discountAmount;
  }

  //format product details and display to the console
  displayDetails(): void {
    const discountedPrice = this.getPriceWithDiscount();
    const tax = calculateTax(discountedPrice, this.category);

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