"use client"

import { Link} from "react-router-dom"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { Home, Compass, BarChart2, Info, User, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)


  const navItems = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Explore", path: "/explore", icon: <Compass className="h-4 w-4 mr-2" /> },
    { name: "Depth", path: "/depth", icon: <BarChart2 className="h-4 w-4 mr-2" /> },
    { name: "About", path: "/about", icon: <Info className="h-4 w-4 mr-2" /> },
    { name: "Profile", path: "/profile", icon: <User className="h-4 w-4 mr-2" /> },
  ]

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl flex items-center">
            <BarChart2 className="h-6 w-6 mr-2" />
            <span className="hidden sm:inline">TradePulse</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center text-sm font-medium transition-colors hover:text-primary"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center py-2 text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

