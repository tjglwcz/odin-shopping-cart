import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 bg-background">
        <Navbar />
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
