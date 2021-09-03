import React from 'react'
import styled from 'styled-components';
import Feature from './components/Feature.jsx';
import Intro from './components/Intro.jsx';
//import Nav from "./components/Nav.jsx";
import Service from './components/Service.jsx';
import Fade from 'react-reveal'
import Education from './components/Education.jsx';




const App = () => {
  return (
    <>
{/*      
        <Nav />*/}
      

      <Fade left>
        <Container>
          <Intro />
          <IntoShape />
        </Container>
      </Fade>

      <Fade right>
        <Container>
          <Feature />
          <FeatureShape />
        </Container>
      </Fade>

      <Fade left>
        <Container>
          <Service />
          <ServiceShape />
        </Container>
      </Fade>

      <Container>
        <Education />
        <EducationShape />
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
const FeatureShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: pink;
  clip-path: polygon(0 0, 59% 0%, 100% 100%, 86% 100%);
`
const ServiceShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #DB7093;
  clip-path: polygon(100% 0%, 77.8% 50%, 100% 100%, 63% 850%, 64% 0%);
`
const EducationShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #ffeccc;
  clip-path: polygon(36% 0, 64% 0, 36% 100%, 64% 100%);
`

