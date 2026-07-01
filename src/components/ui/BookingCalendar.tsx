"use client";

import { useState, useEffect } from "react";
import { format, addDays, isSameDay, startOfDay } from "date-fns";
import { toZonedTime, formatInTimeZone } from "date-fns-tz";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Globe2, Clock, CheckCircle2, User, Link as LinkIcon, Send } from "lucide-react";

// Bhavesh's standard IST working hours (e.g. 8 PM to 11 PM IST)
const IST_TIMEZONE = "Asia/Kolkata";
const IST_SLOTS = ["20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"];

const POPULAR_TIMEZONES = [
  { value: "America/New_York", label: "Eastern Time (EST/EDT)" },
  { value: "America/Chicago", label: "Central Time (CST/CDT)" },
  { value: "America/Denver", label: "Mountain Time (MST/MDT)" },
  { value: "America/Los_Angeles", label: "Pacific Time (PST/PDT)" },
  { value: "Europe/London", label: "London (GMT/BST)" },
  { value: "Europe/Paris", label: "Central Europe (CET/CEST)" },
  { value: "Asia/Dubai", label: "Dubai (GST)" },
  { value: "Australia/Sydney", label: "Sydney (AEST/AEDT)" },
  { value: "Asia/Kolkata", label: "India (IST)" }
];

export default function BookingCalendar() {
  const [clientTz, setClientTz] = useState<string>("America/New_York");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  
  // Form State
  const [step, setStep] = useState<1 | 2>(1); // 1: DateTime, 2: Details
  const [name, setName] = useState("");
  const [projectUrl, setProjectUrl] = useState("");

  useEffect(() => {
    // Detect local timezone on mount
    try {
      const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // Just check if it's valid, otherwise fallback
      if (localTz) setClientTz(localTz);
    } catch (e) {
      console.error("Timezone detection failed", e);
    }

    // Generate next 7 days, starting from tomorrow
    const today = startOfDay(new Date());
    const dates = [];
    for (let i = 1; i <= 7; i++) {
      dates.push(addDays(today, i));
    }
    setAvailableDates(dates);
    setSelectedDate(dates[0]); // Default to tomorrow
  }, []);

  // Convert IST slots to the client's selected timezone for the selected date
  const generateLocalSlots = () => {
    if (!selectedDate) return [];

    return IST_SLOTS.map(time => {
      const [hours, minutes] = time.split(":");
      
      // Create a Date object representing this slot in IST
      // We take the selected date, assume it's the date in IST, and set the hours
      const dateInIST = new Date(selectedDate);
      dateInIST.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      // Now we format this IST time into the client's timezone
      try {
        const timeString = formatInTimeZone(dateInIST, clientTz, "h:mm a");
        return { originalIST: time, localTime: timeString, dateInIST };
      } catch (e) {
        return { originalIST: time, localTime: time, dateInIST };
      }
    });
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot || !name) return;

    const formattedDate = format(selectedDate, "EEEE, MMMM do");
    
    const message = `Hi Bhavesh, I'd like to book a free video call.\n\n*Date:* ${formattedDate}\n*Time:* ${selectedSlot} (${clientTz})\n*Name:* ${name}\n*Project/Details:* ${projectUrl || "N/A"}\n\nLooking forward to it!`;
    
    const whatsappUrl = `https://wa.me/917972565911?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const localSlots = generateLocalSlots();

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#111] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
      
      {/* Left Panel: Info */}
      <div className="w-full md:w-1/3 bg-[#1A1A1A] p-5 sm:p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
        <div>
          <div className="w-16 h-16 rounded-full bg-[#FF5A2A]/20 flex items-center justify-center mb-6">
            <Calendar className="text-[#FF5A2A] w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
            Book a Strategy Call
          </h3>
          <p className="text-[#A1A1AA] text-sm font-medium mb-6">
            Let's discuss your project, architecture, and how a premium web presence can scale your revenue.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/70 text-sm font-medium">
              <Clock className="w-5 h-5 text-[#10B981]" />
              30 Min Video Call
            </div>
            <div className="flex items-center gap-3 text-white/70 text-sm font-medium">
              <Globe2 className="w-5 h-5 text-[#3B82F6]" />
              Google Meet / Zoom
            </div>
            <div className="flex items-center gap-3 text-white/70 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#FACC15]" />
              Free Consultation
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Interactive Form */}
      <div className="w-full md:w-2/3 p-5 sm:p-8 md:p-10 relative overflow-hidden">
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col h-full"
            >
              <h4 className="text-white font-bold mb-6 flex items-center justify-between">
                <span>Select a Date & Time</span>
                
                {/* Timezone Selector */}
                <select 
                  value={clientTz}
                  onChange={(e) => setClientTz(e.target.value)}
                  className="bg-[#222] border border-white/10 text-white/70 text-xs rounded-md px-2 py-1 outline-none focus:border-[#FF5A2A] transition-colors max-w-[150px] truncate"
                >
                  <option value={clientTz}>{clientTz} (Local)</option>
                  <optgroup label="Popular Timezones">
                    {POPULAR_TIMEZONES.filter(tz => tz.value !== clientTz).map(tz => (
                      <option key={tz.value} value={tz.value}>{tz.label}</option>
                    ))}
                  </optgroup>
                </select>
              </h4>

              {/* Date Selector (Horizontal Scroll) */}
              <div className="flex gap-3 overflow-x-auto pb-4 mb-6 hide-scrollbar scroll-smooth">
                {availableDates.map((date, i) => {
                  const isSelected = selectedDate && isSameDay(date, selectedDate);
                  return (
                    <button
                      key={i}
                      onClick={() => { setSelectedDate(date); setSelectedSlot(null); }}
                      className={`flex-shrink-0 flex flex-col items-center justify-center w-20 h-24 rounded-2xl border transition-all duration-300 ${isSelected ? 'bg-[#FF5A2A] border-[#FF5A2A] text-white shadow-[0_0_20px_rgba(255,90,42,0.3)]' : 'bg-[#222] border-white/5 text-white/50 hover:border-white/20'}`}
                    >
                      <span className="text-xs uppercase font-bold tracking-widest mb-1">{format(date, "MMM")}</span>
                      <span className="text-2xl font-black">{format(date, "d")}</span>
                      <span className="text-[10px] uppercase font-bold mt-1">{format(date, "EEE")}</span>
                    </button>
                  );
                })}
              </div>

              {/* Time Slots */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {localSlots.map((slot, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSlot(slot.localTime)}
                    className={`py-3 rounded-xl border text-sm font-bold transition-all duration-300 ${selectedSlot === slot.localTime ? 'bg-white text-black border-white' : 'bg-[#222] border-white/5 text-white/70 hover:border-white/20 hover:bg-[#2A2A2A]'}`}
                  >
                    {slot.localTime}
                  </button>
                ))}
              </div>

              <button
                disabled={!selectedSlot}
                onClick={() => setStep(2)}
                className={`mt-auto w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 ${selectedSlot ? 'bg-white text-black hover:bg-gray-200 cursor-pointer' : 'bg-white/5 text-white/20 cursor-not-allowed'}`}
              >
                Next Step
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleBook}
              className="flex flex-col h-full"
            >
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="text-[#FF5A2A] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors mb-8 text-left"
              >
                ← Back
              </button>

              <h4 className="text-white font-bold mb-2">Final Details</h4>
              <p className="text-white/50 text-sm mb-6">
                You're booking a call for <strong className="text-white">{selectedDate ? format(selectedDate, "MMM do") : ""} at {selectedSlot}</strong>
              </p>

              <div className="space-y-4 mb-8">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your Name *"
                    className="w-full bg-[#222] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-[#FF5A2A] transition-colors"
                  />
                </div>
                
                <div className="relative">
                  <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input 
                    type="text"
                    value={projectUrl}
                    onChange={e => setProjectUrl(e.target.value)}
                    placeholder="Project URL or Details (Optional)"
                    className="w-full bg-[#222] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-[#FF5A2A] transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-auto w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 bg-[#10B981] hover:bg-[#0EA5E9] text-white flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.4)]"
              >
                <Send className="w-4 h-4" />
                Confirm on WhatsApp
              </button>
            </motion.form>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
