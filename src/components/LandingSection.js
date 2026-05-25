import React, { useEffect } from "react";
import {
  Heading,
  VStack,
  Button,
  Text,
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

        // Evita que desaparezca por completo
        const opacity = Math.max(
          0.25,
          1 - scrollPosition / sectionHeight
        );

        landingSection.style.opacity = opacity;
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
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
      backgroundColor="#FFFFFF"
    >

      <VStack spacing={12} maxW="520px" px={6}>

        {/* IDENTIDAD (DISCRETA) */}
        <VStack spacing={2}>
          <Heading
            as="h3"
            size="sm"
            fontWeight="300"
            color="gray.700"
            letterSpacing="0.5px"
          >
            {greeting}
          </Heading>
        </VStack>

        {/* ENCUADRE CLÍNICO */}
        <VStack spacing={1}>
          <Text fontSize="sm" fontWeight="300" color="gray.700">
            {bio1}
          </Text>

          <Text fontSize="xs" fontWeight="300" color="gray.500">
            {bio2}
          </Text>
        </VStack>

        {/* ACCIÓN CENTRAL */}
        <Heading
          as="h1"
          fontSize="lg"
          fontWeight="300"
          letterSpacing="0.5px"
        >
          Solicitar entrevista
        </Heading>

        {/* BOTÓN (ESTILO CLÍNICO) */}
        <Button
          variant="outline"
          border="1px solid"
          borderColor="gray.400"
          borderRadius="0"
          px={12}
          py={6}
          fontWeight="300"
          bg="transparent"
          _hover={{ background: "gray.50" }}
          onClick={scrollToContact}
        >
          Continuar
        </Button>

      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;