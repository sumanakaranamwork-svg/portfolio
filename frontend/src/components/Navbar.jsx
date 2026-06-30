import React from "react";
import { profile } from "../data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { id: "hero", label: "00 / Init" },
  { id: "about", label: "01 / System" },
  { id: "skills", label: "02 / Deps" },
  { id: "projects", label: "03 / Exec" },
  { id: "leadership", label: "04 / Procs" },
  { id: "contact", label: "05 / Send" },
];

const Navbar = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-navbar"
      className="sticky top-0 z-40 border-b border-slate-200 bg-slate-50/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "hero")}
          data-testid="nav-logo"
          className="font-mono-jb text-sm font-bold tracking-tight text-slate-900"
        >
          <span className="text-orange-600">~/</span>
          {profile.handle.replace("@", "")}.dev
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleClick(e, l.id)}
              data-testid={`nav-${l.id}`}
              className="link-underline font-mono-jb text-xs uppercase tracking-[0.18em] text-slate-600 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-github"
            aria-label="GitHub"
            className="text-slate-700 hover:text-orange-600"
          >
            <Github className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-linkedin"
            aria-label="LinkedIn"
            className="text-slate-700 hover:text-orange-600"
          >
            <Linkedin className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            data-testid="nav-mail"
            aria-label="Email"
            className="text-slate-700 hover:text-orange-600"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
            data-testid="nav-cta"
            className="ml-2 hidden bg-slate-900 px-4 py-2 font-mono-jb text-xs uppercase tracking-wider text-slate-50 transition hover:bg-orange-600 md:inline-block"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
