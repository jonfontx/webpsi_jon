import React, { useEffect } from "react";
import {
  Avatar,
  Heading,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myAvatar from "../images/avatar3.jpeg";
import video from "../images/Terapiavideo.webm";
import videoMp4 from "../images/Terapiavideo.mp4";

const greeting = "Jonatan Fontebasso";
const bio1 = "Psicólogo General Sanitario";
const bio2 = "Colegiado T-04523";

const LandingSection = () => {
  useEffect(() => {
    const videoTag = document.querySelector(".videoTag");

    const scrollHandler = () => {
      const scrollTop = window.scrollY;

      if (videoTag) {
        videoTag.style.transform = `translate3d(0, ${
          scrollTop * 0.5
        }px, 0)`;
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
      position="relative"
    >
      <video
        className="videoTag"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={video} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
      </video>

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg={{ base: "transparent", md: "blackAlpha.500" }}
        zIndex={1}
      />

      <VStack spacing={16} style={{ zIndex: 2 }}>
        <VStack spacing={4}>
          <Avatar
            src={myAvatar}
            size="2xl"
            name="Jonatan Fontebasso"
            mt={{ base: "20" }}
          />

          <Heading
            as="h4"
            size="md"
            color={{ base: "gray.800", md: "white" }}
          >
            {greeting}
          </Heading>
        </VStack>

        <VStack spacing={6} mt={{ base: "10" }}>
          <Heading
            as="h1"
            size="lg"
            id="bio"
            color={{ base: "gray.800", md: "white" }}
          >
            {bio1}
          </Heading>

          <Heading
            as="h2"
            size="sm"
            id="bio"
            color={{ base: "gray.700", md: "white" }}
          >
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