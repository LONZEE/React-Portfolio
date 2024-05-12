import styles from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import { About } from './components/About/About';
import { Projects } from "./components/Applications/Projects";
import { Resume } from './components/Resume/Resume';
import { Contact } from './components/Contact/Contact';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
