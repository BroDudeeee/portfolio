import Image from "next/image";

const Main = () => {
  return (
    <div className="flex items-center justify-center max-w-4xl mx-auto h-[87vh] flex-col">
      <div className="text-4xl md:text-5xl font-semibold space-y-4 text-center">
        <p>
          Hello, I am{" "}
          <span className="uppercase text-blue-700 text-5xl font-bold">
            Ahmed
          </span>
        </p>
        <p>A Front-End Developer</p>
      </div>
      <div className="max-w-lg text-center mx-auto py-8">
        <p>
          I am a Front-End Developer Working with Javascript, Html, CSS Next js,
          React js and Flutter While learning Back-End Technologies
        </p>
      </div>
      <div className="py-8">
        <p className="mb-4 tracking-[8px] bg-gray-200 px-10 rounded-md">
          Contact Me
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center text-center shadow-lg bg-white p-3 hover:shadow-xl cursor-pointer rounded-full hover:scale-110 transition-all ease-in-out duration-200">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
              alt="github"
              width={20}
              height={20}
            />
          </div>
          <div className="flex items-center justify-center text-center shadow-lg bg-white p-3 hover:shadow-xl cursor-pointer rounded-full hover:scale-110 transition-all ease-in-out duration-200">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/646/646094.png"
              alt="email"
              width={20}
              height={20}
            />
          </div>
          <div className="flex items-center justify-center text-center shadow-lg bg-white p-3 hover:shadow-xl cursor-pointer rounded-full hover:scale-110 transition-all ease-in-out duration-200">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3097/3097126.png"
              alt="wuzzuf"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
