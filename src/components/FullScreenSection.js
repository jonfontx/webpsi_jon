import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({
  children,
  isDarkBackground,
  backgroundColor,
  ...boxProps
}) => {
  return (
    <VStack
      width="100%"
      minHeight="100vh"
      position="relative"
      backgroundColor={backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      spacing={0}
      m={0}
      p={0}
    >
      {/* CONTENIDO CENTRADO INTERNO */}
      <VStack
        width="100%"
        maxW="1280px"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;