import React, { useEffect } from "react";
import {
  Avatar,
  Heading,
  VStack,
  Button,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myAvatar from "../images/avatar.JPG";
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
      color="gray.800"
      backgroundColor="#F7FAFC"
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
        }}
      >
        <source src={video} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
      </video>

      <VStack spacing={16} style={{ zIndex: 1 }}>
        <VStack spacing={4}>
          <Avatar
            src={myAvatar}
            size="2xl"
            name="Jonatan Fontebasso"
            mt={{ base: "20" }}
          />

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