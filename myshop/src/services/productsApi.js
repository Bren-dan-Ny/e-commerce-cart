export const getProducts = async () => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=190"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
