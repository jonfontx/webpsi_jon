import { Box, Heading, Text } from "@chakra-ui/react";

export default function AvisoLegal() {
  return (
    <Box maxW="800px" mx="auto" py={10} px={6}>
      <Heading mb={6}>Aviso legal</Heading>
      <Text fontSize="sm">
        Aquí va tu texto legal...
      </Text>
    </Box>
  );
}