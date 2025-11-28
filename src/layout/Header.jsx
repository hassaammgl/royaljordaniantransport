import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            Royal Jordanian Transport
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("fleet")}
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              Fleet
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              size="sm"
            >
              Contact
            </Button>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-primary">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-full p-0">
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("fleet")}
                  className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  Fleet
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="default"
                  size="lg"
                  className="mt-4"
                >
                  Contact
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

