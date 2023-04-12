import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  docker,
  resimator_icon,
  jobit,
  tripguide,
  threejs,
  openlayers,
  arcgis,
  django,
  mapbox,
  geoserver,
  pccmis,
  driftsense,
  Bugmapper,
  naxamapper,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Mobile Developer ",
    icon: mobile,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "openlayers",
    icon: openlayers,
  },
  {
    name: "arcgis",
    icon: arcgis,
  },
  {
    name: "mapbox",
    icon: mapbox,
  },
  {
    name: "geoserver",
    icon: geoserver,
  },
];

const experiences = [
  {
    title: "Lead WebGIS Developer",
    company_name: "Naxa",
    icon: "https://naxa.com.np/ac468ef024692c042053c13a69625759.png",
    iconBg: "#383E56",
    date: "Feb 2020 - April 2022",
    points: [
      "As a Lead WebGIS Developer and Project Lead, I had the privilege of spearheading the development of GIS applications using both open-source and proprietary software.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "My role also involved implementing system architecture and ER diagrams, ensuring seamless integration of backend and frontend technologies. ",
    ],
  },
  {
    title: "Senior Python Developer",
    company_name: "Resimator Oy",
    icon: resimator_icon,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Nov 2022",
    points: [
      "Developing and maintaining web applications using Flask, Django and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing high end restful apis.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelanche GIS Developer",
    company_name: "iGreen Developments",
    icon: "https://media.licdn.com/dms/image/C4D0BAQHtRdS-INyu0w/company-logo_200_200/0/1607415013187?e=1689206400&v=beta&t=2nFbE4Ati95iz2eW0UDoowxSWWROswPMyt8-zZgWtBA",
    iconBg: "#383E56",
    date: "April 2021 - Jan 2023",
    points: [
      "I worked as a Full Stack Developer on an agricultural project named Driftsense",
      "Specifically, I worked on the part of the project that required a combination of GIS knowledge and the latest technologies.",
      "My responsibilities included involvement in system architecture, creating the database diagram (ER diagram), implementing a user authentication model, performing unit testing and QA, optimizing map-related functionalities, and working with both open source and proprietary technologies.",
    ],
  },
  {
    title: "Fullstack GIS Developer",
    company_name: "BugMapper",
    icon: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_468984254_67380.jpg",
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Develop the MVP product for BugMapper. Bugmapper is used to keep track of the activities on Greehouse",
      "Implemented Major map frontend and backend components",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implementing high end restful apis, data base diagrams.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "Anup has deep understanding of Web ,mobile and GIS technologies . One of the most talented developer i have worked with.",
    name: "Nir Yafe",
    designation: "Founder",
    company: "iGreen Developments",
  },
  {
    testimonial:
      "There was some challenging Map funtionality I need and Anup delievered the project very soomthly . His understanding in web , mobile , GIS and 3d technology is impresive",
    name: "Apler Altinok",
    designation: "Founder",
    company: "BugMapper",
  },
  {
    testimonial:
      "Anup was fantastic to work with. I am a software developer but was new to ArcGIS and ESRI services. Anup worked with me to answer my questions, look at my code, suggest revisions, show me what was possible, and help build out my prototype.",
    name: "John Armstrong",
    designation: "CTO",
    company: "Bright & Shiny",
  },
  {
    testimonial:
      "If you're looking for Data/GIS work or mapping, web-apps etc, look no further than Anup. He is INCREDIBLY talented and skilled in this area. The project was completed on-time, with more features than initially expected. He went above and beyond to satisfy our needs and exceeded our expectations in this project. I highly recommend him to anyone looking for this type of work.",
    name: "Baron Alloway",
    company: "ReaLawState Realty Brokerage Ltd",
  },
];

const projects = [
  {
    name: "PCCMIS",
    description:
      "Provincial Climate Change Management Information System (PCCMIS) is an initative to support evidence-based decision-making at the province and local level for climate action in Karnali Province.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "openlayers",
        color: "pink-text-gradient",
      },
      {
        name: "geroserver",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
      {
        name: "google-earth-engine",
        color: "blue-text-gradient",
      },
    ],
    image: pccmis,
    source_code_link: "https://pccmis.karnali.gov.np/",
  },
  {
    name: "Driftsense",
    description:
      "DriftSense has developed the first evidence-based prediction tool for growers, to know exactly when to make one of their most critical decisions: when to apply pesticide to each plot for optimal precision.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "openlayers",
        color: "pink-text-gradient",
      },
      {
        name: "geroserver",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
      {
        name: "google-maps",
        color: "blue-text-gradient",
      },
    ],
    image: driftsense,
    source_code_link: "https://qa.drift-sense.com",
  },
  {
    name: "Bugmapper",
    description:
      "A complete agriculture application to track green house activites like pest, bug ,chemical spraying, drone spraying and to increase the productivity. It helps farmers to reduce their hetic time on killing bugs and pets manually",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "google-maps",
        color: "pink-text-gradient",
      },
      {
        name: "postgis",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: Bugmapper,
    source_code_link: "http://map.mon-agri.org/#/locations",
  },
  {
    name: "Naxamapper",
    description:
      "Naxamapper is the online map software to build the world class digital map for free. It has functionality to add shapefile and other vector data , style them , run some of the geoprocessing tool, print and share the map ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "openlayers",
        color: "pink-text-gradient",
      },
      {
        name: "postgis",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "open-street-map",
        color: "pink-text-gradient",
      },
      {
        name: "kobo-toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: naxamapper,
    source_code_link: "https://naxamapper.com/#/",
  },
];

export { services, technologies, experiences, testimonials, projects };
