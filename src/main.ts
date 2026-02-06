import { fetchProducts } from "./services/apiService";
import { Product } from "./models/product";
import { handleError } from "./utils/errorHandler";

async function main(): Promise<void> {
  try {
    const productsData = await fetchProducts();

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

    products.forEach((product) => product.displayDetails());
  } catch (error) {
    handleError(error);
  }
}

main();