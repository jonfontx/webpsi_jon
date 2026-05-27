import React, { useEffect } from "react";
import { Heading, VStack, Text, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { HStack, IconButton } from "@chakra-ui/react";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

// imagen desde src
import landingBg from "../images/back.jpeg";

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
      backgroundColor="transparent"
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      {/* 🖼 BACKGROUND FULL BLEED */}
      <div
  style={{
    position: "fixed",   // 👈 clave absoluta real de viewport
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${landingBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
  }}
      />

      {/* 🧊 OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
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

        <VStack spacing={1}>
          <Text fontSize="sm" fontWeight="300" color="#3A3A3A">
            {bio1}
          </Text>

          <Text fontSize="xs" fontWeight="300" color="#7A7A7A">
            {bio2}
          </Text>
        </VStack>

        <Heading
          as="h1"
          fontSize="lg"
          fontWeight="300"
          letterSpacing="0.03em"
          color="#1A1A1A"
        >
          Atención psicológica online para adultos y adolescentes
        </Heading>

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
          _hover={{ background: "#F7F7F7" }}
        >
          Solicitar entrevista
        </Button>

        {/* ICONOS CONTACTO */}
<HStack spacing={6} pt={2}>
  {/* MAIL */}
  <IconButton
    as="a"
    href="mailto:jfontebasso@cop.es"
    aria-label="Email"
    icon={<FaEnvelope />}
    variant="ghost"
    fontSize="20px"
    color="#1A1A1A"
    _hover={{ color: "#555" }}
  />

  {/* WHATSAPP */}
  <IconButton
    as="a"
    href="https://wa.me/34632257615"
    target="_blank"
    aria-label="WhatsApp"
    icon={<FaWhatsapp />}
    variant="ghost"
    fontSize="20px"
    color="#1A1A1A"
    _hover={{ color: "#25D366" }}
  />

  {/* LINKEDIN */}
  <IconButton
    as="a"
    href="https://www.linkedin.com/in/jonatan-fontebasso"
    target="_blank"
    aria-label="LinkedIn"
    icon={<FaLinkedin />}
    variant="ghost"
    fontSize="20px"
    color="#1A1A1A"
    _hover={{ color: "#0A66C2" }}
  />
</HStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;