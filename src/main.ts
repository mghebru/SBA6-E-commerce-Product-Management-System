import { fetchProducts } from "./services/apiService";
import { Product } from "./models/product";
import { handleError } from "./utils/errorHandler";

//fetch product data and convert into product objects
async function main(): Promise<void> {
  try {
    //fetching 
    const productsData = await fetchProducts();
    
    //convert data
    const products = productsData.map(
      (p) =>
        new Product(
          p.id,
          p.title,
          p.price,
          p.discountPercentage,
          p.category,
          p.rating,
          p.stock
        )
    );
    //display details for each product
    products.forEach((product) => product.displayDetails());
  } catch (error) {
    //error handling
    handleError(error);
  }
}
//execute functiong
main();
