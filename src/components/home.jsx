import React, { useEffect } from "react";
import Header from "../components/header";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import MenuBar from "../components/menuBar";
import Socials from "../components/socials";

const Home = () => {
    useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative ">
      <MenuBar />
      <Socials />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
