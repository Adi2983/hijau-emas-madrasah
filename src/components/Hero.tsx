import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Award, Calendar, UserPlus } from "lucide-react";
import heroImage from "@/assets/hero-madrasah.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-dark/90 via-emerald/70 to-gold/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Madrasah Hijau Emas
              <span className="block text-gold-light text-2xl lg:text-3xl font-normal mt-2">
                Membangun Generasi Islami yang Unggul
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Lembaga pendidikan Islam modern yang mengintegrasikan nilai-nilai Islami 
              dengan ilmu pengetahuan dan teknologi untuk membentuk generasi yang beriman, 
              berilmu, dan berakhlak mulia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-emerald-dark font-semibold shadow-lg">
                <UserPlus className="w-5 h-5 mr-2" />
                Daftar PPDB Online
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                <BookOpen className="w-5 h-5 mr-2" />
                Profil Madrasah
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-4">
              <Users className="w-8 h-8 text-gold-light mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">450+</div>
              <div className="text-sm text-white/80">Siswa Aktif</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-4">
              <BookOpen className="w-8 h-8 text-gold-light mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">35+</div>
              <div className="text-sm text-white/80">Guru Berkualitas</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-4">
              <Award className="w-8 h-8 text-gold-light mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/80">Prestasi</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-4">
              <Calendar className="w-8 h-8 text-gold-light mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">15</div>
              <div className="text-sm text-white/80">Tahun Berdiri</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;