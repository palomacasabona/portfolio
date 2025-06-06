import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Intro from './components/intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500); // dura 3.5s
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) return <Intro />;

  return (
    <>
      <Background />
      <Navbar />
      <div className="hero">
        <h1 className="title">Paloma Casabona</h1>
        <p className="subtitle">
          Junior Developer con alma creativa<br />
          y raíces que miran al Este.
        </p>
        <p className="arabic">روح شرقية — rūḥ sharqiyya</p>
      </div>
      <section id="sobre-mi" className="section-about">
        <h2>Sobre mí</h2>
        <p>
          Soy una desarrolladora junior con pasión por las culturas de Oriente Medio, el diseño con alma, y el código limpio.
          Me inspiro en la caligrafía, la luz del desierto y las estructuras geométricas. ✨
        </p>
      </section>
    </>
  );
}

export default App;