import React from "react";
import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main data-testid="home-page" className="grain min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
