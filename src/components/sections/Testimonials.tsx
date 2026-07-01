"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  { id: 1, name: "Sarah Jenkins", role: "CEO, Aura Tech", content: "Bhavesh completely transformed our web presence. The new dashboard increased our user retention by 40%. Absolutely world-class.", color: "from-blue-400 to-indigo-500" },
  { id: 2, name: "Michael Chen", role: "Founder, Lumina Dining", content: "The 3D interactive menu is something our customers can't stop talking about. It feels like magic. Best investment we made this year.", color: "from-orange-400 to-red-500" },
  { id: 3, name: "Elena Rodriguez", role: "Director, Nexus AI", content: "Finding a developer who understands both hardcore performance and premium aesthetics is rare. Bhavesh is that rare talent.", color: "from-emerald-400 to-teal-500" },
  { id: 4, name: "David Kim", role: "VP Marketing, Stellar", content: "Our conversion rates doubled in the first month after launch. The site isn't just beautiful, it's a lead generation machine.", color: "from-purple-400 to-fuchsia-500" },
];

export default function Testimonials() {
  // Duplicate array for infinite scroll effect
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Don't Just Take My Word</h2>
          <p className="text-white/60 text-lg">Hear from the founders and leaders who took their digital presence to the next level.</p>
        </motion.div>
      </div>

      <div className="relative w-full flex items-center">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {marqueeItems.map((testimonial, idx) => (
            <div key={`${testimonial.id}-${idx}`} className="w-[350px] md:w-[450px] shrink-0">
              <div className="clay-card p-8 relative h-full flex flex-col">
                <div className="absolute -top-6 -right-6 text-white/5 rotate-12 pointer-events-none">
                  <Quote size={120} />
                </div>
                
                <p className="text-white/80 text-lg mb-8 relative z-10 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="mt-auto flex items-center gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} shadow-inner border border-white/20`} />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
