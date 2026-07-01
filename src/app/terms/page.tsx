"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/sections/Footer";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-12">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>

          <div className="space-y-12 text-[#A1A1AA] font-medium leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing this website and utilizing our web development services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Provided</h2>
              <p className="mb-4">
                Bhavesh Studio offers premium web development, design, and technical consulting services. The specific scope of work, deliverables, timelines, and compensation will be outlined in a separate Statement of Work (SOW) or freelance contract agreed upon by both parties before the commencement of any project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property Rights</h2>
              <p>
                Unless explicitly stated otherwise in a separate written agreement, all preliminary designs, source code, and assets created during the project remain the intellectual property of Bhavesh Studio until final payment is received in full. Upon receipt of final payment, intellectual property rights for the final delivered product are transferred to the client. We reserve the right to showcase completed non-NDA projects in our portfolio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p>
                Payment schedules are negotiated on a per-project basis and outlined in the project contract. Generally, a non-refundable deposit is required to secure your spot in our schedule. Failure to adhere to the payment schedule may result in the suspension or termination of development services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Client Responsibilities</h2>
              <p>
                The client agrees to provide all necessary assets, copy, logos, and server access required to complete the project in a timely manner. Delays in providing these materials will result in corresponding delays to the project timeline.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                In no event shall Bhavesh Studio be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. Material changes will be indicated by updating the "Last Updated" date at the top of this page. Your continued use of the website after any such changes constitutes your acceptance of the new Terms of Service.
              </p>
            </section>

          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
