import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-[#0A0A0A]">
      <Hero />
      <ValueProp />
      <AnimatedDivider />
      <About />
      <AnimatedDivider />
      <Contact />
      <Footer />
    </main>
  );
}
