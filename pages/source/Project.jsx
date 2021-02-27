import React from "react";

export default function Project() {
  return (
    <div className="from-blue-300 bg-gradient-to-b to-blue-100 " id="project">
      <h3 className="text-2xl font-bold text-white italic text-center">
        My Project
      </h3>
      <div className="md:justify-center md:flex md:space-x-10 py-2 px-4">
        <ProjectCard
          rt="md:-rotate-6 rotate-2"
          judul="Dashboard Admin"
          gbr="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        >
          <img
            className="rounded-full animate-bounce  w-10 border border-black hover:border-blue-600"
            src="https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default"
            alt="tailwind"
          />
          <img
            className="rounded-full animate-bounce-slow delay-100 w-10 border border-black object-fill hover:border-green-600"
            src="https://e7.pngegg.com/pngimages/1006/374/png-clipart-web-development-node-js-socket-io-javascript-network-socket-modernization-miscellaneous-logo-thumbnail.png"
            alt="nodejs"
          />
          <img
            className="rounded-full w-10 animate-bounce delay-75  border border-black hover:border-white"
            src="https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg"
            alt="nextjs"
          />
        </ProjectCard>
        <ProjectCard
          rt="md:rotate-2 -rotate-2"
          judul="Login Page"
          gbr="https://daengweb.id/uploads/galeri/1/Flutter/mengenal_widget_flutter_-_membuat_form_login-optimize.png"
        >
          <img
            className="rounded-full animate-bounce  w-10 border border-black hover:border-blue-600"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6gkXWKBqYLSKrNmydpKAHF3AwSlBzFYZXw&usqp=CAU"
            alt="flutter"
          />
          <img
            className="rounded-full animate-bounce-slow delay-200  w-10 border border-black object-fill hover:border-yellow-600"
            src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
            alt="firebase"
          />
        </ProjectCard>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 127 1440 150">
        <path
          fill="#f9fafb"
          fillOpacity="1"
          d="M0,288L34.3,282.7C68.6,277,137,267,206,240C274.3,213,343,171,411,160C480,149,549,171,617,176C685.7,181,754,171,823,154.7C891.4,139,960,117,1029,133.3C1097.1,149,1166,203,1234,229.3C1302.9,256,1371,256,1406,256L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

function ProjectCard(props) {
  return (
    <div className="flex justify-center">
      <div
        className={
          "shadow-xl w-72 md:w-80 hover:rotate-0 border-2 transition hover:scale-110 transform hover:ease-in-out duration-700 rounded-lg overflow-hidden bg-white my-4 " +
          props.rt
        }
      >
        <img
          className="rounded-b-md w-full  md:h-60 object-cover h-32"
          src={props.gbr}
          alt="pr-1"
        />
        <div className="px-4 text-gray-600 py-2">
          <p className="font-bold text-lg">{props.judul}</p>

          <hr className="mt-1 mb-3" />
          <div className="flex space-x-2">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
