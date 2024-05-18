import { ProductCard } from "@/components/ProductCard";
import { useEffect, useState } from "react";
export const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((items) => setProducts(items));
  }, []);

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
