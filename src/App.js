/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import ProfessionalExperiences from './components/ProfessionalExperiences/ProfessionalExperiences';
import OnlineCertifications from './components/OnlineCertifications/OnlineCertifications';
import AdditionalInformations from './components/AdditionalInformations/AdditionalInformations';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      {/* <AdditionalInformations /> */}
      
      <main>
        <About />
        <Projects />
        <Skills />
        <ProfessionalExperiences />
        <OnlineCertifications />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;