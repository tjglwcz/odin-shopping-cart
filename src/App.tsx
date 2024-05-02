import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 bg-background">
        <Navbar />
      </header>
      <main className="h-screen">a</main>
      <Footer />
    </div>
  );
}

export default App;
