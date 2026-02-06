import { AppError } from "../utils/errorHandler";

const API_URL = "https://dummyjson.com/products";

export async function fetchProducts(): Promise<any[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new AppError(
        `Failed to fetch products. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.products;
  } catch (error) {
    throw error;
  }
}