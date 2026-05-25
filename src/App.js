import { ChakraProvider } from "@chakra-ui/react"; 
import LandingSection from "./components/LandingSection"; 
import ContactMeSection from "./components/ContactMeSection"; 
import Footer from "./components/Footer"; 
import { AlertProvider } from "./context/alertContext"; 
import Alert from "./components/Alert"; 

function App() {
 return (
   <ChakraProvider>
     <AlertProvider>
       <main>
         <LandingSection />
         <ContactMeSection />
         <Footer />
         <Alert />
       </main>
     </AlertProvider>
   </ChakraProvider>
 );
}

export default App;
