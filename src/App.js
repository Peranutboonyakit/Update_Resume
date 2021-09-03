import React from 'react'
import Skills from './components/Skills.jsx';
import Intro from './components/Intro.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

import styled from 'styled-components';
import Fade from 'react-reveal'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';



const App = () => {
  return (
    <>
      <Fade top>
        <Container>
          <Intro />
          <IntoShape />
        </Container>
      </Fade>

      <Zoom>
        <Container>
          <Skills />
          <SkillShape />
        </Container>
      </Zoom>

      <Fade left>
        <Container>
          <Projects />
          <ProjectShape />
        </Container>
      </Fade>

      <Fade right>
        <Container>
          <Education />
          <EducationShape />
        </Container>
      </Fade>

      
        <Container>
          <Contact />
          <ContactShape />
        </Container>
      


    </>
  )
}
export default App

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const IntoShape = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: salmon;
  clip-path: polygon(85% 0, 100% 0%, 100% 100%, 59% 100%);
`
const SkillShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: pink;
  clip-path: polygon(0 0, 59% 0%, 100% 100%, 86% 100%);
  @media only screen and (max-width: 680px){
    clip-path: polygon(59% 0, 100% 0, 25% 100%, 0 100%);
    opacity: 0.3;
    }
`
const ProjectShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #DB7093;
  clip-path: polygon(64% 0, 100% 0, 100% 100%, 64% 100%, 85% 50%);
  opacity: 0.8;
  @media only screen and (max-width: 680px){
    clip-path: polygon(0 0, 25% 0, 100% 100%, 60% 100%);
    opacity: 0.6;
    }
`
const EducationShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #ffeccc;
  clip-path: polygon(36% 0, 64% 0, 30% 100%, 70% 100%);
  @media only screen and (max-width: 680px){
    clip-path: polygon(60% 0, 100% 0, 33% 100%, 0% 100%);
    }
`
const ContactShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: purple;
  opacity: 0.6;
  clip-path: polygon(70% 0, 100% 0%, 100% 100%, 70% 100%);
`

