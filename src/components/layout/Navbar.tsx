"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[600px] md:w-auto"
    >
      <div className="flex items-center justify-between md:justify-center gap-2 md:gap-8 px-4 md:px-6 py-3 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(255,90,42,0.15)] rounded-full w-full">
        
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FF5A2A] rounded-sm shadow-[0_0_10px_rgba(255,90,42,0.5)]" />
          <span className="text-white font-black tracking-tighter text-base md:text-lg hidden sm:block">BHAVESH.</span>
        </Link>

        <div className="w-[1px] h-4 bg-white/20 hidden sm:block" />

        <div className="flex items-center gap-4 md:gap-6">
          <Link 
            href="/" 
            className={`text-xs md:text-sm font-semibold transition-colors ${pathname === "/" ? "text-white" : "text-white/50 hover:text-white"}`}
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className={`text-xs md:text-sm font-semibold transition-colors ${pathname === "/projects" ? "text-white" : "text-white/50 hover:text-white"}`}
          >
            Projects
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <a 
            href="https://wa.me/919529185458?text=Hi%20Bhavesh,%20I'm%20interested%20in%20working%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:text-white transition-all duration-300"
            title="Chat on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
          <button 
            onClick={() => {
              if (pathname === '/') {
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#booking';
              }
            }}
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#10B981] text-[#0A0A0A] font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#0ea5e9] transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)]"
          >
            Book Call
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
