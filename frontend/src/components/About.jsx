import React from "react";
import SectionHeader from "./SectionHeader";
import { education, nowList, profile } from "../data/portfolio";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <SectionHeader
          index="01"
          title="SYSTEM_INFO"
          kicker="A bit about the engineer behind the commits."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: bio */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200 bg-slate-50 p-8 md:p-10">
              <div className="font-mono-jb text-[11px] uppercase tracking-[0.2em] text-slate-400">
                // about.md
              </div>
              <p className="mt-4 text-lg leading-relaxed text-slate-800 md:text-xl">
                I treat data work as design work — what question are we answering, who is
                listening, and what action does this enable?
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {profile.summary}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Most days you&apos;ll find me in a Jupyter notebook; the rest of the time
                I&apos;m in Power BI or shipping a small Streamlit demo so the stakeholder
                actually <em>sees</em> the insight, not just reads about it.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-px border border-slate-200 bg-slate-200">
                {[
                  { k: "Role", v: profile.role },
                  { k: "Pronouns", v: profile.pronoun },
                  { k: "Location", v: profile.location },
                  { k: "Status", v: profile.status },
                ].map((r) => (
                  <div key={r.k} className="bg-white p-4">
                    <div className="font-mono-jb text-[10px] uppercase tracking-[0.22em] text-slate-400">
                      {r.k}
                    </div>
                    <div className="mt-1 font-display text-base font-semibold text-slate-900">
                      {r.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-10">
              <div className="mb-4 font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-500">
                /education
              </div>
              {education.map((e, i) => (
                <article
                  key={i}
                  className="group flex flex-col gap-6 border border-slate-200 bg-white p-6 transition hover:shadow-hard md:flex-row md:items-start md:p-8"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 text-slate-900 transition group-hover:border-orange-600 group-hover:bg-orange-50">
                    <GraduationCap className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold text-slate-900 md:text-2xl">
                        {e.school}
                      </h3>
                      <span className="font-mono-jb text-xs text-slate-500">{e.period}</span>
                    </div>
                    <div className="mt-1 font-mono-jb text-xs uppercase tracking-wider text-orange-600">
                      {e.program}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{e.note}</p>
                    <div className="mt-3 inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono-jb text-[11px] text-slate-700">
                      <span className="text-orange-600">•</span>
                      {e.score}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="border border-slate-200 bg-white p-6 shadow-hard-orange">
                <div className="flex items-center justify-between">
                  <div className="font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    /now
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono-jb text-[10px] uppercase tracking-[0.2em] text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    LIVE
                  </span>
                </div>
                <ul className="mt-5 space-y-3">
                  {nowList.map((n, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700">
                      <span className="font-mono-jb text-orange-600">›</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-slate-900 bg-slate-900 p-7 text-slate-50">
                <div className="font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  // philosophy
                </div>
                <p className="mt-4 font-serif-display text-3xl italic leading-[1.15] text-white">
                  &ldquo;A model no one understands is a model no one trusts.&rdquo;
                </p>
                <div className="mt-4 font-mono-jb text-xs text-slate-400">
                  — Sumana, late-night Jupyter session
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px border border-slate-200 bg-slate-200">
                {[
                  { k: "Focus", v: "ML" },
                  { k: "Stack", v: "Python" },
                  { k: "Tool", v: "Power BI" },
                ].map((r) => (
                  <div key={r.k} className="bg-white p-4">
                    <div className="font-mono-jb text-[10px] uppercase tracking-[0.22em] text-slate-400">
                      {r.k}
                    </div>
                    <div className="mt-1 font-display text-sm font-semibold text-slate-900">
                      {r.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
