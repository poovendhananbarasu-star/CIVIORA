import React, { useState } from 'react';
import { Lightbulb, Users, Send, BarChart3, Target } from 'lucide-react';

const STEPS = [
  {
    letter: 'A',
    step: '01',
    title: 'Understand',
    desc: 'Identify institutional priorities and student needs.',
    icon: Lightbulb,
    position: 'top', // content above horizontal axis
    gradient: 'from-[#84cc16] to-[#eab308]', // Lime to warm yellow/amber
    glow: 'rgba(132, 204, 22, 0.35)',
    border: 'border-lime-400/40',
    accentColor: '#84cc16',
    tagBg: 'bg-lime-500/15 text-lime-300 border-lime-400/30',
  },
  {
    letter: 'B',
    step: '02',
    title: 'Create Awareness',
    desc: 'Introduce opportunities through seminars and webinars.',
    icon: Users,
    position: 'bottom', // content below horizontal axis
    gradient: 'from-[#f97316] to-[#f59e0b]', // Orange to golden amber
    glow: 'rgba(249, 115, 22, 0.35)',
    border: 'border-orange-400/40',
    accentColor: '#f97316',
    tagBg: 'bg-orange-500/15 text-orange-300 border-orange-400/30',
  },
  {
    letter: 'C',
    step: '03',
    title: 'Map Interests',
    desc: 'Understand student aspirations and readiness.',
    icon: Send,
    position: 'top', // content above horizontal axis
    gradient: 'from-[#ec4899] to-[#f43f5e]', // Magenta / rose
    glow: 'rgba(236, 72, 153, 0.35)',
    border: 'border-pink-400/40',
    accentColor: '#ec4899',
    tagBg: 'bg-pink-500/15 text-pink-300 border-pink-400/30',
  },
  {
    letter: 'D',
    step: '04',
    title: 'Counsel & Connect',
    desc: 'Guide interested students towards suitable service providers.',
    icon: BarChart3,
    position: 'bottom', // content below horizontal axis
    gradient: 'from-[#8b5cf6] to-[#a855f7]', // Purple / violet
    glow: 'rgba(139, 92, 246, 0.35)',
    border: 'border-purple-400/40',
    accentColor: '#8b5cf6',
    tagBg: 'bg-purple-500/15 text-purple-300 border-purple-400/30',
  },
  {
    letter: 'E',
    step: '05',
    title: 'Coordinate & Follow Up',
    desc: 'Support onboarding, communication and agreed reviews.',
    icon: Target,
    position: 'top', // content above horizontal axis
    gradient: 'from-[#0284c7] to-[#06b6d4]', // Ocean blue to cyan
    glow: 'rgba(2, 132, 199, 0.35)',
    border: 'border-cyan-400/40',
    accentColor: '#0284c7',
    tagBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30',
  },
];

export default function HowCivioraWorksInfographic() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="w-full">
      {/* =========================================================================
          DESKTOP INFOGRAPHIC (lg:block - exactly matching the reference graphic)
          ========================================================================= */}
      <div className="hidden lg:block relative py-6 select-none">
        {/* Step Grid: 5 Equal Columns */}
        <div className="grid grid-cols-5 gap-4 xl:gap-6 items-stretch">

          {/* ---------------- TOP ROW (Cards for A, C, E / Pins for B, D) ---------------- */}
          {STEPS.map((s) => {
            const isTop = s.position === 'top';
            const Icon = s.icon;
            const isHovered = activeStep === s.step;

            return (
              <div 
                key={`top-${s.step}`} 
                className="flex flex-col justify-end items-center pb-2 relative min-h-[170px]"
                onMouseEnter={() => setActiveStep(s.step)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {isTop ? (
                  // Top Card (Steps A, C, E)
                  <div
                    className={`w-full glass-card p-4 sm:p-5 rounded-2xl border transition-all duration-300 text-left relative flex flex-col justify-between shadow-lg group ${
                      isHovered
                        ? 'border-white/40 shadow-2xl scale-[1.02] bg-navy-900/90'
                        : 'border-white/10 bg-navy-950/60 hover:border-white/25'
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 12px 30px -10px ${s.glow}` : undefined,
                    }}
                  >
                    {/* Top Accent Pill/Line (matching illustration reference top bar) */}
                    <div 
                      className="w-10 h-1.5 rounded-full mb-3"
                      style={{ background: `linear-gradient(to right, ${s.accentColor}, #ffffff)` }}
                    />

                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${s.tagBg}`}>
                          Step {s.step}
                        </span>
                      </div>
                      <h4 className="font-display text-base font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                        {s.title}
                      </h4>
                      <p className="text-xs text-navy-200 mt-1.5 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>

                    {/* Stalk connector dot at bottom of card */}
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white border-2 border-navy-950 shadow-sm z-10" />
                  </div>
                ) : (
                  // Spacer for bottom items (no floating letter badge)
                  <div className="w-full min-h-[170px] pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        {/* ---------------- MIDDLE ROW (Horizontal Track & 3D Layered Discs) ---------------- */}
        <div className="relative my-4">
          {/* Continuous Horizontal Baseline Track */}
          <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[1px] bg-white/20 pointer-events-none" />

          {/* 5 Circular Discs Grid */}
          <div className="grid grid-cols-5 gap-4 xl:gap-6 items-center relative z-10">
            {STEPS.map((s) => {
              const Icon = s.icon;
              const isHovered = activeStep === s.step;
              const isTop = s.position === 'top';

              return (
                <div
                  key={`node-${s.step}`}
                  className="flex flex-col items-center justify-center relative cursor-pointer"
                  onMouseEnter={() => setActiveStep(s.step)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Top Stalk (Connects to card above for Steps A, C, E) */}
                  {isTop && (
                    <div className="absolute -top-6 flex flex-col items-center pointer-events-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mb-0.5" />
                      <div className={`w-[2px] h-4 transition-all duration-300 ${isHovered ? 'bg-gold-400' : 'bg-white/30'}`} />
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  )}

                  {/* Horizontal Segment Anchor Dots (Left & Right of each disc) */}
                  <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/50 pointer-events-none hidden xl:block" />
                  <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/50 pointer-events-none hidden xl:block" />

                  {/* 3D Circular Disc Assembly (layered outer halo, beveled ring, vibrant core) */}
                  <div
                    className={`relative rounded-full p-1.5 transition-all duration-300 flex items-center justify-center ${
                      isHovered ? 'scale-110' : 'hover:scale-105'
                    }`}
                    style={{
                      boxShadow: isHovered 
                        ? `0 0 25px 6px ${s.glow}, 0 8px 24px rgba(0,0,0,0.6)` 
                        : '0 4px 16px rgba(0,0,0,0.4)',
                    }}
                  >
                    {/* Outer Semi-transparent Boundary Ring */}
                    <div 
                      className={`absolute inset-0 rounded-full border transition-all duration-300 ${
                        isHovered ? 'border-white/60 scale-105' : 'border-white/20'
                      }`}
                    />

                    {/* Middle Layer: 3D Bevel White/Silver Plate */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-white via-slate-100 to-slate-300 p-1 shadow-[0_6px_16px_rgba(0,0,0,0.45)] flex items-center justify-center border border-white">
                      {/* Inner Ring Recess */}
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-slate-200 via-white to-slate-100 p-1 flex items-center justify-center shadow-inner">
                        
                        {/* Core Vibrant Colored Disc (Matching Image Colors) */}
                        <div
                          className={`w-full h-full rounded-full bg-gradient-to-tr ${s.gradient} flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_0_3px_8px_rgba(0,0,0,0.3)] transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-md stroke-[2.2]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stalk (Connects to card below for Steps B, D) */}
                  {!isTop && (
                    <div className="absolute -bottom-6 flex flex-col items-center pointer-events-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      <div className={`w-[2px] h-4 transition-all duration-300 ${isHovered ? 'bg-gold-400' : 'bg-white/30'}`} />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-0.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- BOTTOM ROW (Cards for B, D / Pins for A, C, E) ---------------- */}
        <div className="grid grid-cols-5 gap-4 xl:gap-6 items-stretch">
          {STEPS.map((s) => {
            const isBottom = s.position === 'bottom';
            const Icon = s.icon;
            const isHovered = activeStep === s.step;

            return (
              <div 
                key={`bottom-${s.step}`} 
                className="flex flex-col justify-start items-center pt-2 relative min-h-[170px]"
                onMouseEnter={() => setActiveStep(s.step)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {isBottom ? (
                  // Bottom Card (Steps B, D)
                  <div
                    className={`w-full glass-card p-4 sm:p-5 rounded-2xl border transition-all duration-300 text-left relative flex flex-col justify-between shadow-lg group ${
                      isHovered
                        ? 'border-white/40 shadow-2xl scale-[1.02] bg-navy-900/90'
                        : 'border-white/10 bg-navy-950/60 hover:border-white/25'
                    }`}
                    style={{
                      boxShadow: isHovered ? `0 12px 30px -10px ${s.glow}` : undefined,
                    }}
                  >
                    {/* Stalk connector dot at top of card */}
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white border-2 border-navy-950 shadow-sm z-10" />

                    {/* Top Accent Pill/Line (matching illustration reference top bar) */}
                    <div 
                      className="w-10 h-1.5 rounded-full mb-3"
                      style={{ background: `linear-gradient(to right, ${s.accentColor}, #ffffff)` }}
                    />

                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${s.tagBg}`}>
                          Step {s.step}
                        </span>
                      </div>
                      <h4 className="font-display text-base font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                        {s.title}
                      </h4>
                      <p className="text-xs text-navy-200 mt-1.5 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Spacer for top items (no floating letter badge)
                  <div className="w-full min-h-[170px] pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET RESPONSIVE INFOGRAPHIC (< lg)
          Transforms into a seamless connected vertical pipeline with the same 3D discs!
          ========================================================================= */}
      <div className="lg:hidden relative py-4">
        {/* Vertical Continuous Baseline Track */}
        <div className="absolute top-8 bottom-8 left-[34px] sm:left-[42px] w-[2px] bg-gradient-to-b from-transparent via-white/25 to-transparent pointer-events-none" />

        <div className="space-y-6 sm:space-y-8">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            const isHovered = activeStep === s.step;

            return (
              <div
                key={`mob-${s.step}`}
                className="relative flex items-start gap-4 sm:gap-6 group"
                onClick={() => setActiveStep(activeStep === s.step ? null : s.step)}
              >
                {/* 3D Disc Node (Left Aligned on vertical track) */}
                <div className="relative shrink-0 z-10">
                  <div
                    className={`relative rounded-full p-1 transition-all duration-300 flex items-center justify-center ${
                      isHovered ? 'scale-105' : ''
                    }`}
                    style={{
                      boxShadow: isHovered 
                        ? `0 0 20px 4px ${s.glow}` 
                        : '0 4px 12px rgba(0,0,0,0.3)',
                    }}
                  >
                    {/* Outer Boundary Ring */}
                    <div className="absolute inset-0 rounded-full border border-white/20" />

                    {/* Middle Layer 3D Plate */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-white via-slate-100 to-slate-300 p-1 shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex items-center justify-center border border-white">
                      {/* Inner Ring */}
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-slate-200 via-white to-slate-100 p-0.5 flex items-center justify-center">
                        {/* Core Vibrant Disc */}
                        <div className={`w-full h-full rounded-full bg-gradient-to-tr ${s.gradient} flex items-center justify-center shadow-inner`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow stroke-[2.2]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Card (Beside node) */}
                <div
                  className={`flex-grow glass-card p-4 sm:p-5 rounded-2xl border transition-all duration-300 text-left relative shadow-md ${
                    isHovered
                      ? 'border-white/40 bg-navy-900/90 shadow-xl'
                      : 'border-white/10 bg-navy-950/60'
                  }`}
                  style={{
                    boxShadow: isHovered ? `0 10px 25px -8px ${s.glow}` : undefined,
                  }}
                >
                  {/* Top Accent Bar */}
                  <div 
                    className="w-8 h-1 rounded-full mb-2.5"
                    style={{ background: `linear-gradient(to right, ${s.accentColor}, #ffffff)` }}
                  />

                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${s.tagBg}`}>
                      Step {s.step}
                    </span>
                  </div>

                  <h4 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-gold-300 transition-colors mt-1">
                    {s.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-navy-200 mt-1 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

