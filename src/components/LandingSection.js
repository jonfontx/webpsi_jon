import React, { useEffect } from "react";
import {
  Heading,
  VStack,
  Button,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const greeting = "Jonatan Fontebasso";
const bio1 = "Psicólogo General Sanitario";
const bio2 = "Colegiado T-04523";

const LandingSection = () => {
  useEffect(() => {
    const scrollHandler = () => {
      const landingSection = document.querySelector(".landing");
      if (landingSection) {
        const scrollPosition = window.scrollY;
        const sectionHeight = landingSection.offsetHeight;
        const opacity = Math.max(0, 1 - scrollPosition / sectionHeight);
        landingSection.style.opacity = opacity;
      }
    };  

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollToContact = () => {
    document
      .getElementById("contactme")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FullScreenSection
      className="landing"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      backgroundColor="#F7FAFC"
    >

      <VStack spacing={16} style={{ zIndex: 1 }}>
        <VStack spacing={4}>

          <Heading as="h4" size="md" noOfLines={1}>
            {greeting}
          </Heading>
        </VStack>

        <VStack spacing={6} mt={{ base: "10" }}>
          <Heading as="h1" size="lg" noOfLines={1} id="bio">
            {bio1}
          </Heading>

          <Heading as="h2" size="sm" noOfLines={1} id="bio">
            {bio2}
          </Heading>

          <Button
            colorScheme="blackAlpha"
            size="lg"
            borderRadius="full"
            px={8}
            onClick={scrollToContact}
          >
            Solicitar Entrevista
          </Button>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;