import React from "react";
import Layout from "../components/Layout";
import About from "./source/About";
import Home from "./source/Home";
import Project from "./source/Project";

export default function index() {
  return (
    <Layout>
      <Home />
      <About />
      <Project />
    </Layout>
  );
}
