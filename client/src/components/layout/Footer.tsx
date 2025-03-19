import { CONTACT_INFO } from "@/lib/constants";
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <Link href="/">
              <a className="text-2xl font-bold">Company</a>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Building amazing digital experiences for businesses worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about">
                <a className="text-muted-foreground hover:text-primary transition">
                  About Us
                </a>
              </Link>
              <Link href="/services">
                <a className="text-muted-foreground hover:text-primary transition">
                  Services
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="text-muted-foreground hover:text-primary transition">
                  Portfolio
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-muted-foreground hover:text-primary transition">
                  Contact
                </a>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_INFO.email}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <Phone className="h-4 w-4" />
                {CONTACT_INFO.phone}
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {CONTACT_INFO.address}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={CONTACT_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={CONTACT_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={CONTACT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
