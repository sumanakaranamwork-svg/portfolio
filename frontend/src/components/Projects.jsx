import React from "react";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/portfolio";
import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <SectionHeader
          index="03"
          title="EXECUTABLES"
          kicker="Selected projects — from notebook to insight."
        />

        <div className="space-y-px bg-slate-200">
          {projects.map((p, i) => (
            <article
              key={p.id}
              data-testid={`project-${p.id}`}
              className="group grid grid-cols-1 gap-0 bg-white transition hover:bg-slate-50 lg:grid-cols-12"
            >
              <div className="lg:col-span-1 border-r border-slate-200 p-6 lg:p-8">
                <div className="font-mono-jb text-3xl font-bold text-slate-300 transition group-hover:text-orange-600">
                  {p.index}
                </div>
              </div>

              <div className="lg:col-span-6 border-r border-slate-200 p-6 lg:p-10">
                <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{p.blurb}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="border border-slate-200 bg-slate-50 px-2 py-1 font-mono-jb text-[11px] text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`project-${p.id}-repo`}
                    className="inline-flex items-center gap-2 font-mono-jb text-xs uppercase tracking-wider text-slate-900 link-underline"
                  >
                    <Github className="h-3.5 w-3.5" strokeWidth={1.5} /> View Repo
                  </a>
                  <span className="font-mono-jb text-[11px] uppercase tracking-[0.2em] text-emerald-600">
                    {p.metric}
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden lg:col-span-5">
                <div
                  className="aspect-[16/10] w-full bg-cover bg-center grayscale-[40%] transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <div className="absolute right-4 top-4 flex items-center gap-1 border border-slate-900 bg-white/95 px-2 py-1 font-mono-jb text-[10px] uppercase tracking-wider text-slate-900">
                  case_study <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
