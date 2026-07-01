"use client";

import { motion } from "framer-motion";

export default function AnimatedDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden my-20 md:my-32">
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
        className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-[#FF5A2A]/50 to-transparent blur-[2px]"
      />
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          repeatDelay: 1,
          delay: 0.1
        }}
        className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-transparent via-white to-transparent"
      />
    </div>
  );
}
