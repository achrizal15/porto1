import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div className="antialiased font-mono">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Navbar/>
      {props.children}
    </div>
  );
}
