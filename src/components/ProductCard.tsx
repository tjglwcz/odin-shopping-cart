import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export const ProductCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="min-h-32 w-auto"></div>
      </CardContent>
      <CardFooter className="flex gap-4 items-center justify-between">
        <p className="text-xl font-semibold">$100</p>
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};
