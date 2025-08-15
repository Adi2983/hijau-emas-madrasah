import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Youtube, 
  Instagram,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Informasi Madrasah */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center shadow-lg">
                <span className="text-emerald-dark font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Madrasah Hijau Emas</h3>
                <p className="text-emerald-light">Pendidikan Islami Modern</p>
              </div>
            </div>
            
            <p className="text-emerald-light leading-relaxed mb-6 max-w-md">
              Lembaga pendidikan Islam yang mengintegrasikan nilai-nilai Islami dengan 
              ilmu pengetahuan modern untuk membentuk generasi yang beriman, berilmu, 
              dan berakhlak mulia.
            </p>

            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-emerald-light hover:text-gold hover:bg-emerald/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-emerald-light hover:text-gold hover:bg-emerald/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-emerald-light hover:text-gold hover:bg-emerald/20">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gold">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-emerald-light">
                    Jl. Pendidikan No. 123<br />
                    Kota Hijau, Provinsi Emas<br />
                    Indonesia 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <p className="text-emerald-light">(021) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <p className="text-emerald-light">info@madrasahhijauemas.sch.id</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="text-emerald-light">
                    <strong>Senin - Jumat:</strong> 07:00 - 16:00<br />
                    <strong>Sabtu:</strong> 07:00 - 12:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Cepat */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gold">Menu Cepat</h4>
            <nav className="space-y-3">
              {[
                { label: "PPDB Online", href: "/ppdb" },
                { label: "Profil Madrasah", href: "/profil" },
                { label: "Berita Terbaru", href: "/berita" },
                { label: "Agenda Kegiatan", href: "/agenda" },
                { label: "Galeri Foto", href: "/galeri" },
                { label: "Download", href: "/download" }
              ].map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  className="justify-start text-emerald-light hover:text-gold hover:bg-emerald/20 p-0 h-auto"
                >
                  {item.label}
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald/30 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-emerald-light text-sm">
              © 2024 Madrasah Hijau Emas. Semua hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 text-sm">
              <Button variant="ghost" size="sm" className="text-emerald-light hover:text-gold p-0 h-auto">
                Kebijakan Privasi
              </Button>
              <Button variant="ghost" size="sm" className="text-emerald-light hover:text-gold p-0 h-auto">
                Syarat & Ketentuan
              </Button>
              <Button variant="ghost" size="sm" className="text-emerald-light hover:text-gold p-0 h-auto">
                Sitemap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;