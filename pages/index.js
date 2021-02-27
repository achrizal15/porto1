import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import About from "./source/About";
import Contact from "./source/Contact";
import Home from "./source/Home";
import Project from "./source/Project";
import * as Smooth from "react-scroll";
export default function index() {
  const [bt, setBt] = useState("hidden");
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY >= 160) {
        setBt("");
      } else {
        setBt("hidden");
      }
    });
  }, []);
  return (
    <Layout>
      <Smooth.Link
        smooth
        to="home"
        className={
          "z-50 bg-red-600 md:hidden font-bold bg-opacity-30 w-10 p-2 fixed left-4 bottom-4 rounded-md " +
          bt
        }
      >
        Top
      </Smooth.Link>
      <Home />
      <About />
      <Project />
      <Contact />
    </Layout>
  );
}
