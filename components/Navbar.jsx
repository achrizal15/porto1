import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-100 md:sticky hidden md:block z-50  top-0">
      <div className="flex items-center justify-between px-7 antialiased py-2">
        <p className="font-bold italic text-white text-xl font-mono">
          <Link href="#home">Welcome To My Portfolio</Link>
        </p>
        <div className="flex items-center font-mono">
          <div className="px-2 text-blue-300 hover:text-white">
            <Link href="#about">About</Link>
          </div>
          <div className="px-2 text-blue-300 hover:text-white">
            <Link href="#project">Project</Link>
          </div>
          <div className="px-2 text-blue-300 hover:text-white">
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
