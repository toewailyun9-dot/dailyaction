"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { SectionLabel } from "../presentation/SectionLabel";
import {
  HelpCircle,
  HandHelping,
  AlertTriangle,
  Leaf,
  ShoppingBag,
  Droplet,
  Recycle,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const pillars = [
  {
    icon: HelpCircle,
    label: "What is it?",
    tag: "Definition",
    content:
      "Cutting down on single-use plastic products and managing trash properly every day.",
  },
  {
    icon: HandHelping,
    label: "What can we do?",
    tag: "Actions",
    content: null, // Rendered as action cards instead
  },
  {
    icon: AlertTriangle,
    label: "Why is it important?",
    tag: "Importance",
    content:
      "Plastic takes hundreds of years to break down and severely pollutes our oceans and soils.",
  },
  {
    icon: Leaf,
    label: "Environmental Benefits",
    tag: "Benefits",
    content:
      "Protects marine life, prevents toxic pollution, and reduces landfill waste.",
  },
];

const actions = [
  {
    icon: ShoppingBag,
    title: "Bring reusable bags",
    description:
      "Keep a cloth bag with you for groceries and shopping to replace single-use plastic bags.",
  },
  {
    icon: Droplet,
    title: "Use a refillable water bottle",
    description:
      "Carry your own durable bottle to stay hydrated while cutting down on disposable plastic bottles.",
  },
  {
    icon: Recycle,
    title: "Sort waste and recycle when possible",
    description:
      "Separate paper, plastic, and metal so recyclable materials can be processed and reused.",
  },
];

export function ReduceWasteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-animate='waste-image']", {
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

      gsap.from("[data-animate='waste-pillar']", {
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
      id="section-2"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 md:px-10 flex flex-col justify-center bg-[#F8FAF7] border-t border-[#DDEDE0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel
            number={2}
            speaker="Speaker 1"
            topic="Reduce Plastic and Waste"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D372D] tracking-tight leading-tight mb-3">
            Reduce Plastic and Waste
          </h2>
          <p className="text-base sm:text-lg text-[#313D35] max-w-2xl">
            Simple daily habits can dramatically reduce the amount of trash
            entering our oceans and landfills.
          </p>
        </div>

        {/* Top Row: Image + "What is it?" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Photo */}
          <div
            data-animate="waste-image"
            className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#DDEDE0] shadow-sm bg-white"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/eco_waste.jpg"
                alt="Reusable canvas shopping tote bag and stainless steel refillable water bottle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
            <div className="p-4 bg-white border-t border-[#DDEDE0] text-xs text-[#526357]">
              Everyday reusables: Simple swaps with long-lasting environmental
              benefits.
            </div>
          </div>

          {/* Right Column: Pillar 1 (What is it?) + Pillar 3 (Why important?) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Pillar 1: What is it? */}
            <div
              data-animate="waste-pillar"
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
              data-animate="waste-pillar"
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
        <div data-animate="waste-pillar" className="mb-6">
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
          data-animate="waste-pillar"
          className="p-6 rounded-2xl bg-[#1D372D] text-white shadow-xs"
        >
          <div className="flex items-center gap-3 mb-3">
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
          <p className="text-base text-[#DDEDE0] leading-relaxed">
            {pillars[3].content}
          </p>
        </div>
      </div>
    </section>
  );
}
