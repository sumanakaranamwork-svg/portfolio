import React from "react";
import SectionHeader from "./SectionHeader";
import { skills } from "../data/portfolio";

const accentMap = {
  primary: "border-orange-300 bg-orange-50 text-orange-700",
  secondary: "border-slate-300 bg-slate-50 text-slate-700",
};

const Skills = () => {
  const groups = Object.entries(skills);
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <SectionHeader index="02" title="DEPENDENCIES" kicker="Tools, libraries, and languages I reach for." />

        <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">
          {groups.map(([group, items]) => (
            <div key={group} className="bg-white p-8">
              <div className="mb-2 font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-400">
                ./{group.toLowerCase()}/
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">{group}</h3>

              <ul className="mt-6 space-y-2">
                {items.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center justify-between border-b border-dashed border-slate-200 pb-2 font-mono-jb text-sm text-slate-700"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-orange-600">»</span>
                      {s.name}
                    </span>
                    <span
                      className={`border px-2 py-0.5 text-[10px] uppercase tracking-wider ${accentMap[s.level]}`}
                    >
                      {s.level === "primary" ? "core" : "fluent"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-12 overflow-hidden border border-slate-200 bg-white py-4">
          <div className="marquee-track flex whitespace-nowrap font-mono-jb text-sm uppercase tracking-[0.22em] text-slate-600">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex shrink-0">
                  {[
                    "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Power BI",
                    "SQL", "Python", "Jupyter", "Git", "MATLAB", "Java", "C",
                  ].map((t, j) => (
                    <span key={`${i}-${j}`} className="mx-6 flex items-center gap-3">
                      <span className="text-orange-600">●</span>
                      {t}
                    </span>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
