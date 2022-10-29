import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Ahmed Morsy | Frontend Developer</title>
      </Head>
      <main className="bg-gray-100 tracking-widest">
        <Navbar />
        <Main />
        <Skills />
        <Projects />
      </main>
    </div>
  );
};

export default HomePage;
