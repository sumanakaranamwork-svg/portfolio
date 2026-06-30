import React from "react";
import { profile } from "../data/portfolio";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="font-display text-2xl font-bold tracking-tight text-slate-900">
              {profile.name}
            </div>
            <div className="mt-1 font-mono-jb text-xs uppercase tracking-[0.22em] text-slate-500">
              {profile.role}
            </div>
          </div>
          <div className="font-mono-jb text-xs text-slate-500">
            © {year} · Designed &amp; built from a Jupyter tab.
          </div>
        </div>

        <div className="mt-8 grid grid-cols-12 items-end gap-2 border-t border-slate-200 pt-6">
          <div className="col-span-12 font-display text-[18vw] font-bold leading-none tracking-tighter text-slate-900 md:text-[12vw] lg:text-[10vw]">
            SUMANA<span className="text-orange-600">.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
