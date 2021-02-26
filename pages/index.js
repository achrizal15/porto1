import React from "react";
import Layout from "../components/Layout";
import About from "./source/About";
import Home from "./source/Home";

export default function index() {
  return (
    <div className="bg-gray-50">
    <Layout>
      <Home />
      <About />
    </Layout>
    </div>
  );
}
