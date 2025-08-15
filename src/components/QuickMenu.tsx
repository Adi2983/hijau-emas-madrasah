import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Calendar, 
  Camera, 
  FileDown, 
  BarChart3, 
  CreditCard,
  BookOpen,
  Video
} from "lucide-react";

const QuickMenu = () => {
  const menuItems = [
    {
      icon: UserPlus,
      title: "PPDB Online",
      description: "Daftar siswa baru online",
      color: "bg-gradient-to-br from-emerald to-emerald-light",
      href: "/ppdb"
    },
    {
      icon: Calendar,
      title: "Agenda Madrasah",
      description: "Jadwal kegiatan madrasah",
      color: "bg-gradient-to-br from-gold to-gold-light",
      href: "/agenda"
    },
    {
      icon: Camera,
      title: "Galeri Foto",
      description: "Dokumentasi kegiatan",
      color: "bg-gradient-to-br from-emerald-dark to-emerald",
      href: "/galeri"
    },
    {
      icon: Video,
      title: "Video Profil",
      description: "Video kegiatan madrasah",
      color: "bg-gradient-to-br from-gold-dark to-gold",
      href: "/video"
    },
    {
      icon: FileDown,
      title: "Download",
      description: "Unduh dokumen penting",
      color: "bg-gradient-to-br from-emerald to-emerald-dark",
      href: "/download"
    },
    {
      icon: BarChart3,
      title: "Survei IKL/IPK",
      description: "Survei kepuasan layanan",
      color: "bg-gradient-to-br from-gold to-emerald",
      href: "/survei"
    },
    {
      icon: CreditCard,
      title: "Cek SPP",
      description: "Status pembayaran SPP",
      color: "bg-gradient-to-br from-emerald-light to-gold-light",
      href: "/spp"
    },
    {
      icon: BookOpen,
      title: "E-Learning",
      description: "Portal pembelajaran online",
      color: "bg-gradient-to-br from-gold-dark to-emerald-dark",
      href: "/elearning"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Menu Cepat
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Akses layanan madrasah dengan mudah dan cepat
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Butuh bantuan? Hubungi admin madrasah
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Hubungi Admin
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickMenu;