import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

import { Routes, Route } from "react-router-dom";

import LandingSection from "./components/LandingSection";
import ContactMeSection from "./components/ContactMeSection";

import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";
import Cookies from "./pages/Cookies";

function Home() {
  return (
    <>
      <LandingSection />
      <ContactMeSection />
    </>
  );
}

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>

          <Footer />
          <Alert />
          <CookieBanner />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;