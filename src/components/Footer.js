import React from "react";
import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

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
          {/* NOMBRE CLICABLE */}
          <Text
            fontSize="sm"
            textAlign="center"
            as={RouterLink}
            to="/"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
          >
            Psicólogo Jonatan Fontebasso • © 2026 • Todos los derechos reservados
          </Text>

          {/* LINKS */}
          <Stack direction="row" spacing={4} fontSize="sm" opacity={0.8}>
            <Link as={RouterLink} to="/aviso-legal" _hover={{ opacity: 1 }}>
              Aviso legal
            </Link>

            <Link as={RouterLink} to="/privacidad" _hover={{ opacity: 1 }}>
              Privacidad
            </Link>

            <Link as={RouterLink} to="/cookies" _hover={{ opacity: 1 }}>
              Cookies
            </Link>
          </Stack>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;