import React, { useEffect } from "react";
import {
  Heading,
  VStack,
  Text,
  Button,
  Avatar,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

import landingBg from "../images/back.jpeg";
import myAvatar from "../images/avatar3.jpeg";

const greeting = "Jonatan Fontebasso";
const bio1 = "Psicólogo General Sanitario";
const bio2 = "Colegiado T-04523";

const LandingSection = () => {

  useEffect(() => {
    const scrollHandler = () => {
      const el = document.querySelector(".landing");
      if (!el) return;

      const scrollTop = window.scrollY;
      const height = el.offsetHeight;

      const opacity = Math.max(0.3, 1 - scrollTop / height);
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
      backgroundColor="#F7FAFC"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* 🖼 BACKGROUND (MISMO CONCEPTO QUE VIDEO) */}
      <img
        src={landingBg}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* 🧊 OVERLAY (equivalente a “capa estética”) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.75)",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <VStack spacing={16} style={{ zIndex: 2 }}>

        <VStack spacing={4}>
          <Avatar
            src={myAvatar}
            size="2xl"
            name="Jonatan Fontebasso"
            mt={{ base: "20" }}
          />

          <Heading as="h4" size="md">
            {greeting}
          </Heading>
        </VStack>

        <VStack spacing={6} mt={{ base: "10" }}>
          <Heading as="h1" size="lg">
            {bio1}
          </Heading>

          <Heading as="h2" size="sm">
            {bio2}
          </Heading>

          <Button
            colorScheme="teal"
            size="lg"
            borderRadius="full"
            px={8}
            onClick={scrollToContact}
          >
            Reservar consulta
          </Button>
        </VStack>

      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;