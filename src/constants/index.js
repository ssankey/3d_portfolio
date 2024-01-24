import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    rv,
    allevents,
    link,
    threejs,
    admere,
    php,
    cpp,
    movieland,
    dashboard,
    portfolio,
    mysql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ReactJs Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "c++",
      icon: cpp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "MySql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "RV NETWORKING",
      icon: rv,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Successfully completed web development projects for 5+ clients, utilizing skills in HTML,CSS, Javascript and PHP.",
        "Demonstrated ability to work independently and effectively communicate with clients to understand project needs and deliver high-quality work within deadlines",
        "Developed responsive and user-friendly websites that achieved client objectives,resulting in positive feedback and repeat business.",
        "Managed project timelines, budgets, and resources to ensure successful project delivery.",
        "Tech: HTML,CSS, Javascript, PHP ,ReactJs and MySQL"
      ],
    },
    {
      title: "Full stack Developer Intern",
      company_name: "allevents.in",
      icon: allevents,
      iconBg: "#fff",
      date: "Dec 2021 - Feb 2022",
      points: [
        "Developed new features and functionality forthe core website, utilizing HTML, CSS, Javascript, PHP, MySql, Git, and ReactJS.",
        "Successfully integrated Pabbly payment gateway to enable a subscription-based model for users.",
        "Collaborated with senior developers and stakeholders to understand project requirements and deliver high-quality work within deadlines.",
        "Contributed to the development and maintenance of clean, scalable, and maintainable codebases.",
        "Tech: HTML, CSS, Javascript, PHP, JQuery and MySQL"
      ],
    },
    {
      title: "Frontend Developer Intern",
      company_name: "ADMERE SYLVYN",
      icon: admere,
      iconBg: "#383E56",
      date: "Oct 2021 - Nov 2021",
      points: [
        "Collaborated with a team of developers and designers to create responsive and visually appealing websites, utilizing HTML, CSS, MaterialUI, and ReactJS",
        "Successfully translated design concepts into functional and user-friendly interfaces that met client objectives and requirements.",
        "Maintained and optimized existing codebases, troubleshooting issues and continuously improving website performance.",
        "Tech: HTML, CSS, Javascript, MaterialUI, and ReactJs.",
      ],
    },
  ];
  
 
  
  const projects = [
    {
      name: "ReactJs Dashboard",
      description:
        "A ReactJS dashboard project with NextAuth for authentication, Chart.js for data visualization, and Tailwind CSS for styling. It provides a user-friendly interface with interactive charts and secure login features, making it easy to manage and analyze data.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "nextauth",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://listed-dashboard-tan.vercel.app/",
    },
    {
      name: "MovieLand",
      description:
        "The MovieReact app is a fantastic tool for movie enthusiasts who want to discover their favorite movies.It features a simple and intuitive userinterface that allows users to search for their favorite movies",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: movieland,
      source_code_link: "https://smovieland.netlify.app/",
    },
    {
      name: "Portfolio Website",
      description:
        "Created an immersive portfolio website with stunning 3D animations using ReactJS and Three.js. Showcase your work with interactive visuals, smooth transitions, and engaging user experiences, leaving a lasting impression on visitors.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://sanketshinde.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };
