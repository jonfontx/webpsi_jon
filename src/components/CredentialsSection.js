import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const CredentialsSection = () => {
  return (
    <FullScreenSection
      id="credentialsSection"
      backgroundColor="rgb(82, 27, 65)"
      isDarkBackground
      p={8}
      py={16}
      minHeight="auto"
      alignItems="center"
      spacing={8}
    >
      <Container maxW="4xl">
        <VStack align="flex-start" spacing={10}>
          <Heading as="h1" size="2xl">
            Sobre mí
          </Heading>

          <Text fontSize="lg" lineHeight="tall">
            Psicólogo con 10 años de experiencia profesional. He ejercido tanto en hospital público como en centros y clínicas privadas.
            Acompaño a personas que atraviesan
            dificultades como ansiedad, estrés, inseguridad, tristeza,
            problemas de autoestima o conflictos en sus relaciones personales.
          </Text>

          <Text fontSize="lg" lineHeight="tall">
            Las sesiones ofrecen un espacio seguro y confidencial donde poder
            hablar con libertad sobre aquello que genera malestar emocional,
            comprender mejor lo que ocurre y desarrollar nuevas herramientas
            para afrontar el día a día con mayor claridad y equilibrio.
          </Text>

          <Text fontSize="lg" lineHeight="tall">
            Muchas personas acuden a terapia para trabajar la ansiedad,
            mejorar su autoestima, gestionar una ruptura, aprender a poner
            límites o sentirse mejor consigo mismas y con los demás. Cada
            proceso terapéutico se desarrolla de manera cercana,
            personalizada y respetando los tiempos de cada persona.
          </Text>
        </VStack>
      </Container>
    </FullScreenSection>
  );
};

export default CredentialsSection;