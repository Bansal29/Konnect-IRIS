import React, { useState } from "react";
import Navbar from "./components/layout/header/Navbar";
import Footer from "./components/layout/footer/Footer";
import Hero from "./components/layout/Hero/Hero";
import Social from "./components/layout/Social/Social";
import About from "./components/layout/About/About.jsx";
import Contact from "./components/layout/Contact/Contact.jsx";
import ProjectList from "./components/layout/Project/ProjectList";
import Assistant from "./components/layout/Assistant/Assistant.jsx";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
      <Social />
      <Assistant />
    </div>
  );
}
export default App;
