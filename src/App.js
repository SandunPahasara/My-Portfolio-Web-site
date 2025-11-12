import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
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
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;
