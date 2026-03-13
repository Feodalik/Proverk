import { useRef } from "react";
import { Toaster } from "./components/ui/sonner";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Portfolio } from "./components/Portfolio";
import { HowWeWork } from "./components/HowWeWork";
import { Calculator } from "./components/Calculator";
import { WhyCheaper } from "./components/WhyCheaper";
import { Testimonials } from "./components/Testimonials";
import { Trust } from "./components/Trust";
import { Promo } from "./components/Promo";
import { ContactForm } from "./components/ContactForm";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";

export default function App() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onCtaClick={scrollToContactForm} />
      <Benefits />
      <Portfolio onCtaClick={scrollToContactForm} />
      <HowWeWork />
      <Calculator />
      <WhyCheaper />
      <Testimonials />
      <Trust />
      <Promo onCtaClick={scrollToContactForm} />
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      <FAQ />
      <Footer />
      <FloatingButtons onCallClick={scrollToContactForm} />
      <Toaster position="top-right" />
    </div>
  );
}
