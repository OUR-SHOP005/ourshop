import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">CompanyName</h3>
            <p className="text-muted-foreground">
              Creating exceptional digital experiences that drive business growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Web Development</li>
              <li className="text-muted-foreground">Mobile Apps</li>
              <li className="text-muted-foreground">UI/UX Design</li>
              <li className="text-muted-foreground">Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">contact@company.com</li>
              <li className="text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-muted-foreground">
                123 Business Street
                <br />
                City, State 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CompanyName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
