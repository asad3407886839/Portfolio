import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    landing,
    todo,
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
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "Seo Writer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Belike Group",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2024 - Cuurent",
      points: [
        "Developed and maintained web applications using React.js and other related technologies, including Bootstrap and Tailwind CSS.",
        "Utilized Redux for state management, optimizing the efficiency of the applications.",
        "Implemented robust user authentication systems, catering to both admin users and sub-admins.",

      ],
    },
    {
      title: "ReactJs Developer",
      company_name: "Social Swirl",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July - Current",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developing Business Website and also add Live Graph throup Api.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Fiver",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2024 - Current",
      points: [
        "Worked as a web developer on freelancing platforms, delivering tailored solutions to diverse clients.",
        "Developed projects for both offline and online marketplaces, catering to a wide range of business needs.",
        ,
      ],
    },
    {
      title: "Web Developer",
      company_name: "Swift Media Marketing",
      icon: nodejs,
      iconBg: "#383E56",
      date: "June 2024 - Current",
      points: [
       "Developed and maintained web applications using React.js and other related technologies, including HTML CSS Bootstrap and Tailwind CSS.",
        "Utilized usestate and useeffect for state management, optimizing the efficiency of the applications.",
        ,
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce Store",
      description:
        "Experience a seamless online shopping journey with our meticulously crafted e-commerce store. Built using HTML, CSS, and JavaScript, our platform offers a stunning user interface and captivating signin and login pages. Enjoy hassle-free navigation as you explore our extensive product range. Our advanced features include a dynamic shopping cart for easy upgrades, and smooth pagination for effortless browsing. Elevate your online shopping experience with us.",
      tags: [
        {
          name: "html",
          color: "red-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://delicate-bavarois-e4c658.netlify.app/",
    },
    {
      name: "Movie App",
      description:
        "Experience seamless movie browsing with our app, combining the power of Axios for efficient API interactions and the dynamic user interface of ReactJS. Discover, explore, and stay updated on your favorite movies effortlessly.",
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
      image: jobit,
      source_code_link: "https://movie-app-gamma-swart.vercel.app/",
    },
    {
      name: "Wedding Dashboard",
      description:
        "The Wedding Dashboard is a feature-rich application built using Next.js and powered by Firebase. It offers comprehensive wedding management with full authentication capabilities. The frontend boasts an array of visually stunning pages, each designed to enhance the user experience. From RSVP forms to seating arrangements, the dashboard seamlessly integrates form functionalities, providing an all-in-one solution for organizing and coordinating every aspect of a memorable wedding event.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "jquerey",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://wedding-app-dashboard.vercel.app/",
    },
    {
      name: "To do List",
      description:
      "Crafted with Next.js, this dynamic to-do list seamlessly integrates Firebase for real-time data synchronization and storage. Harnessing the power of local storage, it ensures data persistence even offline. Experience a smooth, responsive, and collaborative task management solution.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/Bakar002/todolist",
    },
    {
      name: "Medical Landing page",
      description:
      "Explore our innovative medical landing page, seamlessly blending informative content with captivating animations. Experience dynamic visuals that simplify complex medical concepts. Our page offers a range of interactive features, from symptom checkers to virtual consultations, enhancing user engagement and providing personalized healthcare insights.",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: landing,
      source_code_link: "https://github.com/Bakar002/Project2",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };