import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-green-400"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Terminal className="h-8 w-8 text-green-400" />
            <span className="ml-2 text-xl font-mono font-bold text-green-400">
              PORTFOLIO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 font-mono">
              <button
                onClick={() => scrollToSection("home")}
                className="text-green-400 hover:text-green-300 transition-colors duration-300 border border-transparent hover:border-green-400 px-3 py-1"
              >
                [HOME]
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-green-400 hover:text-green-300 transition-colors duration-300 border border-transparent hover:border-green-400 px-3 py-1"
              >
                [PROJECTS]
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-400 border border-green-400 p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-black border border-green-400 rounded transition-all duration-300 transform origin-top z-40 overflow-hidden
            ${
              isOpen
                ? "scale-100 opacity-100 pointer-events-auto mt-2 py-4 mb-4 max-h-40"
                : "scale-95 opacity-0 pointer-events-none mt-0 py-0 mb-0 max-h-0"
            }
          `}
        >
          <button
            onClick={() => scrollToSection("home")}
            className="block w-full text-left px-4 py-2 text-green-400 hover:text-green-300 hover:bg-green-400/10 font-mono"
          >
            [HOME]
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block w-full text-left px-4 py-2 text-green-400 hover:text-green-300 hover:bg-green-400/10 font-mono"
          >
            [PROJECTS]
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
