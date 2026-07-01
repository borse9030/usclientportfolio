"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Lightbulb, PenTool, Code, Rocket } from "lucide-react";

const MISSIONS = [
  { id: 1, title: "Mission 1: Discovery", desc: "Understanding your brand, goals, and audience.", icon: Search, color: "bg-blue-500" },
  { id: 2, title: "Mission 2: Strategy", desc: "Mapping the user journey and architecture.", icon: Lightbulb, color: "bg-purple-500" },
  { id: 3, title: "Mission 3: Design", desc: "Crafting the visual identity and UI/UX.", icon: PenTool, color: "bg-pink-500" },
  { id: 4, title: "Mission 4: Development", desc: "Building the engine with clean, modern code.", icon: Code, color: "bg-emerald-500" },
  { id: 5, title: "Mission 5: Launch", desc: "Deploying the final product and igniting growth.", icon: Rocket, color: "bg-orange-500" },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">The Development Quest</h2>
          <p className="text-white/60 text-lg">A structured approach to building impossible-to-ignore websites.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Progress Line Background */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full" />
          
          {/* Active Progress Line */}
          <motion.div 
            className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 -translate-x-1/2 rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          {MISSIONS.map((mission, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={mission.id}
                className={`relative flex items-center mb-24 last:mb-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                {/* Node */}
                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#101010] border-4 border-[#030303] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                  <div className={`w-8 h-8 rounded-full ${mission.color} flex items-center justify-center animate-pulse`}>
                    <mission.icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className="clay-card p-6 md:p-8 hover:border-white/20 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-2">{mission.title}</h3>
                    <p className="text-white/60">{mission.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Mission Complete Animation */}
        <motion.div 
          className="max-w-3xl mx-auto mt-24 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500">
            <div className="px-8 py-4 bg-[#050505] rounded-full">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                Mission Complete. Ready for Launch.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
