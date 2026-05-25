import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const ContactMeSection = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <FullScreenSection
      className="fullscreen"
      backgroundColor="#F7FAFC"
      py={16}
      spacing={8}
    >
      <VStack
        w="100%"
        maxW="1200px"
        px={2}
        alignItems="center"
        id="contactme"
        spacing={8}
      >
        <Heading textAlign="center">
          Reserva tu sesión
        </Heading>


        <Box
          w="100%"
          bg="white"
          borderRadius="16px"
          overflow="hidden"
          p={2}
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/jlfontebasso/reserva"
            style={{
              minWidth: "320px",
              height: "700px",
            }}
          />
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;