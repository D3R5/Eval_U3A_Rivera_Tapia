import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";

function App() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Services setSelectedService={setSelectedService} />

      <Testimonials />
      <FAQ />

      <ContactForm selectedService={selectedService} />

      <AdminPanel />
      <Footer />
    </>
  );
}

export default App;
