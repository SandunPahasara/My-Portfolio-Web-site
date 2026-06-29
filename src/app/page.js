import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Certificates from '../pages/Certificates';
import Contact from '../pages/Contact';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Page() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <AnimatedBackground />
    </>
  );
}
