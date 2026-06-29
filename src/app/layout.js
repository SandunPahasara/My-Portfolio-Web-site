import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Sandun Pahasara Weerasinghe | Full Stack Developer',
  description: 'Portfolio of Sandun Pahasara Weerasinghe, professional Full Stack Developer and UI/UX Designer from Sri Lanka.',
  icons: {
    icon: '/Sp.ico',
  },
};

export default function RootLayout({ children }) {
  return (

      <body>
        <ThemeProvider>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
 
  );
}
