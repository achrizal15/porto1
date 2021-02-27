import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div className="antialiased font-mono bg-gray-50">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Navbar/>
      {props.children}
      <Footer/>
    </div>
  );
}
