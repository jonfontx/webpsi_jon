import React from "react";
import {
  Heading,
  VStack,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const bio1 = "Psicólogo General Sanitario";
const bio2 = "Colegiado T-04523";

const LandingSection = () => {

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

        {/* ENCUADRE MÍNIMO */}
        <VStack spacing={1}>
          <Text fontSize="sm" fontWeight="300" color="gray.700">
            {bio1}
          </Text>

          <Text fontSize="xs" fontWeight="300" color="gray.500">
            {bio2}
          </Text>
        </VStack>

        {/* ACTO CENTRAL */}
        <Heading
          as="h1"
          fontSize="lg"
          fontWeight="300"
          letterSpacing="0.5px"
        >
          Solicitar entrevista
        </Heading>

        {/* ACCIÓN */}
        <Button
          variant="outline"
          borderRadius="0"
          px={12}
          py={6}
          fontWeight="300"
          onClick={scrollToContact}
          _hover={{ background: "gray.50" }}
        >
          Continuar
        </Button>

      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;