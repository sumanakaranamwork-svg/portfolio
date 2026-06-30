import React, { useEffect, useState } from "react";
import { profile, stats } from "../data/portfolio";
import { ArrowDownToLine, ArrowRight, MapPin } from "lucide-react";

const TERMINAL_LINES = [
  { prompt: "$", text: "whoami" },
  { prompt: ">", text: "karanam_naga_sumana" },
  { prompt: "$", text: "cat ./role.json" },
  {
    prompt: ">",
    text: '{ "role": "Data Scientist · ML Engineer", "status": "open_to_internship" }',
  },
  { prompt: "$", text: "ls ./focus/" },
  { prompt: ">", text: "ml_modeling/  analytics/  dashboards/  storytelling/" },
];

const Typewriter = ({ lines }) => {
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState("");
  useEffect(() => {
    if (index >= lines.length) return;
    const target = lines[index].text;
    if (chars.length < target.length) {
      const t = setTimeout(() => setChars(target.slice(0, chars.length + 1)), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setIndex((i) => i + 1);
      setChars("");
    }, 300);
    return () => clearTimeout(t);
  }, [chars, index, lines]);

  return (
    <div className="font-mono-jb text-[13px] leading-relaxed">
      {lines.slice(0, index).map((l, i) => (
        <div key={i} className="flex gap-3">
          <span className={l.prompt === "$" ? "text-orange-600" : "text-emerald-600"}>
            {l.prompt}
          </span>
          <span className="text-slate-700">{l.text}</span>
        </div>
      ))}
      {index < lines.length && (
        <div className="flex gap-3">
          <span className={lines[index].prompt === "$" ? "text-orange-600" : "text-emerald-600"}>
            {lines[index].prompt}
          </span>
          <span className="text-slate-700">
            {chars}
            <span className="caret" />
          </span>
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative border-b border-slate-200 grid-bg"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 px-6 md:px-12 lg:grid-cols-12">
        {/* Left index column */}
        <aside className="hidden border-r border-slate-200 py-12 lg:col-span-1 lg:block">
          <div className="sticky top-24 space-y-2 font-mono-jb text-[10px] uppercase tracking-[0.25em] text-slate-400">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i}>{String(i + 1).padStart(2, "0")}</div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div className="lg:col-span-7 lg:border-r lg:border-slate-200 py-16 lg:py-24 lg:pr-12">
          <div className="mb-6 inline-flex items-center gap-3 border border-slate-200 bg-white px-3 py-1.5 font-mono-jb text-[10px] uppercase tracking-[0.22em] text-slate-700 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span>{profile.status}</span>
          </div>

          <h1 className="font-display text-[44px] font-semibold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl lg:text-[88px]">
            Building with
            <br />
            <span className="font-serif-display italic text-orange-600">data</span>
            <span className="text-slate-400"> · </span>
            <span className="font-serif-display italic">decisions</span>
            <br />
            <span className="text-slate-900">that actually ship.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            I&apos;m <span className="text-slate-900 font-medium">Sumana</span> — an undergrad
            engineer at Mahindra University working at the intersection of analytics and ML.
            I build models, dashboards, and the occasional 3 AM Kaggle submission.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              data-testid="hero-projects-btn"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 bg-slate-900 px-6 py-3 font-mono-jb text-xs uppercase tracking-wider text-slate-50 transition hover:bg-orange-600"
            >
              View Projects
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" strokeWidth={2} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-resume-btn"
              className="inline-flex items-center gap-2 border border-slate-300 bg-white px-6 py-3 font-mono-jb text-xs uppercase tracking-wider text-slate-900 transition hover:border-slate-900 hover:shadow-hard"
            >
              <ArrowDownToLine className="h-3.5 w-3.5" strokeWidth={2} />
              Download Resume
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 font-mono-jb text-xs text-slate-500">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
            {profile.location}
          </div>
        </div>

        {/* Right pane — terminal */}
        <div className="lg:col-span-4 py-16 lg:py-24 lg:pl-10">
          <div className="overflow-hidden border border-slate-200 bg-white shadow-hard">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono-jb text-[11px] text-slate-500">
                ~/portfolio — zsh
              </span>
            </div>
            <div className="min-h-[260px] p-5">
              <Typewriter lines={TERMINAL_LINES} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-px border border-slate-200 bg-slate-200">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-4">
                <div className="font-display text-3xl font-bold tracking-tight text-slate-900">
                  {s.value}
                </div>
                <div className="mt-1 font-mono-jb text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
