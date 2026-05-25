import React, { useEffect } from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const ContactMeSection = () => {
  useEffect(() => {
    // Evita duplicar el script si ya existe
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <FullScreenSection
      className="fullscreen"
      backgroundColor="#FFFFFF"
      py={20}
    >
      <VStack
        w="100%"
        maxW="900px"
        px={6}
        alignItems="center"
        id="contactme"
        spacing={10}
      >
        {/* ENCABEZADO MINIMAL */}
        <Heading
          textAlign="center"
          fontSize="lg"
          fontWeight="300"
          letterSpacing="0.04em"
          color="#1A1A1A"
        >
          
        </Heading>

        {/* CALENDLY */}
        <Box
          w="100%"
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="0"
          overflow="hidden"
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/jlfontebasso/reserva?hide_event_type_details=1"
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