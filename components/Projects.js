import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Twitter-clone",
      link: "https://twitter-olive.vercel.app/",
      img: "/images/twitter-clone.png",
    },
    {
      id: 2,
      name: "Amazon-clone",
      link: "https://amazon-navy-pi.vercel.app/",
      img: "/images/amazon-clone.png",
    },
    {
      id: 3,
      name: "Medium-clone",
      link: "https://blog-seven-beta-45.vercel.app/",
      img: "/images/medium-clone.png",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-4 mb-14 flex flex-col justify-center items-center">
      <p className="text-4xl font-semibold mb-8">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map(({ id, img, name, link }) => (
          <div
            key={id}
            className="relative hover:bg-blue-600 flex items-center justify-center text-center m-4 group border-2 border-gray-200 shadow-md rounded-xl h-60 sm:h-80 w-60 sm:w-96"
          >
            <img
              src={img}
              alt="project"
              className="h-full w-full object-cover group-hover:hidden rounded-xl"
            />
            <p className="absolute top-[30%] left-[50%] translate-x-[-50%] text-white font-bold text-3xl whitespace-nowrap hidden group-hover:inline-flex">
              {name}
            </p>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] bg-white font-semibold px-4 py-1 rounded-lg text-2xl hover:bg-gray-100 hidden group-hover:inline-flex">
              <Link key={id} href={link} target="_blank">
                Take a look
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
