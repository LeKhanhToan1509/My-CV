import './App.css';
import Header from './component/Header';
import Home from './component/home/home';
import About from './component/about/about';
import Skills from './component/skills/skills';
import Sevices from './component/sevices/Sevices';
import Qualitication from './component/Qualitication/Qualitication';
import Contact from './component/Contact/contact';
function App() {
  return (
    <div>
      <Header/>
      <main>
        <Home />
        <About />
        <Skills />
        <Sevices />
        <Qualitication/>
        <Contact />
      </main>
    </div>
  );
}

export default App;
