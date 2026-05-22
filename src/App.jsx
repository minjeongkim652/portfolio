import { useRef, useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';


function App() {
  // 각 섹션으로 이동하기 위한 Ref 설정
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
  axios
    .post("https://portfolio-dvoe.onrender.com/visit")
    .then((res) => {
      setVisitorCount(res.data.count);
    })
    .catch((err) => console.log(err));
}, []);


  return (
    <div className="App">
      {/* 헤더에 Ref 전달 - 클릭 시 해당 위치로 이동 */}
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />


      {/* 1. HOME 섹션 */}
      <section ref={homeRef} className="home-section">
        <Home />
      </section>

      {/* 2. ABOUT ME 섹션 (화이트 배경) */}
      <section ref={aboutRef} className="about">
        <About />
      </section>

      {/* 3. PROJECTS 섹션 (연한 네이비 그레이 + 점 패턴 배경) */}
      <section ref={projectsRef} className="projects">
        <Projects />
      </section>

      {/* 4. CONTACT 섹션 (화이트 배경) */}
      <section ref={contactRef} className="contact">
       <Contact visitorCount={visitorCount} />
      </section>
      
    </div>
  );
}

export default App;