import React from "react";

const SectionHeader = ({ index, title, kicker }) => {
  return (
    <div className="mb-12 flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="font-mono-jb text-xs uppercase tracking-[0.22em] text-orange-600">
          {index} · {title}
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          {kicker}
        </h2>
      </div>
      <div className="font-mono-jb text-[11px] uppercase tracking-[0.2em] text-slate-400">
        // section
      </div>
    </div>
  );
};

export default SectionHeader;
