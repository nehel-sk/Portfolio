import Contact from "./Componenets/Contact/Contact";
import Footer from "./Componenets/Footer/Footer";
import Intro from "./Componenets/Intro/Intro";
import Navigation from "./Componenets/Navigation/Navigation";
import Skills from "./Componenets/Skills/Skills";
import Works from "./Componenets/Works/Works";



function App() {
  return (
    <div >
        <Navigation />
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
