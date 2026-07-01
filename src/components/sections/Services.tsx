"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Palette, Code2, Rocket, LayoutDashboard, QrCode, Bot, Zap, Search } from "lucide-react";

const SERVICES = [
  { id: 1, title: "UI/UX Design", icon: Palette, color: "from-pink-500 to-rose-500" },
  { id: 2, title: "Website Development", icon: Code2, color: "from-blue-500 to-cyan-500" },
  { id: 3, title: "Landing Pages", icon: Rocket, color: "from-purple-500 to-indigo-500" },
  { id: 4, title: "SaaS Dashboards", icon: LayoutDashboard, color: "from-emerald-500 to-teal-500" },
  { id: 5, title: "Restaurant QR Systems", icon: QrCode, color: "from-orange-500 to-amber-500" },
  { id: 6, title: "AI Integrations", icon: Bot, color: "from-violet-500 to-fuchsia-500" },
  { id: 7, title: "Performance Optimization", icon: Zap, color: "from-yellow-400 to-orange-500" },
  { id: 8, title: "SEO", icon: Search, color: "from-green-400 to-emerald-600" },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="clay-card h-full p-8 flex flex-col items-center justify-center text-center gap-6 cursor-pointer"
      >
        <div 
          className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent"
          style={{ transform: "translateZ(1px)" }}
        />
        
        <motion.div 
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg shadow-black/50`}
          style={{ transform: "translateZ(50px)" }}
        >
          <service.icon className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.h3 
          className="text-xl font-bold text-white"
          style={{ transform: "translateZ(30px)" }}
        >
          {service.title}
        </motion.h3>
        
        <div 
          className={`absolute -inset-0.5 rounded-[26px] bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} 
        />
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Expertise That Scales</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            I don't just build websites; I engineer digital experiences that drive growth, engagement, and conversions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
