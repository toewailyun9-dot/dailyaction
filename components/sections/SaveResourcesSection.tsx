"use client";

import { useRef, useLayoutEffect } from "react";
import { SectionLabel } from "../presentation/SectionLabel";
import {
  HelpCircle,
  HandHelping,
  AlertTriangle,
  Leaf,
  Droplets,
  Zap,
  Clock,
  Wrench,
  Sun,
  PowerOff,
  Lightbulb,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const waterActions = [
  {
    icon: Droplets,
    title: "Turn off the tap while brushing teeth",
  },
  {
    icon: Clock,
    title: "Take shorter showers",
  },
  {
    icon: Wrench,
    title: "Fix leaking taps promptly",
  },
];

const energyActions = [
  {
    icon: Lightbulb,
    title: "Turn off lights when leaving a room",
  },
  {
    icon: PowerOff,
    title: "Unplug chargers when not in use",
  },
  {
    icon: Sun,
    title: "Use natural daylight when possible",
  },
];

export function SaveResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-animate='resource-pillar']", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="section-3"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 md:px-10 flex flex-col justify-center bg-[#F8FAF7] border-t border-[#DDEDE0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel
            number={3}
            speaker="Speaker 2"
            topic="Save Water and Energy"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D372D] tracking-tight leading-tight mb-3">
            Save Water and Energy
          </h2>
          <p className="text-base sm:text-lg text-[#313D35] max-w-2xl">
            Clean water and electricity are precious resources. Mindful daily
            usage protects our shared planet.
          </p>
        </div>

        {/* Pillar 1: What is it? */}
        <div
          data-animate="resource-pillar"
          className="p-6 rounded-2xl bg-white border border-[#DDEDE0] shadow-xs mb-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-[#DDEDE0] flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-[#36704E]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1D372D]">
                What is it?
              </h3>
              <span className="font-mono text-xs text-[#526357]">
                Definition
              </span>
            </div>
          </div>
          <p className="text-base text-[#313D35] leading-relaxed">
            Using clean water and electricity wisely without unnecessary waste in
            our everyday lives.
          </p>
        </div>

        {/* Pillar 2: What can we do? — Two Panels: Water & Energy */}
        <div data-animate="resource-pillar" className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#DDEDE0] flex items-center justify-center">
              <HandHelping className="w-5 h-5 text-[#36704E]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1D372D]">
                What can we do?
              </h3>
              <span className="font-mono text-xs text-[#526357]">
                Daily Actions
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Water Panel */}
            <div className="rounded-2xl p-6 border border-[#DDEDE0] bg-white shadow-xs">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#DDEDE0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#DDEDE0] flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-[#36704E]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1D372D]">
                    Water Actions
                  </h4>
                </div>
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#DDEDE0] text-[#1D372D]">
                  3 Habits
                </span>
              </div>
              <div className="space-y-4">
                {waterActions.map((action, i) => {
                  const Icon = action.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-[#DDEDE0]/60 flex items-center justify-center shrink-0 text-[#36704E]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-[#1D372D]">
                        {action.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Energy Panel */}
            <div className="rounded-2xl p-6 border border-[#DDEDE0] bg-[#DDEDE0]/30 shadow-xs">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#DDEDE0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#DDEDE0] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#36704E]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1D372D]">
                    Energy Actions
                  </h4>
                </div>
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#1D372D] text-white">
                  3 Habits
                </span>
              </div>
              <div className="space-y-4">
                {energyActions.map((action, i) => {
                  const Icon = action.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center shrink-0 text-[#36704E]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-[#1D372D]">
                        {action.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Why Important + Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 3: Why is it important? */}
          <div
            data-animate="resource-pillar"
            className="p-6 rounded-2xl bg-[#DDEDE0]/30 border border-[#DDEDE0] shadow-xs"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#DDEDE0] flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#36704E]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1D372D]">
                  Why is it important?
                </h3>
                <span className="font-mono text-xs text-[#526357]">
                  Importance
                </span>
              </div>
            </div>
            <p className="text-base text-[#313D35] leading-relaxed">
              Freshwater is scarce globally, and producing electricity generates
              large amounts of greenhouse gases that accelerate climate change.
            </p>
          </div>

          {/* Pillar 4: Environmental Benefits */}
          <div
            data-animate="resource-pillar"
            className="p-6 rounded-2xl bg-[#1D372D] text-white shadow-xs"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#36704E] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-[#DDEDE0]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Environmental Benefits
                </h3>
                <span className="font-mono text-xs text-[#DDEDE0]/70">
                  Benefits
                </span>
              </div>
            </div>
            <p className="text-base text-[#DDEDE0] leading-relaxed">
              Preserves freshwater ecosystems, cuts carbon emissions, and saves
              natural resources for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
