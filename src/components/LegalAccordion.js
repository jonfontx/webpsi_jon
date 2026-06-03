import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function LegalAccordion() {
  return (
    <Accordion allowToggle id="legal">
      
      {/* AVISO LEGAL */}
      <AccordionItem border="none">
        <h2>
          <AccordionButton _expanded={{ bg: "gray.100" }}>
            <Box flex="1" textAlign="left">
              Aviso legal
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} fontSize="sm" lineHeight="1.7">
          Psicólogo Jonatan Fontebasso... (aquí tu texto legal)
        </AccordionPanel>
      </AccordionItem>

      {/* PRIVACIDAD */}
      <AccordionItem border="none">
        <h2>
          <AccordionButton _expanded={{ bg: "gray.100" }}>
            <Box flex="1" textAlign="left">
              Privacidad
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} fontSize="sm" lineHeight="1.7">
          Política de privacidad...
        </AccordionPanel>
      </AccordionItem>

      {/* COOKIES */}
      <AccordionItem border="none">
        <h2>
          <AccordionButton _expanded={{ bg: "gray.100" }}>
            <Box flex="1" textAlign="left">
              Cookies
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} fontSize="sm" lineHeight="1.7">
          Política de cookies...
        </AccordionPanel>
      </AccordionItem>

    </Accordion>
  );
}
export default LegalAccordion;