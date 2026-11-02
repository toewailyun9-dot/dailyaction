"use client";

import { Sparkles, CheckCircle2 } from "lucide-react";

export interface KeyPoint {
  title: string;
  description: string;
}

interface KeyTakeawaysProps {
  points: KeyPoint[];
  speaker?: string;
  title?: string;
  className?: string;
  inverted?: boolean;
}

export function KeyTakeaways({
  points,
  speaker,
  title = "Key Takeaways",
  className = "",
  inverted = false,
}: KeyTakeawaysProps) {
  return (
    <div
      data-animate="key-takeaways"
      className={`rounded-2xl p-5 sm:p-6 mb-8 border transition-all shadow-xs ${
        inverted
          ? "bg-white/10 border-white/20 text-white"
          : "bg-white border-[#DDEDE0] text-[#1D372D]"
      } ${className}`}
    >
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-inherit/40">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
              inverted
                ? "bg-[#36704E] text-[#DDEDE0]"
                : "bg-[#DDEDE0] text-[#36704E]"
            }`}
          >
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3
              className={`text-sm sm:text-base font-bold tracking-tight ${
                inverted ? "text-white" : "text-[#1D372D]"
              }`}
            >
              {title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {speaker && (
            <span
              className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full ${
                inverted
                  ? "bg-white/15 text-[#DDEDE0]"
                  : "bg-[#DDEDE0] text-[#1D372D]"
              }`}
            >
              {speaker}
            </span>
          )}
          <span
            className={`text-[11px] font-mono px-2 py-0.5 rounded ${
              inverted ? "text-[#DDEDE0]/70" : "text-[#526357]"
            }`}
          >
            3 Key Points
          </span>
        </div>
      </div>

      {/* 3 Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {points.map((point, idx) => (
          <div
            key={idx}
            className={`p-3.5 rounded-xl border flex items-start gap-3 transition-colors ${
              inverted
                ? "bg-white/5 border-white/10 hover:border-white/25"
                : "bg-[#F8FAF7] border-[#DDEDE0]/80 hover:border-[#36704E]/50"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${
                inverted
                  ? "bg-[#CFA457] text-[#1D372D]"
                  : "bg-[#36704E] text-white"
              }`}
            >
              0{idx + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <CheckCircle2
                  className={`w-3.5 h-3.5 shrink-0 ${
                    inverted ? "text-[#CFA457]" : "text-[#36704E]"
                  }`}
                />
                <h4
                  className={`text-xs sm:text-sm font-bold truncate ${
                    inverted ? "text-white" : "text-[#1D372D]"
                  }`}
                >
                  {point.title}
                </h4>
              </div>
              <p
                className={`text-xs leading-relaxed ${
                  inverted ? "text-[#DDEDE0]/85" : "text-[#313D35]"
                }`}
              >
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
