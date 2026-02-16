import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen pt-16 md:pt-18">
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
