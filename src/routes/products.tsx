import { ProductCard } from "@/components/ProductCard";
import { useEffect, useState } from "react";
export const Products = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<any[]>([]);

  function fetchItems(cat: string) {
    if (cat === "electronics") {
      return fetch(`https://fakestoreapi.com/products/category/electronics`, {
        mode: "cors",
      });
    } else if (cat === "jewelery") {
      return fetch(`https://fakestoreapi.com/products/category/jewelery`, {
        mode: "cors",
      });
    } else if (cat === `men's clothing`) {
      return fetch(
        `https://fakestoreapi.com/products/category/men's%20clothing`,
        { mode: "cors" }
      );
    } else if (cat === `women's clothing`) {
      return fetch(
        `https://fakestoreapi.com/products/category/women's%20clothing`,
        { mode: "cors" }
      );
    } else {
      return fetch(`https://fakestoreapi.com/products`);
    }
  }

  useEffect(() => {
    fetchItems(category)
      .then((res) => res.json())
      .then((items) => setProducts(items));
  }, [category]);

  return (
    <div className="grid auto-cols-fr p-4 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.title}
          category={product.category}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};
