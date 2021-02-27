import React from "react";

export default function Contact() {
  return (
    <div className="pb-24" id="contact">
      <h3 className="italic text-2xl font-bold text-center mb-4">Contact</h3>
      <div className="flex justify-center">
        <form className="space-y-3  text-center ">
          <input
            id="name"
            placeholder="Name"
            className="border-transparent w-80 block shadow-xl h-7 p-4 rounded-lg border focus:outline-none bg-white"
            type="text"
          />
          <input
            id="email"
            placeholder="Email"
            className="border-transparent w-80 block shadow-xl h-7 p-4 rounded-lg border focus:outline-none bg-white"
            type="email"
          />
          <textarea
            name="pesan"
            id="pesan"
            placeholder="Pesan Anda"
            className="focus:outline-none resize-none p-4 rounded-lg shadow-xl"
            cols="30"
            rows="2"
          ></textarea>
          <br />
          <button
            type="button"
            className="focus:outline-none w-24 bg-white mt-2 p-1.5 shadow-lg  hover:bg-white rounded-lg text-black  border-2 border-transparent hover:border-blue-300  font-bold hover:text-blue-700 transform"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
