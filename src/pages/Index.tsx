import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Announcements from "@/components/Announcements";
import QuickMenu from "@/components/QuickMenu";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <QuickMenu />
        <Announcements />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
