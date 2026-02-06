import { AppError } from "../utils/errorHandler";

const API_URL = "https://dummyjson.com/products";

export async function fetchProducts(): Promise<any[]> {
  try {
    //send request to products api
    const response = await fetch(API_URL);
    //handle unsuccessful response
    if (!response.ok) {
      throw new AppError(
        `Failed to fetch products. Status: ${response.status}`
      );
    }
    //parse response
    const data = await response.json();
    //return products array
    return data.products;
  } catch (error) {
    throw error;
  }
}
