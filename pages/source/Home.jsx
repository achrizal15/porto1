import React from "react";

export default function Home(props) {
  return (
    <div id='home'  className="bg-blue-300 overflow-hidden h-lg 2xl:h-heading text-white pt-1">
      <div className="flex justify-center mb-1 pt-2 ">
        <img
          className="rounded-full border-4 border-white shadow"
          src="/images/pp.jpg"
          width={200}
          height={200}
          alt="profile"
        />
      </div>
      <p className="font-bold italic text-3xl text-center ">Ach Rizal</p>
      <p className="font-bold  text-center">
        Mahasiswa || Web Development ||Mobile Development
      </p>
      <div className=''>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 135 1440 120"><path fill="#f9fafb" fillOpacity="1" d="M0,192L21.8,197.3C43.6,203,87,213,131,208C174.5,203,218,181,262,176C305.5,171,349,181,393,197.3C436.4,213,480,235,524,240C567.3,245,611,235,655,229.3C698.2,224,742,224,785,224C829.1,224,873,224,916,208C960,192,1004,160,1047,160C1090.9,160,1135,192,1178,186.7C1221.8,181,1265,139,1309,138.7C1352.7,139,1396,181,1418,202.7L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg></div>
    </div>
  );
}
