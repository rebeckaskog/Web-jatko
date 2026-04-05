import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import PopularInstruments from "./components/PopularInstruments";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyUs />
        <PopularInstruments />
        <section className="bg-orange-50 py-16" aria-hidden="true"/>
        <HowItWorks />
        <section className="bg-orange-50 py-16" aria-hidden="true"/>
        <section className="bg-orange-50 py-16" aria-hidden="true"/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
