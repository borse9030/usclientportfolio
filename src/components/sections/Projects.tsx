"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Aura SaaS Platform",
    category: "Web Application",
    description: "A complete redesign of a financial SaaS dashboard, improving user retention by 40%.",
    metrics: [
      { label: "Retention", value: "+40%", icon: Users },
      { label: "Load Time", value: "-1.2s", icon: Zap },
      { label: "Conversion", value: "+15%", icon: TrendingUp },
    ],
    tech: ["Next.js", "Tailwind", "Framer Motion", "Supabase"],
    color: "from-blue-600/20 to-purple-600/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    id: 2,
    title: "Lumina Restaurant QR",
    category: "Interactive System",
    description: "A contactless ordering system with 3D menu previews, increasing average order value.",
    metrics: [
      { label: "AOV", value: "+22%", icon: TrendingUp },
      { label: "Orders", value: "10k+", icon: Users },
    ],
    tech: ["React", "Three.js", "Node.js", "Stripe"],
    color: "from-orange-600/20 to-red-600/20",
    border: "group-hover:border-orange-500/50",
  },
  {
    id: 3,
    title: "Nexus AI Dashboard",
    category: "AI Integration",
    description: "An AI-powered analytics dashboard that processes millions of data points in real-time.",
    metrics: [
      { label: "Speed", value: "10x", icon: Zap },
      { label: "Accuracy", value: "99.9%", icon: Target },
    ],
    tech: ["Next.js", "Python", "TensorFlow", "WebSockets"],
    color: "from-emerald-600/20 to-teal-600/20",
    border: "group-hover:border-emerald-500/50",
  }
];

// Placeholder target icon since it wasn't imported from lucide-react in the original array
import { Target } from "lucide-react";

function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ scale, opacity }}
      className={`group relative clay-card overflow-hidden rounded-[40px] border border-white/5 transition-colors duration-500 ${project.border} mb-16 last:mb-0`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2 block">{project.category}</span>
            <h3 className="text-4xl md:text-5xl font-black text-white">{project.title}</h3>
          </div>
          
          <p className="text-lg text-white/70 mb-8">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 absolute bottom-8 lg:relative lg:bottom-auto">
            <button className="magnetic flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="magnetic flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors">
              Case Study
            </button>
          </div>
        </div>
        
        <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-black/50 border border-white/10 group-hover:border-white/20 transition-colors duration-500 flex items-center justify-center">
           {/* Placeholder for actual project image/video - abstract visualization instead */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
           <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-2xl absolute animate-pulse" />
           
           {/* Metrics Overlay on Hover */}
           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="bg-white/10 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                    <metric.icon className="w-6 h-6 text-white mb-2" />
                    <span className="text-2xl font-bold text-white">{metric.value}</span>
                    <span className="text-xs text-white/60 uppercase tracking-wider">{metric.label}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Selected Worlds</h2>
          <p className="text-white/60 max-w-2xl text-lg md:text-xl">
            A collection of premium digital experiences crafted for businesses that demand excellence.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
