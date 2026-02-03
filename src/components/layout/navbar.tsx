
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Briefcase, Code, GraduationCap, Mail, UserCircle, FileText, FlaskConical } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home", icon: UserCircle },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#research", label: "Research", icon: FlaskConical },
  { href: "#projects", label: "Projects", icon: Code },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#achievements", label: "Achievements", icon: FileText },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinkItem = ({ href, label, Icon }: { href: string; label: string; Icon: React.ElementType }) => (
    <Link
      href={href}
      className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md"
      onClick={() => setIsOpen(false)}
    >
      <Icon className="mr-2 h-4 w-4 text-accent" />
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-headline text-xl font-bold text-primary">
            Siddhi
          </span>
        </Link>
        
        <nav className="hidden md:flex gap-2">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={link.label} Icon={link.icon} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLinkItem key={link.href} href={link.href} label={link.label} Icon={link.icon} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
