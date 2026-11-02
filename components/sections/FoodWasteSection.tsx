"use client";

import { useRef, useLayoutEffect } from "react";
import { SectionLabel } from "../presentation/SectionLabel";
import { KeyTakeaways } from "../presentation/KeyTakeaways";
import {
  HelpCircle,
  HandHelping,
  AlertTriangle,
  Leaf,
  ClipboardList,
  Refrigerator,
  Share2,
  ArrowRight,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const foodKeyPoints = [
  {
    title: "Cut Methane Gas",
    description:
      "Rotting food in landfills produces methane, a greenhouse gas far more potent than CO₂.",
  },
  {
    title: "Plan, Save & Share",
    description:
      "Planning grocery lists, storing leftovers well, and sharing extra meals prevents needless waste.",
  },
  {
    title: "Conserve Land & Water",
    description:
      "Saving food respects and preserves the immense agricultural water, energy, and land required to grow it.",
  },
];

const foodStory = [
  {
    step: "01",
    keyword: "Plan",
    title: "Plan what you need before shopping",
    description:
      "Make a grocery list and check your kitchen first so you only buy what you will actually cook and eat.",
    icon: ClipboardList,
  },
  {
    step: "02",
    keyword: "Save",
    title: "Store food properly and use leftovers",
    description:
      "Keep ingredients in airtight containers, label leftovers, and eat meals before they spoil.",
    icon: Refrigerator,
  },
  {
    step: "03",
    keyword: "Share",
    title: "Share extra food when it is safe to do so",
    description:
      "Offer surplus fresh groceries or prepared meals to neighbors, friends, or local food-sharing groups.",
    icon: Share2,
  },
];

export function FoodWasteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-animate='food-pillar']", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
      id="section-5"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 md:px-10 flex flex-col justify-center bg-[#F8FAF7] border-t border-[#DDEDE0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel
            number={5}
            speaker="Speaker 4"
            topic="Reduce Food Waste"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D372D] tracking-tight leading-tight mb-3">
            Reduce Food Waste
          </h2>
          <p className="text-base sm:text-lg text-[#313D35] max-w-2xl mb-6">
            A simple three-step approach keeps valuable food on our plates and
            out of trash bins.
          </p>

          {/* Speaker Key Takeaways */}
          <KeyTakeaways
            speaker="Speaker 4"
            title="Food Waste Reduction Key Points"
            points={foodKeyPoints}
          />
        </div>

        {/* Pillar 1: What is it? */}
        <div
          data-animate="food-pillar"
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
            Valuing the food we buy and preventing edible food from being thrown
            away unnecessarily.
          </p>
        </div>

        {/* Pillar 2: What can we do? — Plan → Save → Share */}
        <div data-animate="food-pillar" className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#DDEDE0] flex items-center justify-center">
              <HandHelping className="w-5 h-5 text-[#36704E]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1D372D]">
                What can we do?
              </h3>
              <span className="font-mono text-xs text-[#526357]">
                3-Step Daily Actions
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foodStory.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl p-7 bg-white border border-[#DDEDE0] hover:border-[#36704E] transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* Step Banner */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-2xl font-bold text-[#1D372D]">
                        {item.step}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#DDEDE0] text-[#1D372D] uppercase tracking-wider">
                        {item.keyword}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#DDEDE0] flex items-center justify-center text-[#1D372D] mb-4">
                      <Icon className="w-6 h-6 text-[#36704E]" />
                    </div>

                    {/* Title & Description */}
                    <h4 className="text-xl font-bold text-[#1D372D] mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#313D35] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow connector */}
                  {idx < 2 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#36704E] items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Row: Why Important + Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 3: Why is it important? */}
          <div
            data-animate="food-pillar"
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
              Food rotting in landfills releases methane, a potent greenhouse gas
              that drives global warming and climate change.
            </p>
          </div>

          {/* Pillar 4: Environmental Benefits */}
          <div
            data-animate="food-pillar"
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
              Lowers greenhouse gas emissions, conserves agriculture water and
              land, and supports food security for communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
