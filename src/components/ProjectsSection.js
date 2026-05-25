import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

/*
const projects = [
 {
   title: "Psicoterapia Individual",
   description:
     "Espacio confidencial donde podrás hablar con libertad sobre aquello que hoy te genera malestar. Trabajaremos juntos sobre ansiedad, estrés, autoestima, identidad, relaciones o dificultades emocionales, buscando mayor claridad, bienestar y equilibrio en tu día a día.", //Includes real-time availability updates and email confirmations to ensure a smooth and reliable reservation process. Designed to be responsive and accessible, ensuring that it works seamlessly across different devices and screen sizes.//
   getImageSrc: () => require("../images/photo12.jpeg"),
   //url:"https://reactresto.netlify.app/"//
 },

 {
  title: "Consulta Online",
  description:
    "Utilizando herramientas digitales autorizadas por el Colegio Oficial de Psicólogos y el Servicio de Salud, podrás acceder a un espacio terapéutico desde donde estés, con la misma confidencialidad y acompañamiento profesional. Podrás realizar las sesiones adaptándolas a tu rutina y necesidades.", //It is a blueprint of the website's layout, structure, and content, and is intended to provide a visual representation of the website's design and functionality. The design incorporates a clean and modern aesthetic, with a color scheme that is consistent throughout the site.//
  getImageSrc: () => require("../images/photo13.jpeg"),
  //url:"https://www.figma.com/proto/1ZS9JySXpteZ0BiZSpETAY/Restaurant-Wireframe-Portfolio?node-id=1-57&scaling=min-zoom&page-id=0%3A1&mode=design&t=AIp6dyo7iaoVKFpJ-1"//
},

 {
   title: "Psicoterapia de Pareja",
   description:
     "Diálogo y acompañamiento para trabajar dificultades en la relación, mejorar la comunicación y afrontar conflictos, crisis o distanciamiento emocional. El objetivo es comprender lo que está ocurriendo entre ambos y encontrar nuevas formas de vincularse.", //This project serves as a testament to my practical skills in web design and highlights my ability to deliver high-quality ecommerce solutions tailored to meet specific business requirements.//
    getImageSrc: () => require("../images/photo11.jpeg"),
    //url:"https://tiendaterapiavital.com/"//
 }, 
/*
 {
   title: "Espacio de lectura y reflexión",
   description:
     "Artículos y recursos sobre ansiedad, relaciones, autoestima y bienestar emocional.",
   getImageSrc: () => require("../images/photox.jpeg"),
   //url:""//
 },

];

const ProjectsSection = () => {
 return (
   <FullScreenSection 
     backgroundColor="#F7FAFC"
     p={8}
     alignItems="flex-start"
     spacing={8}
   >
     <Heading as="h1" id="projects-section" style={{zIndex:1}}>
       Servicios
     </Heading>
     <Box id="projects"
       display="grid"
       gridTemplateColumns="repeat(2,minmax(0,1fr))"
       gridGap={8}
       style={{zIndex:1}}
     >
       {projects.map((project) => (
         <Card
           key={project.title}
           title={project.title}
           description={project.description}
           url={project.url}
           imageSrc={project.getImageSrc()}
         />
       ))}
     </Box>
   </FullScreenSection>
 );
};
*/
export default ProjectsSection;
