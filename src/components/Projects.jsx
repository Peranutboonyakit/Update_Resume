import React from "react";
import styled from "styled-components";
import ProjectBox from "./ProjectBox";
import resume1 from "../img/Image/resume1.jpg";
import foodmenu from "../img/foodmenu.jpg";
import movieapp from "../img/movieapp.jpg";
import bootstrap from "../img/Image/bootstrap.jpg";

const Projects = () => {
  return (
    <Container>
      <Left>
        <Text>
          <Title>Projects</Title>
        </Text>

        <Item>
          <ProjectBox
            link="https://github.com/Peranutboonyakit/Food_Menu"
            img={foodmenu}
          />
          <ProjectBox
            link="https://github.com/Peranutboonyakit/Movie_axios"
            img={movieapp}
          />
          <ProjectBox
            link="https://github.com/Peranutboonyakit/Bootstrap"
            img={bootstrap}
          />
          <ProjectBox
            link="https://peranutboonyakitt.vercel.app/"
            img={resume1}
          />
        </Item>
      </Left>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  margin-bottom: 50px;
  @media only screen and (max-width: 680px) {
    margin-bottom: 0;
  }
`;

const Title = styled.span`
  font-size: 70px;
  font-weight: bold;
  text-decoration: underline salmon;
  font-style: italic;
`;
const Item = styled.span`
  display: grid;
  grid-template-columns: auto auto auto;
  @media only screen and (max-width: 680px) {
    grid-template-columns: auto auto;
  }
`;
