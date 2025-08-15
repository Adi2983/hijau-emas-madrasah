import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Megaphone } from "lucide-react";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "Pendaftaran PPDB Online Tahun 2024/2025",
      content: "Pendaftaran peserta didik baru untuk tahun ajaran 2024/2025 telah dibuka. Daftar sekarang melalui sistem online.",
      date: "2024-01-15",
      category: "PPDB",
      urgent: true
    },
    {
      id: 2,
      title: "Peringatan Maulid Nabi Muhammad SAW",
      content: "Madrasah akan mengadakan peringatan Maulid Nabi Muhammad SAW pada hari Jumat, 19 Januari 2024.",
      date: "2024-01-10",
      category: "Kegiatan",
      urgent: false
    },
    {
      id: 3,
      title: "Libur Semester Genap",
      content: "Pengumuman jadwal libur semester genap dan persiapan semester baru tahun ajaran 2024/2025.",
      date: "2024-01-08",
      category: "Akademik",
      urgent: false
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Megaphone className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Pengumuman Terbaru
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dapatkan informasi terkini tentang kegiatan dan program madrasah
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8">
          {announcements.map((announcement, index) => (
            <Card 
              key={announcement.id} 
              className={`group hover:shadow-lg transition-all duration-300 border-l-4 ${
                announcement.urgent 
                  ? 'border-l-accent hover:border-l-accent-dark bg-accent/5' 
                  : 'border-l-primary hover:border-l-primary-dark'
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-200">
                      {announcement.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant={announcement.urgent ? "destructive" : "secondary"}>
                        {announcement.category}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(announcement.date).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="lg:opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary hover:text-primary-dark"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  {announcement.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Lihat Semua Pengumuman
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Announcements;