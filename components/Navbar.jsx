import React from "react";
import * as Smooth from "react-scroll";

export default function Navbar() {
  return (
    <div className="bg-blue-100 md:sticky hidden md:block z-50  top-0">
      <div className="flex items-center justify-between px-7 antialiased py-2">
        <p className="font-bold italic text-white text-xl font-mono">
          <Smooth.Link to="home" smooth>Welcome To My Portfolio</Smooth.Link>
        </p>
        <div className="flex items-center font-mono text-md">
          <div className="px-2 text-blue-400 hover:text-white">
            <Smooth.Link smooth to="about">About</Smooth.Link>
          </div>
          <div className="px-2 text-blue-400 hover:text-white">
            <Smooth.Link smooth to="project">Project</Smooth.Link>
          </div>
          <div className="px-2 text-blue-400 hover:text-white">
            <Smooth.Link smooth to="contact">Contact</Smooth.Link>
          </div>
        </div>
      </div>
    </div>
  );
}
