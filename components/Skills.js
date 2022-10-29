/* eslint-disable @next/next/no-img-element */
const Skills = () => {
  const skills = [
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
      name: "HTML",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
      name: "CSS",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      name: "Javascript",
    },
    {
      id: 4,
      img: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
      name: "React",
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png",
      name: "Next",
    },
    {
      id: 10,
      img: "https://i0.wp.com/everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png?fit=2800%2C2530&ssl=1",
      name: "Redux",
    },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      name: "tailwind",
    },
    {
      id: 7,
      img: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
      name: "Node",
    },
    {
      id: 8,
      img: "https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-vertical.png",
      name: "Firebase",
    },
    {
      id: 9,
      img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      name: "Express",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-5 mb-14 flex flex-col justify-center text-center">
      <p className="text-4xl font-semibold mb-8">Skills</p>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            className="flex items-center text-center justify-between m-2 p-2 rounded-md cursor-pointer group shadow-lg hover:shadow-2xl bg-white"
            key={skill.id}
          >
            <img
              src={skill.img}
              alt="logo"
              className="h-16 w-20 object-contain group-hover:scale-110 transition-all ease-in-out duration-300"
            />
            <p className="font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
