import React from "react";
import SectionHeader from "./SectionHeader";
import { education, nowList, profile } from "../data/portfolio";

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <SectionHeader index="01" title="SYSTEM_INFO" kicker="A bit about the engineer behind the commits." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: bio */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200 bg-slate-50 p-8">
              <div className="font-mono-jb text-[11px] uppercase tracking-[0.2em] text-slate-400">
                // about.md
              </div>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                {profile.summary}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                I treat data work as design work — what question are we answering, who is
                listening, and what action does this enable? Most days you&apos;ll find me in a
                notebook, the rest is in Power BI or shipping a Streamlit demo for stakeholders.
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

            {/* Education timeline */}
            <div className="mt-10">
              <div className="mb-4 font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-500">
                /education
              </div>
              <ol className="relative border-l border-slate-200">
                {education.map((e, i) => (
                  <li key={i} className="mb-8 ml-6">
                    <span className="absolute -left-1.5 flex h-3 w-3 items-center justify-center bg-orange-600" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold text-slate-900">
                        {e.school}
                      </h3>
                      <span className="font-mono-jb text-xs text-slate-500">{e.period}</span>
                    </div>
                    <div className="font-mono-jb text-xs uppercase tracking-wider text-orange-600">
                      {e.program}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{e.note}</div>
                    <div className="mt-2 inline-block border border-slate-200 bg-white px-2 py-1 font-mono-jb text-[11px] text-slate-700">
                      {e.score}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: now / sidebar */}
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
                <ul className="mt-4 space-y-3">
                  {nowList.map((n, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700">
                      <span className="font-mono-jb text-orange-600">›</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-slate-200 bg-slate-900 p-6 text-slate-50">
                <div className="font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  // philosophy
                </div>
                <p className="mt-3 font-display text-2xl font-semibold leading-snug">
                  &ldquo;A model that no one understands is a model no one trusts.&rdquo;
                </p>
                <div className="mt-4 font-mono-jb text-xs text-slate-400">— Sumana, late-night Jupyter session</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
