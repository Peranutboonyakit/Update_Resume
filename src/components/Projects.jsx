import React from 'react'
import styled from 'styled-components'
import cafe from '../img/cafe.jpg'
import ProjectBox from './ProjectBox'
import exchange from '../img/Image/exchange.png'
import resume1 from '../img/Image/resume1.jpg'
import income from '../img/Image/income.png'

const Projects = () => {
    return (
        <Container>
            <Left>
                <Text>
                    <Title>Projects</Title>
                </Text>

                <Item>
                    <ProjectBox
                        link='https://peranutboonyakitt.vercel.app/'
                        img={resume1} />
                    <ProjectBox
                        link='https://peranutboonyakit.github.io/ProjectJS/Exchange%20Money/index.html'
                        img={exchange} />
                    <ProjectBox
                        link='https://peranutboonyakit.github.io/ProjectJS/Income%20and%20Expenses/index.html'
                        img={income} />
                </Item>
            </Left>

            {/*<Right></Right>*/}
        </Container>
    )
}

export default Projects;

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Left = styled.div`
    width: 50%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 680px){
        
    }
`
const Text = styled.span`
    margin-bottom: 50px;
    @media only screen and (max-width: 680px){
       margin-bottom: 0;
    }
`

const Title = styled.span`
    font-size: 70px;
    font-weight: bold;
    text-decoration: underline salmon;
    font-style: italic;
`
const Item = styled.span`
    display: grid;
    grid-template-columns: auto auto auto;
    @media only screen and (max-width: 680px){
        grid-template-columns: auto auto;
    }
`
//////////////////////////////////////// Right
const Right = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    @media only screen and (max-width: 680px){
        display: none;
    }
`