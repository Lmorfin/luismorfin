import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <div className="layout">
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
