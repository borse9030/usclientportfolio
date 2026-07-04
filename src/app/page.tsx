import Hero from "@/components/sections/Hero";
import dynamic from 'next/dynamic';

const ValueProp = dynamic(() => import('@/components/sections/ValueProp'));
const About = dynamic(() => import('@/components/sections/About'));
const Contact = dynamic(() => import('@/components/sections/Contact'));
const Footer = dynamic(() => import('@/components/sections/Footer'));
const AnimatedDivider = dynamic(() => import('@/components/ui/AnimatedDivider'));

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
