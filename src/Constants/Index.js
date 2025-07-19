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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    logovirtue,
    remotedev,
    weatherapp,
    gadgethub,
    reactresume,
    hospitalprg,
    consultant,
    mernblog,

  } from "../assets";
  import audro from '../assets/audro.jpg'
  import logohello from '../assets/company/logohello.png'
  
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
      title: "Front-end Developer",
      icon: web,
    },
    {
      title: "React js Developer",
      icon: mobile,
    },
    {
      title: "Html CSS",
      icon: backend,
    },
    {
      title: "Bootstrap Tailwind css",
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Front-end Developer",
      company_name: "HelloWorld Technologies",
      icon: logohello,
      iconBg: "#383E56",
      date: "January 2023 - April 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.Js Developer",
      company_name: "VirtueNetz Software House",
      icon: logovirtue,
      iconBg: "#E6DEDD",
      date: "May 2023 - October 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.Js Web Developer",
      company_name: "Remotebase Developer",
      icon: remotedev,
      iconBg: "#383E56",
      date: "October 2023 - present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        " As a Software engineer in Helloworld Software House myself, I am thrilled to say Danial has defied all expectations.",
      name: "Muhammad Wasim",
      designation: "Admin manager",
      company: "HelloWorld",
      image: logohello,
    },
    {
      testimonial:
        "It is very rare to meet a web developer who truly cares about their client's success like Danial does. He is exceptional in his work",
      name: "Muhammad Maaz",
      designation: "Senior Developer",
      company: "Virtue netz",
      image: logovirtue,
    },
    {
      testimonial:
        "After Danial update our website, our traffic increased by 50%. Brilliant what he does. We can't thank him enough!",
      name: "Lisa",
      designation: "Owner",
      company: "Store",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Mern blog",
      description:
        "Mern blog is a blogging site with user and admin dashboard , profile, create and edit post functionality with authentication and  google Auth working with mongodb and node.js (express) .",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "github",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss, flowbite react",
          color: "pink-text-gradient",
        },
      ],
      image: mernblog,
      source_code_link: "https://github.com/DanialAhsan93/mern-blog",
      source_link:"https://danialahsan93.github.io/mern-blog/",
    },
    {
      name: "gadgethub",
      description:
        "Web application that enables users to sell their products, tell their brand story to million of people online, and make customers all over the world.",
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
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gadgethub,
      source_code_link: "https://github.com/DanialAhsan93/Gadgethub",
      source_link:"https://danialahsan93.github.io/Gadgethub/",

    },
    {
      name: "React resume",
      description:
        "A comprehensive react web application which gives you variety of resume templates,  so one can make unique and proffessional job winning resume.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: reactresume,
      source_code_link: "https://github.com/DanialAhsan93/React-resume",
      source_link:"https://danialahsan93.github.io/React-resume/",

    },
    {
      name: "Audro",
      description:
        "A modren react web application which enhances your online presence and tell you brand story to million of  and make clients all over the world.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: audro,
      source_code_link: "https://github.com/DanialAhsan93/Audro-App",
      source_link:"https://danialahsan93.github.io/Audro-App/",

    },
    {
      name: "Weather app",
      description:
        "Web-based platform that allows users to search weather info around the world for various reasons, providing a convenient and efficient solution for business needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "github",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/DanialAhsan93/weatherreact",
      source_link:"https://DanialAhsan93.github.io/weatherreact",
    },
    {
      name: "Hospital-Landingpage",
      description:
        "A modren react hospital-Landing page which enhances your online presence and tell you brand story to million of  and make clients all over the world.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: hospitalprg,
      source_code_link: "https://github.com/DanialAhsan93/Landingpage_hospital",
      source_link:"https://danialahsan93.github.io/Landingpage_hospital/",

    },
    {
      name: "U-I-M-G Landing page",
      description:
        "A modren react web application which enhances your online presence and tell you brand story to million of  and make clients all over the world.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: consultant,
      source_code_link: "https://github.com/DanialAhsan93/U_I_M_G",
      source_link:"https://danialahsan93.github.io/U_I_M_G/",

    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };