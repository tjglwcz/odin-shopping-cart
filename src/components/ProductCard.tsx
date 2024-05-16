import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

interface productCardProps {
  name: string;
  category: string;
  price: number;
}

export const ProductCard = ({ name, category, price }: productCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="min-h-32 w-auto"></div>
      </CardContent>
      <CardFooter className="flex gap-4 items-center justify-between">
        <p className="text-xl font-semibold">${price}</p>
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};
