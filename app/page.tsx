import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212}">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <About />
      </div>
    </main>
  );
}
