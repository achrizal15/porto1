import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="flex justify-center space-x-2 items-center">
        <p className="font-bold text-lg">Copyright </p>
        <svg
          className="w-4 text-red-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
        <p className="font-bold text-lg">Ach Rizal 2021</p>
      </footer>
    </div>
  );
}
