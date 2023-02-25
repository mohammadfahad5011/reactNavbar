import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Home from "../pages/Home";
import Skills from "../pages/Skills";

const HomeScreen = () => {
  return (
    <>
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
    </>
  );
};

export default HomeScreen;
