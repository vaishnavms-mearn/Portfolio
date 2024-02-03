import { useState } from 'react';
import './App.css';
import Aboutme from './Components/Aboutme';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
function App() {
  const[isDark,setIsDark]=useState(true);
  return (
    <div className="App"  data-theme={isDark?"dark":"light"}>
      <Header settheme={setIsDark} theme={isDark}/>
      <Banner />
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
