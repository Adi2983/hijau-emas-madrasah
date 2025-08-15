import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Users, Newspaper, Calendar, Camera, Video, FileDown, UserPlus, BarChart3, CreditCard } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Beranda", href: "/" },
    { icon: User, label: "Profil", href: "/profil" },
    { icon: Users, label: "Struktur", href: "/struktur" },
    { icon: Newspaper, label: "Berita", href: "/berita" },
    { icon: Calendar, label: "Agenda", href: "/agenda" },
    { icon: Camera, label: "Galeri", href: "/galeri" },
    { icon: Video, label: "Video", href: "/video" },
    { icon: UserPlus, label: "PPDB", href: "/ppdb" },
    { icon: FileDown, label: "Download", href: "/download" },
    { icon: BarChart3, label: "Survei", href: "/survei" },
    { icon: CreditCard, label: "SPP", href: "/spp" },
  ];

  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald to-gold rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Madrasah Hijau Emas</h1>
              <p className="text-xs text-muted-foreground">Pendidikan Islami Modern</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {menuItems.slice(0, 6).map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-primary hover:bg-secondary/50"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
            <Button variant="default" size="sm" className="ml-4">
              Login
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background absolute left-0 right-0 shadow-lg">
            <nav className="container mx-auto px-4 py-4 grid grid-cols-2 gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  className="justify-start text-foreground hover:text-primary hover:bg-secondary/50"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
              <Button variant="default" size="sm" className="col-span-2 mt-2">
                Login
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;