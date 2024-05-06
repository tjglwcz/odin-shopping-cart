import { ProductCard } from "@/components/ProductCard";
export const Products = () => {
  let names = [
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
    "card7",
    "card8",
    "card9",
    "card10",
  ];
  return (
    <div className="grid auto-cols-fr p-4 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8">
      {names.map((name) => (
        <ProductCard />
      ))}
    </div>
  );
};
