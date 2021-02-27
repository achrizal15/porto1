import React from "react";

export default function Project() {
  return (
    <div className="bg-blue-300 py-2 px-4" id="project">
      <h3 className="text-2xl font-bold italic text-center">My Project</h3>
      <div className="flex justify-center  space-x-4">
        <ProjectCard
          judul="Dashboard Admin"
          gbr="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        >
          <img
            className="rounded-full  w-10 border border-black hover:border-blue-600"
            src="https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default"
            alt="tailwind"
          />
          <img
            className="rounded-full w-10 border border-black object-fill hover:border-green-600"
            src="https://e7.pngegg.com/pngimages/1006/374/png-clipart-web-development-node-js-socket-io-javascript-network-socket-modernization-miscellaneous-logo-thumbnail.png"
            alt="nodejs"
          />
          <img
            className="rounded-full w-10  border border-black hover:border-white"
            src="https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg"
            alt="nextjs"
          />
        </ProjectCard>
        <ProjectCard
          judul="Login Page"
          gbr="https://daengweb.id/uploads/galeri/1/Flutter/mengenal_widget_flutter_-_membuat_form_login-optimize.png"
        >
          <img
            className="rounded-full w-10 border border-black hover:border-blue-600"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6gkXWKBqYLSKrNmydpKAHF3AwSlBzFYZXw&usqp=CAU"
            alt="flutter"
          />
          <img
            className="rounded-full  w-10 border border-black object-fill hover:border-yellow-600"
            src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
            alt="firebase"
          />
        </ProjectCard>
      </div>
    </div>
  );
}

function ProjectCard(props) {
  return (
    <div className="shadow-lg w-80 rounded-lg overflow-hidden bg-white  my-4">
      <img
        className="rounded-b-md w-full  md:h-60 object-cover h-32"
        src={props.gbr}
        alt="pr-1"
      />
      <div className="px-4 text-gray-600 py-2">
        <p className="font-bold text-lg">{props.judul}</p>
        <hr className="my-2" />
        <div className="flex space-x-2">{props.children}</div>
      </div>
    </div>
  );
}
