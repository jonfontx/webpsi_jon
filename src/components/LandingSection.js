import React, { useEffect } from "react";
import {
  Heading,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import image from "../images/back.jpeg";

const greeting = "Jonatan Fontebasso";
const bio1 = "Psicólogo General Sanitario";
const bio2 = "Colegiado T-04523";


const LandingSection = () => {

  useEffect(() => {
    const scrollHandler = () => {
      const el = document.querySelector(".landing");
      if (!el) return;

      const scroll = window.scrollY;
      const height = el.offsetHeight;

      const opacity = Math.max(0.3, 1 - scroll / height);
      el.style.opacity = opacity;
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
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* 🖼 BACKGROUND IMAGE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* 🧊 OVERLAY CLÍNICO */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.78)",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <VStack
        spacing={14}
        maxW="540px"
        px={6}
        position="relative"
        zIndex={2}
      >

        {/* NOMBRE */}
        <Heading
          as="h3"
          fontSize="sm"
          fontWeight="300"
          letterSpacing="0.12em"
          color="#2D2D2D"
          textTransform="uppercase"
        >
          {greeting}
        </Heading>

        {/* ENCUADRE */}
        <VStack spacing={1}>
          <Text fontSize="sm" fontWeight="300" color="#3A3A3A">
            {bio1}
          </Text>

          <Text fontSize="xs" fontWeight="300" color="#7A7A7A">
            {bio2}
          </Text>
        </VStack>

        {/* FRASE */}
        <Heading
          as="h1"
          fontSize="lg"
          fontWeight="300"
          letterSpacing="0.03em"
          color="#1A1A1A"
        >
          La demanda no comienza donde se cree
        </Heading>

        {/* BOTÓN */}
        <Button
          onClick={scrollToContact}
          variant="outline"
          border="1px solid #2D2D2D"
          borderRadius="0"
          px={14}
          py={6}
          fontWeight="300"
          letterSpacing="0.08em"
          bg="transparent"
          color="#1A1A1A"
          _hover={{
            background: "#F7F7F7",
          }}
        >
          Solicitar entrevista
        </Button>

      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;