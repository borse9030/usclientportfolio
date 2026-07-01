"use client";

import { useState, useEffect } from "react";
import { format, addDays, isSameDay, startOfDay } from "date-fns";
import { toZonedTime, formatInTimeZone } from "date-fns-tz";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Globe2, Clock, CheckCircle2, User, Link as LinkIcon, Send, ChevronDown } from "lucide-react";

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

  // Mobile specific accordion state for dates
  const [expandedDateIndex, setExpandedDateIndex] = useState<number | null>(0); // Auto expand first date

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

  // Convert IST slots to the client's selected timezone for a specific date
  const generateLocalSlots = (forDate: Date) => {
    if (!forDate) return [];

    return IST_SLOTS.map(time => {
      const [hours, minutes] = time.split(":");
      
      const dateInIST = new Date(forDate);
      dateInIST.setHours(parseInt(hours), parseInt(minutes), 0, 0);

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

  const desktopLocalSlots = selectedDate ? generateLocalSlots(selectedDate) : [];

  return (
    <div className="w-full">
      {/* ======================= */}
      {/* DESKTOP UI (md and up)  */}
      {/* ======================= */}
      <div className="hidden md:flex max-w-4xl mx-auto bg-[#111] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl flex-row">
        
        {/* Left Panel: Info */}
        <div className="w-1/3 bg-[#1A1A1A] p-10 flex flex-col justify-between border-r border-white/5">
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
        <div className="w-2/3 p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1-desktop"
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
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {desktopLocalSlots.map((slot, i) => (
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
                key="step2-desktop"
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

      {/* ======================= */}
      {/* MOBILE UI (hidden md)   */}
      {/* ======================= */}
      <div className="md:hidden w-full bg-[#111] border border-white/10 rounded-[24px] overflow-hidden shadow-2xl flex flex-col">
        
        {/* Mobile Header */}
        <div className="bg-[#1A1A1A] p-5 border-b border-white/5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#FF5A2A]/20 flex items-center justify-center shrink-0">
              <Calendar className="text-[#FF5A2A] w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight leading-tight">
                Strategy Call
              </h3>
              <p className="text-[#10B981] text-[10px] font-bold uppercase tracking-widest mt-1">30 Minutes • Free</p>
            </div>
          </div>
          
          <div className="w-full bg-[#222] rounded-xl p-3 border border-white/5 flex flex-col gap-1.5">
            <label className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Your Timezone</label>
            <select 
              value={clientTz}
              onChange={(e) => setClientTz(e.target.value)}
              className="w-full bg-transparent text-white/90 text-sm outline-none focus:text-[#FF5A2A] transition-colors truncate"
            >
              <option value={clientTz}>{clientTz} (Local)</option>
              <optgroup label="Popular Timezones">
                {POPULAR_TIMEZONES.filter(tz => tz.value !== clientTz).map(tz => (
                  <option key={tz.value} value={tz.value}>{tz.label}</option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        {/* Mobile Interactive Area */}
        <div className="p-4 relative min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1-mobile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-3 h-full"
              >
                <div className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-2 px-1">
                  Select Date & Time
                </div>
                
                {/* Vertical Accordion Dates */}
                <div className="flex flex-col gap-2.5 pb-20">
                  {availableDates.map((date, i) => {
                    const isExpanded = expandedDateIndex === i;
                    const dateSlots = generateLocalSlots(date);
                    
                    return (
                      <div key={i} className="flex flex-col">
                        <button
                          onClick={() => {
                            setExpandedDateIndex(isExpanded ? null : i);
                            setSelectedDate(date);
                            setSelectedSlot(null);
                          }}
                          className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${isExpanded ? 'bg-[#FF5A2A] border-[#FF5A2A] text-white shadow-lg' : 'bg-[#1A1A1A] border-white/5 text-white/70 hover:border-white/20'}`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex flex-col items-center justify-center w-10">
                              <span className="text-[10px] uppercase font-bold opacity-70">{format(date, "MMM")}</span>
                              <span className="text-2xl font-black leading-none my-0.5">{format(date, "d")}</span>
                            </div>
                            <span className="text-sm font-bold uppercase tracking-wide">{format(date, "EEEE")}</span>
                          </div>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-white' : 'text-white/30'}`} />
                        </button>

                        {/* Accordion Content: Timeslots */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-2.5 pb-1 grid grid-cols-2 gap-2">
                                {dateSlots.map((slot, j) => (
                                  <button
                                    key={j}
                                    onClick={() => setSelectedSlot(slot.localTime)}
                                    className={`py-3 rounded-lg border text-sm font-bold transition-all duration-300 ${selectedSlot === slot.localTime && isSameDay(date, selectedDate!) ? 'bg-white text-black border-white' : 'bg-[#222] border-white/5 text-white/70 active:bg-white/10'}`}
                                  >
                                    {slot.localTime}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Sticky Bottom Action */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#111] via-[#111] to-transparent pt-8">
                  <button
                    disabled={!selectedSlot}
                    onClick={() => setStep(2)}
                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-xl ${selectedSlot ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/5 text-white/20'}`}
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.form
                key="step2-mobile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleBook}
                className="flex flex-col gap-6 h-full pb-20"
              >
                <div className="flex items-center justify-between">
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[#FF5A2A] text-xs font-bold uppercase tracking-widest"
                  >
                    ← Back
                  </button>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Step 2 of 2</span>
                </div>

                <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-5 text-sm shadow-inner">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Selected Time</span> <br/>
                  <div className="mt-2 text-base font-bold text-white">
                    {selectedDate ? format(selectedDate, "EEEE, MMM do") : ""} <br/>
                    <span className="text-[#10B981]">{selectedSlot}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <input 
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Your Name *"
                      className="w-full bg-[#222] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-[#FF5A2A]"
                    />
                  </div>
                  
                  <div className="relative">
                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <input 
                      type="text"
                      value={projectUrl}
                      onChange={e => setProjectUrl(e.target.value)}
                      placeholder="Project URL (Optional)"
                      className="w-full bg-[#222] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-[#FF5A2A]"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#111]">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 bg-[#10B981] text-[#0A0A0A] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  >
                    <Send className="w-4 h-4" />
                    Confirm on WhatsApp
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
