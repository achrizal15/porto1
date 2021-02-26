import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div className="antialiased font-mono">
      <Head>
        <title>Portofolioku</title>
      </Head>
      <Navbar/>
      {props.children}
    </div>
  );
}
