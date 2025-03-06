import About from "./About/page";
import Hero from "./components/hero";
import Contact from "./Contact/page";
import Experience from "./Experience/page";
import Projects from "./Projects/page";


export default function Home() {

  return (
    <div>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
    
  );
}
