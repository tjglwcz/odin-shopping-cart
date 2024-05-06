import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <nav className="flex justify-between content-center min-h-12 p-4 shadow-sm">
      {!isDesktop && (
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Categories</SheetTitle>
              <SheetDescription>
                <ul className="">
                  <li>
                    <Button variant="link">
                      <Link to="/products/">All Products</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link">Electronics</Button>
                  </li>
                  <li>
                    <Button variant="link">Jewelery</Button>
                  </li>
                  <li>
                    <Button variant="link">Men's Clothing</Button>
                  </li>
                  <li>
                    <Button variant="link">Women's Clothing</Button>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )}
      <Button variant="ghost" className="text-xl">
        <Link to="/">Logo</Link>
      </Button>
      <div className="flex gap-2 px-2">
        {isDesktop && (
          <ul className="flex">
            <li>
              <Button variant="link">
                <Link to="/products/">All Products</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">Electronics</Button>
            </li>
            <li>
              <Button variant="link">Jewelery</Button>
            </li>
            <li>
              <Button variant="link">Men's Clothing</Button>
            </li>
            <li>
              <Button variant="link">Women's Clothing</Button>
            </li>
          </ul>
        )}
        <Button variant="ghost" size="icon" className="rounded-full">
          <ShoppingCart />
        </Button>
      </div>
    </nav>
  );
};
