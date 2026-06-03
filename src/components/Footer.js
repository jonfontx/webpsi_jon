import React from "react";
import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={20}
          direction="column"
          gap={2}
        >
          <Text fontSize="sm" textAlign="center">
            Psicólogo Jonatan Fontebasso • © 2026 • Todos los derechos reservados
          </Text>

          <Stack direction="row" spacing={4} fontSize="sm" opacity={0.8}>
            <Link href="/aviso-legal" _hover={{ opacity: 1 }}>
              Aviso legal
            </Link>
            <Link href="/privacidad" _hover={{ opacity: 1 }}>
              Privacidad
            </Link>
            <Link href="/cookies" _hover={{ opacity: 1 }}>
              Cookies
            </Link>
          </Stack>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;