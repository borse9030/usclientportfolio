"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    title: "Zuppa Food Delivery",
    category: "Web Application",
    description: "A comprehensive, high-performance food delivery platform designed for seamless user experience and fast ordering.",
    metrics: [
      { label: "Orders", value: "10k+", icon: Users },
      { label: "Load Time", value: "<1s", icon: Zap },
      { label: "Conversion", value: "+15%", icon: TrendingUp },
    ],
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "https://zuppa-the-food-delhivery-app.vercel.app/",
    image: "/zuppa.jpg",
    color: "from-orange-600/20 to-red-600/20",
    border: "group-hover:border-orange-500/50",
  },
  {
    id: 2,
    title: "Bhavesh Skate",
    category: "Interactive Website",
    description: "A dynamic, visually immersive skate brand website featuring high-end scroll animations and premium aesthetics.",
    metrics: [
      { label: "Engagement", value: "+45%", icon: Users },
      { label: "Speed", value: "A+", icon: Zap },
      { label: "Design", value: "Award", icon: Target },
    ],
    tech: ["HTML", "CSS", "JavaScript", "Framer"],
    link: "https://bhaveshskate.netlify.app/",
    image: "/skate.jpg",
    color: "from-blue-600/20 to-purple-600/20",
    border: "group-hover:border-blue-500/50",
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
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="magnetic flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-black/50 border border-white/10 group-hover:border-white/20 transition-colors duration-500 flex items-center justify-center">
           <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
           
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
