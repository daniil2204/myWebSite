import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import EmailSection from "@/components/EmailSection/EmailSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer/Footer";
import Achievements from "@/components/Achievements/Achievements";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212}">
        <Navbar />
        <div className="container mx-auto mt-24 px-12 py-4">
          <HeroSection />
          {/* <Achievements /> */}
          <About />
          <Projects />
          <EmailSection />
        </div>
        <Footer />
      </main>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        theme="dark"
      />
    </>
  );
}
