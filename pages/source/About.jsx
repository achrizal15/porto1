import React from "react";

export default function About() {
  return (
    <div>
      <h3 id="about" className="text-center font-bold text-2xl italic mb-4">
        About Me
      </h3>

      <div className="grid gap-10 flex py-10 content-center ml-1 italic mr-1 mt-2 grid-rows-1 md:grid-cols-2 md:px-32">
        <div>
          <Card quote="Tetap Semangat" ftc="to-purple-500 from-purple-700">
            "Saya adalah orang yang suka belajar hal baru, karena hal itu akan
            menambah kreativitas yang saya miliki. Selain itu Web development
            dan Mobile development bagi saya disinilah salah satu tempat
            menuangkan kreativitas yang saya miliki"
          </Card>
        </div>
        <div>
          <Card quote="Jangan Menyerah" ftc="to-blue-500 from-blue-700">
            "Saat ini saya menguasai beberapa bahasa pemrograman misalnya saja
            JavaScript, Css, TypeScript, dan Html pastinya, saya sangat menyukai
            framework dan library dari JavaScript misalkan ReactJs dengan
            framework NextJs nya dan banyak hal lagi yang saat ini sedang saya
            pelajari"
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="shadow-2xl overflow-hidden rounded-xl hover:rotate-0 transition-transform duration-300 md:-rotate-6 md:transform">
      <div className="px-8 py-5 leading-relaxed  text-xl text-gray-800">
        {props.children}
      </div>
      <div
        className={
          "px-8 py-5 bg-gradient-to-br flex items-center justify-between " +
          props.ftc
        }
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">
            <img
              className="w-10 h-10 rounded-full border-white border-2"
              src="/images/cr1.jpg"
              alt="cr1"
            />
          </div>
          <div className="text-white"> "{props.quote}"</div>
        </div>
        <div className="text-gray-200 space-x-2  flex items-center">
          <a className="hover:text-white" href="#">
            <svg width="24" height="24" fill="currentColor">
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
            </svg>
          </a>
          <a className="hover:text-white" href="#">
            <svg width="24" height="24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
