import Head from "next/head";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Ahmed Morsy | Frontend Developer</title>
      </Head>
      <main className="bg-gray-100 h-screen">
        <Navbar />
      </main>
    </div>
  );
};

export default HomePage;
