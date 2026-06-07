import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Text,
  Stack,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      bg="white"
      boxShadow="lg"
      p={4}
      zIndex="9999"
      borderTop="1px solid"
      borderColor="gray.200"
    >
      <Text fontSize="sm" mb={3}>
        Este sitio web utiliza cookies propias y de terceros para obtener estadísticas sobre los hábitos de navegación del usuario, mejorar su experiencia y permitirle compartir contenidos en redes sociales. Usted puede aceptar o rechazar las cookies, así como personalizar cuáles quiere deshabilitar.
        Puede encontrar toda la información en nuestra Política de Cookies.{" "}
        <Link as={RouterLink} to="/cookies">
          Política de Cookies
        </Link>.
      </Text>

      <Stack direction="row">
        <Button size="sm" onClick={acceptCookies}>
          Aceptar
        </Button>

        <Button size="sm" variant="outline" onClick={rejectCookies}>
          Rechazar
        </Button>
      </Stack>
    </Box>
  );
}