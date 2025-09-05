"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShieldCheck } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/cases", label: "Case Studies" }, // Added Case Studies between Pricing and Blog
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors relative",
        "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary",
        "after:transition-all after:duration-300 hover:after:w-full",
        pathname === href ? "text-primary" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </Link>
  )

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        "border-b border-white/10",
        isScrolled ? "bg-[#0B1117]/70 backdrop-blur-lg" : "bg-transparent backdrop-blur-md",
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 hover:opacity-90 transition">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="font-bold">RedCellAdvisory</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button
            asChild
            className="rounded-lg bg-primary text-white px-4 py-2 font-medium shadow-md hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            <Link href="/submit">Run a Check</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-[#0B1117]/95 backdrop-blur-lg border-white/10"
            >
              <nav className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
