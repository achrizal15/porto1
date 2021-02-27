import React, { useEffect } from "react";
import Layout from "../components/Layout";
import About from "./source/About";
import Contact from "./source/Contact";
import Home from "./source/Home";
import Project from "./source/Project";

export default function index() {
  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      console.log('sa')
    });
  }, []);
  return (
    <Layout>
      <Home />
      <About />
      <Project />
      <Contact/>
    </Layout>
  );
}
