import { Link } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="rounded-lg overflow-hidden group-hover:opacity-80 transition-opacity">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fcdf8698cb7bb47508b0ba42324c3a1c8%2F499c8cce793c4b21b3adbef5ba6e32ab?format=webp&width=800&height=1200"
                  alt="Logo"
                  className="w-10 h-10 object-cover"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-lg text-foreground">Engr. Inayat ullah</span>
                <span className="text-xs text-muted-foreground">Engineer & Software Developer</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/projects" className="nav-link">Projects</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
              <Link
                to="/"
                className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Inayat Ullah</h3>
              <p className="text-muted-foreground">Electrical Engineer & Full-stack Developer</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Location: Peshawar, Pakistan</li>
                <li>Company: Peshawar Electric Supply Company</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Inayat Ullah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
