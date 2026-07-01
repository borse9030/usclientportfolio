"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#0A0A0A] pt-32">
      <div className="max-w-4xl mx-auto px-6 w-full mb-32 flex-grow">
        
        <Link href="/" className="text-[#FF5A2A] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors mb-12 inline-block">
          ← Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-12">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>

          <div className="space-y-12 text-[#A1A1AA] font-medium leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us when you use our website, specifically when you fill out our booking form or contact us via WhatsApp. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li>Your name and contact information.</li>
                <li>Project details and URLs provided during the booking process.</li>
                <li>Communication history via WhatsApp or email.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                The information we collect is used solely for the purpose of providing web development and consulting services to you. Specifically, we use your data to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li>Schedule and facilitate strategy calls.</li>
                <li>Understand your project requirements and prepare proposals.</li>
                <li>Communicate with you regarding project updates, billing, and deliverables.</li>
                <li>Improve our website performance and user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Sharing and Third Parties</h2>
              <p>
                <strong>We do not sell, trade, or rent your personal information to third parties.</strong> We may share your data only with trusted third-party service providers (such as hosting platforms or analytics tools) strictly for the purpose of operating our business, provided those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. WhatsApp Communication</h2>
              <p>
                By using the "Book a Call" or "Chat on WhatsApp" features, you acknowledge that you are navigating away from our website to a third-party application (WhatsApp). Any data shared on WhatsApp is subject to WhatsApp's own Privacy Policy and Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking</h2>
              <p>
                Our website may use standard "cookies" to enhance user experience and analyze site traffic. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy, please contact us directly via the WhatsApp link provided on our website.
              </p>
            </section>

          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
