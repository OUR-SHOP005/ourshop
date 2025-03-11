import { useState } from "react";
import { Link, useLocation } from "wouter";
import { MoonIcon, SunIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 my-2">
        <Link href="/">
          <a className="flex items-center gap-3">
            <img 
              src="/assets/logo.jpeg" 
              alt="Our Shop Logo" 
              className="h-10 w-auto mr-2"
            />
            <span className="text-xl font-semibold">OUR SHOP</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 pt-8">
              {NAV_ITEMS.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`text-lg font-medium ${
                      location === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "light" ? (
                  <MoonIcon className="h-5 w-5" />
                ) : (
                  <SunIcon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}