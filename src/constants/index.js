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
  inovasiagriplot,
  b3d,
  gallimaps,
  rastertileserver,
  titiler,
  webodm,
  kicreate,
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
    title: "GeoSpatial Developer",
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
    title: "Senior Software Engineer (GIS)",
    company_name: "B3D Aps",
    icon: "https://b3d.dk/wp-content/uploads/2023/10/b3dlogos-vektor-17.svg",
    iconBg: "#E6DEDD",
    date: "April 2023 - August 2024",
    points: [
      "Developed APIs and interfaces for property management software, enabling building visualization, inspections, and digitization.",
      "Built Python APIs and a React interface to visualize building drone data in 2D/3D, using ODM to automate raw image conversion into orthophotos , 3D models and point clouds , reducing processing time by 30%.",
      "Built a Python raster tile engine to serve large GeoTIFFs, improving performance by 20% for faster data retrieval and a better user experience.",
      "Created an inspection tool with Maplibre and Canvas 2D for annotating building components in drone images ,helping property owners plan repairs and cut costs by 4% through precise maintenance predictions.",
    ],
  },
  {
    title: "Senior GIS Developer",
    company_name: "galli MAPS",
    icon: "https://dashboard-init.gallimap.com/static/media/Galli_color.63d82588c9bb80c5d639.png",
    iconBg: "#383E56",
    date: "August 2022 - March 2023",
    points: [
      "Developed a mobile app “GalliMaps” for navigating Kathmandu V alley’s narrow streets, managing street data and aerial imagery.",
      "Built a Python workflow to gather and store Kathmandu street data from OpenStreetMap and local sources in PostGIS , serving it via a custom basemap API with TileserverGL , processing 10K+ points daily for accurate navigation.",
      "Developed a custom satellite basemap API for Kathmandu using data from Sentinel-2, utilizing Python, Rasterio and Flask.",
      "Addressed inaccurate navigation problems in the market with GalliMaps, which won a National Product Award from the government.",
    ],
  },
  {
    title: "WebGIS Developer/Project Lead",
    company_name: "Naxa",
    icon: "https://naxa.com.np/ac468ef024692c042053c13a69625759.png",
    iconBg: "#383E56",
    date: "April 2020 - July 2022",
    points: [
      "Contributed to developing the “National Geoportal” mapping web app for Nepal ,which stores administrative vector and raster data for the country developed by Nepal government for public availability.",
      "Used Geonode(Django/Geoserver) for storing data like shapefiles and rasters to serve different types of OGC standard rest api like WMS, WMTS, WFS etc.",
      "Created APIs for user creation and management, social authentication, and payment integration.",
      "Led development of the Provincial Climate Management System(PCCMIS) for the Nepal government, integrating georeferenced data (shapefiles, GeoJSON, NetCDF, images) served via GeoServer and PostGIS.",
      "Implemented ER diagrams, system architecture, and design patterns for map visualization in the PCCMIS application, overseeing code reviews and testing to ensure adherence to coding standards.",
    ],
  },
  {
    title: "Python Developer",
    company_name: "Resimator Oy",
    icon: resimator_icon,
    iconBg: "#E6DEDD",
    date: "April 2019 - April 2020",
    points: [
      "Worked on one of the microservices of Izy AS.",
      "Implemented Kiosk e-commerce.",
      "Created Api in Python using Flask for e-commerce.",
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
  {
    testimonial: "Well done for Job Completion of inovasi agriplot",
    name: "Sakti Anggara",
    company: "Earthqualizer and Inovasi Digital",
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
        name: "geoserver",
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
    name: "Gallimaps",
    description:
      "A mobile app for navigating Kathmandu Valley’s narrow streets, managing street data and aerial imagery. The app helps to navigate the narrow streets of Kathmandu valley",
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
        name: "Maplibre",
        color: "pink-text-gradient",
      },
      {
        name: "TileserverGL",
        color: "blue-text-gradient",
      },
      {
        name: "postgis",
        color: "pink-text-gradient",
      },
      {
        name: "google-maps",
        color: "blue-text-gradient",
      },
      {
        name: "open-street-map",
        color: "blue-text-gradient",
      },
      {
        name: "sentinel-2",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "rasterio",
        color: "blue-text-gradient",
      },
    ],
    image: gallimaps,
    source_code_link: "https://map.gallimap.com/",
  },
  {
    name: "Inovasi Agriplot",
    description:
      "A complete commodity mapping software for coffee ,palm oil in the asian and europen . I worked as a full stack developer to develop the software . The most challenging part was to implement the 2d map using maplibre and postgis since the data was in millions",
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
        name: "maplibre",
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
    image: inovasiagriplot,
    source_code_link: "https://agriplot.earth/",
  },
  {
    name: "B3D Aps portal",
    description:
      "A complete cloud portal to manage , process, digitize the drone data . It helps to create 3d models, orthophotos, point cloud, DSM, DTM, contour lines, volume calculation, and many more. 3D visualization of the data is done using deckgl",
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
        name: "maplibre",
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
    ],
    image: b3d,
    source_code_link: "https://b3d.dk/",
  },

  {
    name: "Custom Raster Tile Engine",
    description:
      "Converts large GeoTIFFs or other raster files into map tiles for web-based applications. Uses GDAL and Rasterio to process and serve geospatial raster data quickly. Built on Flask, providing a simple and scalable API for requesting tiles based on location, zoom, and layer.",

    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "rasterio",
        color: "green-text-gradient",
      },
      {
        name: "geotiff",
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
        name: "cog",
        color: "pink-text-gradient",
      },
    ],
    image: rastertileserver,
    source_code_link: "https://github.com/anup39/b3d-rastertile-server",
  },
  {
    name: "Titiler Non Mercator support",
    description:
      "By default Titiler only supports WebMercator projection. I added support for non WebMercator projection in Titiler for serving WMTS and WMS.",

    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "rasterio",
        color: "green-text-gradient",
      },
      {
        name: "geotiff",
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
        name: "cog",
        color: "pink-text-gradient",
      },
      {
        name: "wms",
        color: "pink-text-gradient",
      },
      {
        name: "wmts",
        color: "pink-text-gradient",
      },
      {
        name: "epsg:25832",
        color: "pink-text-gradient",
      },
      {
        name: "titiler",
        color: "pink-text-gradient",
      },
    ],
    image: titiler,
    source_code_link: "https://github.com/anup39/titiler_nonwebmercator",
  },
  {
    name: "WebODM",
    description:
      "This is the customization of WebODM where we can drawing features on top of drone image and saving it , Printing the map , Serving WFS , Geojson of drawn layers . Vector tile serving of features drawn layers , Managing authentication",
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
        name: "maplibre",
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
        name: "photogrammetry",
        color: "pink-text-gradient",
      },
      {
        name: "3d-model",
        color: "pink-text-gradient",
      },
      {
        name: "point-cloud",
        color: "pink-text-gradient",
      },
    ],
    image: webodm,
    source_code_link: "https://github.com/anup39/WebODM-with-annotations",
  },
  {
    name: "KiCreate",
    description:
      "A web interface for visualizing solar information across Europe for specific areas of interest, built using React, Next.js, and MapLibre. This application allows users to interactively explore solar data and insights on a user-friendly map interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "maplibre",
        color: "pink-text-gradient",
      },
      {
        name: "deckgl",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },

      {
        name: "geocoding",
        color: "pink-text-gradient",
      },
      {
        name: "gis",
        color: "green-text-gradient",
      },
      {
        name: "solar",
        color: "pink-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
    ],
    image: kicreate,
    source_code_link: "https://github.com/anup39/kicreatesolar",
  },
];

export { services, technologies, experiences, testimonials, projects };
