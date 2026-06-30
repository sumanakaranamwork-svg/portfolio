import React, { useState } from "react";
import axios from "axios";
import SectionHeader from "./SectionHeader";
import { profile } from "../data/portfolio";
import { Toaster, toast } from "sonner";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill name, email, and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent. I'll get back within 24h.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error("Could not send. Try email instead.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="border-b border-slate-200 bg-white"
    >
      <Toaster position="bottom-right" />
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <SectionHeader index="05" title="SEND_REQ" kicker="Let's build something together." />

        <div className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 lg:grid-cols-12">
          {/* Left: contact info */}
          <div className="bg-slate-900 p-8 text-slate-50 lg:col-span-5 lg:p-12">
            <div className="font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-400">
              // direct.channels
            </div>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">
              Got a role,<br />a project,<br />or just a question?
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              I read every message. Currently open to data analyst, ML engineer, and analytics
              internships starting Summer 2026.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                data-testid="contact-email-link"
                className="group flex items-center justify-between border-b border-slate-700 pb-3 font-mono-jb text-sm text-slate-200 hover:text-orange-400"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                  {profile.email}
                </span>
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-linkedin-link"
                className="group flex items-center justify-between border-b border-slate-700 pb-3 font-mono-jb text-sm text-slate-200 hover:text-orange-400"
              >
                <span className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                  /in/karanam-naga-sumana
                </span>
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-github-link"
                className="group flex items-center justify-between border-b border-slate-700 pb-3 font-mono-jb text-sm text-slate-200 hover:text-orange-400"
              >
                <span className="flex items-center gap-3">
                  <Github className="h-4 w-4" strokeWidth={1.5} />
                  /sumanakaranam
                </span>
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                data-testid="contact-phone-link"
                className="group flex items-center justify-between border-b border-slate-700 pb-3 font-mono-jb text-sm text-slate-200 hover:text-orange-400"
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                  {profile.phone}
                </span>
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Right: form styled as API request */}
          <form
            onSubmit={handleSubmit}
            data-testid="contact-form"
            className="bg-white p-8 lg:col-span-7 lg:p-12"
          >
            <div className="mb-6 flex items-center gap-3 font-mono-jb text-xs">
              <span className="bg-emerald-100 px-2 py-0.5 text-emerald-700">POST</span>
              <span className="text-slate-600">/api/contact</span>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  data-testid="contact-input-name"
                  placeholder="Ada Lovelace"
                  className="w-full border border-slate-300 bg-slate-50 px-4 py-3 font-mono-jb text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  data-testid="contact-input-email"
                  placeholder="ada@analytical.engine"
                  className="w-full border border-slate-300 bg-slate-50 px-4 py-3 font-mono-jb text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  data-testid="contact-input-subject"
                  placeholder="Internship opportunity"
                  className="w-full border border-slate-300 bg-slate-50 px-4 py-3 font-mono-jb text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono-jb text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  data-testid="contact-input-message"
                  placeholder="Tell me about the role / project..."
                  className="w-full resize-none border border-slate-300 bg-slate-50 px-4 py-3 font-mono-jb text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit-btn"
                className="group inline-flex items-center gap-2 bg-orange-600 px-6 py-3 font-mono-jb text-xs uppercase tracking-wider text-white transition hover:bg-slate-900 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Request"}
                <Send className="h-3.5 w-3.5 transition group-hover:translate-x-1" strokeWidth={2} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
