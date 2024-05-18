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
  image: string;
  price: number;
}

export const ProductCard = ({
  name,
  category,
  image,
  price,
}: productCardProps) => {
  return (
    <Card className="h-full flex flex-col justify-center">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center">
        <div className="flex justify-center py-8">
          <img src={image} alt="" className="object-fit max-h-64" />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="text-xl font-semibold">${price.toFixed(2)}</p>
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};
