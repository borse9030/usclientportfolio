"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Zap, Shield, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

export default function ZuppaCaseStudy() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#0A0A0A] pt-32">
      
      {/* Header */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-20">
        <Link href="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-sm font-semibold">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest border border-orange-500/30">
              Flagship SaaS
            </span>
            <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs font-bold uppercase tracking-widest border border-[#10B981]/30 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              Live in 10+ Shops
            </span>
          </div>

          <h1 className="text-[3rem] md:text-[5rem] font-black text-white leading-[0.9] tracking-tight uppercase mb-6">
            Zuppa <span className="text-orange-500">Smart QR.</span>
          </h1>

          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-2xl leading-relaxed">
            A revolutionary QR-based ordering system designed specifically for modern restaurants and hotels. Zero-latency syncing, deep analytics, and an irresistible customer interface.
          </p>
        </motion.div>
      </section>

      {/* Hero Image */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl mx-auto px-6 mb-32"
      >
        <div className="relative w-full aspect-[16/10] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(249,115,22,0.15)]">
          <Image 
            src="/zuppa-showcase.png" 
            alt="Zuppa Smart QR System Interface" 
            fill 
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
        </div>
      </motion.section>

      {/* Details */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-32 flex flex-col gap-20">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20 border-b border-white/10">
          <div className="flex flex-col gap-3">
            <Zap className="text-orange-500" size={32} />
            <h3 className="text-white font-bold text-xl uppercase tracking-tight">Zero-Latency</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">Instantly syncs customer orders directly to the kitchen display system without any manual intervention.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Smartphone className="text-orange-500" size={32} />
            <h3 className="text-white font-bold text-xl uppercase tracking-tight">App-less UI</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">No downloads required. Customers scan the QR code and are immediately immersed in a premium, native-feeling menu.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Shield className="text-orange-500" size={32} />
            <h3 className="text-white font-bold text-xl uppercase tracking-tight">Enterprise Scale</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">Built on a robust, highly-scalable architecture, currently handling daily high-volume traffic across 10+ active locations.</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-4">
            <div className="w-3 h-3 bg-orange-500 rounded-sm shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
            The Problem
          </h2>
          <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
            Traditional hotel and restaurant ordering systems are broken. Waiters waste time running back and forth with paper tickets, mistakes happen, and up-selling is completely reliant on human effort. Standard digital menus are just static PDFs that don't allow customers to actually place orders, causing frustration and lost revenue.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-4">
            <div className="w-3 h-3 bg-orange-500 rounded-sm shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
            The Architecture
          </h2>
          <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">
            Zuppa was engineered to be the central nervous system of a restaurant. By building a custom QR-based web application, customers have the power to browse a beautifully categorized digital menu, customize their dishes, and send orders directly to the kitchen in real-time. 
            <br/><br/>
            The system includes a Live Insights Dashboard for owners to track daily revenue, popular items, and customer analytics, effectively turning a restaurant into a data-driven business.
          </p>
          
          <a 
            href="https://zuppa.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] hover:-translate-y-1"
          >
            Visit Live Platform
            <ArrowUpRight size={24} strokeWidth={3} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
