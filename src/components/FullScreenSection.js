import * as React from "react";
import { Box, VStack } from "@chakra-ui/react";

const FullScreenSection = ({
  children,
  isDarkBackground,
  backgroundColor,
  ...boxProps
}) => {
  return (
    <Box
      width="100vw"
      minHeight="100vh"
      position="relative"
      overflow="hidden"
      backgroundColor={backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack
        width="100%"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        px={4}
        {...boxProps}
      >
        {children}
      </VStack>
    </Box>
  );
};

export default FullScreenSection;