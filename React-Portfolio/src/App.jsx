import styles from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import { About } from './components/About/About';
import { Projects } from "./components/Applications/Projects";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App
