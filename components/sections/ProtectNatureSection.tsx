"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { SectionLabel } from "../presentation/SectionLabel";
import {
  HelpCircle,
  HandHelping,
  AlertTriangle,
  Leaf,
  Trees,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const actions = [
  {
    icon: Trees,
    title: "Plant trees and take care of them",
    description:
      "Trees absorb carbon dioxide, cool our neighborhoods, and provide critical shelter for birds and insects.",
  },
  {
    icon: Sparkles,
    title: "Keep rivers, forests, and public places clean",
    description:
      "Pick up litter during walks and dispose of waste responsibly so nature stays safe and unpolluted.",
  },
  {
    icon: HeartHandshake,
    title: "Respect animals and do not destroy their homes",
    description:
      "Observe wildlife from a peaceful distance and protect natural habitats from harmful disruption.",
  },
];

export function ProtectNatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-animate='nature-image']", {
        scale: 0.95,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from("[data-animate='nature-pillar']", {
        x: 20,
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
      id="section-4"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 md:px-10 flex flex-col justify-center bg-[#F8FAF7] border-t border-[#DDEDE0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel
            number={4}
            speaker="Speaker 3"
            topic="Protect Nature and Wildlife"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D372D] tracking-tight leading-tight mb-3">
            Protect Nature and Wildlife
          </h2>
          <p className="text-base sm:text-lg text-[#313D35] max-w-2xl">
            Healthy forests, pure waters, and biodiversity sustain all life on
            Earth. Every ecosystem is interconnected.
          </p>
        </div>

        {/* Top Row: "What is it?" + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Pillar 1: What is it? */}
          <div
            data-animate="nature-pillar"
            className="lg:col-span-7 p-6 rounded-2xl bg-white border border-[#DDEDE0] shadow-xs flex flex-col justify-center"
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
              Caring for natural ecosystems—forests, rivers, and wildlife—and the
              living creatures that depend on them for survival.
            </p>
          </div>

          {/* Photo */}
          <div
            data-animate="nature-image"
            className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#DDEDE0] shadow-sm bg-white"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/protect_wildlife.jpg"
                alt="Protected natural forest with clear mountain stream and peaceful deer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
            <div className="p-4 bg-white border-t border-[#DDEDE0] text-xs text-[#526357]">
              Living in harmony: Preserving natural habitats keeps wildlife
              healthy and thriving.
            </div>
          </div>
        </div>

        {/* Pillar 2: What can we do? — Action Cards */}
        <div data-animate="nature-pillar" className="mb-6">
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

        {/* Bottom Row: Why Important + Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 3: Why is it important? */}
          <div
            data-animate="nature-pillar"
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
              Trees produce the oxygen we breathe, and biodiversity keeps our
              global ecosystem balanced and resilient against climate change.
            </p>
          </div>

          {/* Pillar 4: Environmental Benefits */}
          <div
            data-animate="nature-pillar"
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
              Absorbs harmful CO₂, prevents soil erosion, and provides safe
              homes for wildlife across the planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
