import React from "react";
import SectionHeader from "./SectionHeader";
import { achievements } from "../data/portfolio";
import { Trophy } from "lucide-react";

const Leadership = () => {
  return (
    <section
      id="leadership"
      data-testid="leadership-section"
      className="border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <SectionHeader
          index="04"
          title="PROCESSES"
          kicker="Wins, leadership, and the things I'm proud of."
        />

        <div className="overflow-hidden border border-slate-200 bg-white">
          {/* Header row */}
          <div className="hidden grid-cols-12 border-b border-slate-200 bg-slate-100 px-6 py-3 font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-500 md:grid">
            <div className="col-span-2">code</div>
            <div className="col-span-4">title</div>
            <div className="col-span-3">organization</div>
            <div className="col-span-2">note</div>
            <div className="col-span-1 text-right">year</div>
          </div>

          {achievements.map((a, i) => (
            <div
              key={a.code}
              data-testid={`achievement-${a.code}`}
              className="grid grid-cols-1 gap-2 border-b border-slate-200 px-6 py-6 transition hover:bg-slate-50 md:grid-cols-12 md:items-center md:gap-4"
            >
              <div className="col-span-2 flex items-center gap-2 font-mono-jb text-xs text-orange-600">
                <Trophy className="h-3.5 w-3.5" strokeWidth={1.5} />
                {a.code}
              </div>
              <div className="col-span-4">
                <div className="font-display text-base font-semibold text-slate-900 md:text-lg">
                  {a.title}
                </div>
              </div>
              <div className="col-span-3 font-mono-jb text-xs text-slate-600">{a.org}</div>
              <div className="col-span-2 text-sm text-slate-600">{a.note}</div>
              <div className="col-span-1 text-left font-mono-jb text-xs text-slate-500 md:text-right">
                {a.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
