"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { SectionLabel } from "../presentation/SectionLabel";
import {
  HelpCircle,
  HandHelping,
  AlertTriangle,
  Leaf,
  Bus,
  Bike,
  Users,
  Gauge,
  Clock,
  VolumeX,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const pillars = [
  {
    icon: HelpCircle,
    label: "What is it?",
    tag: "Definition",
    content:
      "Transportation is essential in everyday life. Choosing public transportation means traveling together using buses, trains, and subways rather than relying on individual private cars.",
  },
  {
    icon: HandHelping,
    label: "What can we do?",
    tag: "Daily Actions",
    content: null, // Rendered as action cards below
  },
  {
    icon: AlertTriangle,
    label: "Why is it important?",
    tag: "Environmental Impact",
    content:
      "Private vehicles constantly release carbon dioxide (CO₂) that damages global ecosystems and fuels global warming. They are also the primary drivers of heavy smog, toxic air pollution, and disruptive urban noise.",
  },
  {
    icon: Leaf,
    label: "Environmental Benefits",
    tag: "Key Benefits",
    content: null, // Rendered as structured benefits cards
  },
];

const actions = [
  {
    icon: Bus,
    title: "Take Public Transit Most",
    description:
      "Choose city buses, light rails, or subways for your daily commute to school and work instead of driving alone.",
  },
  {
    icon: Bike,
    title: "Walk or Bike Short Trips",
    description:
      "Combine transit with walking or cycling for nearby errands, eliminating emissions and keeping you healthy.",
  },
  {
    icon: Users,
    title: "Carpool & Promote Transit",
    description:
      "Share rides when public lines aren't available, and encourage friends, family, and communities to support public transit.",
  },
];

const benefits = [
  {
    icon: Gauge,
    title: "Saves Energy & Slows Climate Change",
    description:
      "Moving dozens of passengers in one vehicle drastically lowers per-person fuel consumption and greenhouse gas emissions.",
  },
  {
    icon: Clock,
    title: "Eases Traffic & Speeds Up Travel",
    description:
      "Fewer private cars on the road reduces rush hour traffic jams, saving wasted idle fuel and helping everyone reach destinations faster.",
  },
  {
    icon: VolumeX,
    title: "Cuts Air & Noise Pollution",
    description:
      "Eliminates thousands of individual exhaust pipes and horns, giving communities cleaner breathable air and quieter streets.",
  },
];

export function PublicTransportSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-animate='transport-image']", {
        x: -24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from("[data-animate='transport-pillar']", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="section-6"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 md:px-10 flex flex-col justify-center bg-[#F8FAF7] border-t border-[#DDEDE0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel
            number={6}
            speaker="Speaker 4"
            topic="Clean Transportation"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D372D] tracking-tight leading-tight mb-3">
            Public vs. Private Transportation
          </h2>
          <p className="text-base sm:text-lg text-[#313D35] max-w-2xl">
            Public transportation is better than private transportation for our
            environment, our climate, and our daily communities.
          </p>
        </div>

        {/* Top Row: Visual + Pillar 1 (What is it?) & Pillar 3 (Why important?) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Photo */}
          <div
            data-animate="transport-image"
            className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#DDEDE0] shadow-sm bg-white"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/public_transport.jpg"
                alt="Modern electric public transport bus and green urban commuters"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
            <div className="p-4 bg-white border-t border-[#DDEDE0] text-xs text-[#526357]">
              Shared mobility: One bus or train can replace dozens of private
              automobiles on congested city roads.
            </div>
          </div>

          {/* Right Column: Pillar 1 & Pillar 3 */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Pillar 1: What is it? */}
            <div
              data-animate="transport-pillar"
              className="p-6 rounded-2xl bg-white border border-[#DDEDE0] shadow-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#DDEDE0] flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-[#36704E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1D372D]">
                    {pillars[0].label}
                  </h3>
                  <span className="font-mono text-xs text-[#526357]">
                    {pillars[0].tag}
                  </span>
                </div>
              </div>
              <p className="text-base text-[#313D35] leading-relaxed">
                {pillars[0].content}
              </p>
            </div>

            {/* Pillar 3: Why is it important? */}
            <div
              data-animate="transport-pillar"
              className="p-6 rounded-2xl bg-[#DDEDE0]/30 border border-[#DDEDE0] shadow-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#DDEDE0] flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-[#36704E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1D372D]">
                    {pillars[2].label}
                  </h3>
                  <span className="font-mono text-xs text-[#526357]">
                    {pillars[2].tag}
                  </span>
                </div>
              </div>
              <p className="text-base text-[#313D35] leading-relaxed">
                {pillars[2].content}
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 2: What can we do? — Action Cards */}
        <div data-animate="transport-pillar" className="mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {actions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white border border-[#DDEDE0] hover:border-[#36704E] transition-colors shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#DDEDE0] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#36704E]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-base font-semibold text-[#1D372D]">
                          {item.title}
                        </h4>
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#DDEDE0] text-[#1D372D] font-medium">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="text-sm text-[#313D35] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pillar 4: Environmental Benefits */}
        <div
          data-animate="transport-pillar"
          className="p-6 md:p-8 rounded-2xl bg-[#1D372D] text-white shadow-xs"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#36704E] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-[#DDEDE0]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {pillars[3].label}
              </h3>
              <span className="font-mono text-xs text-[#DDEDE0]/70">
                {pillars[3].tag}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#36704E] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#DDEDE0]" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#DDEDE0]/85 leading-relaxed mt-1">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
