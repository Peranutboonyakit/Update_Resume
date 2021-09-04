import React from 'react'
import styled from 'styled-components'
import Shenzhen from '../img/Shenzhen.jpg'
import html from '../img/Image/html.png'
import javascript from '../img/Image/javascript.png'
import css from '../img/Image/css.png'
import react from '../img/Image/react.png'


const Skills = () => {
    return (
        <Container>

            <Left><Image src={Shenzhen} /></Left>

            <Right>
                <Title>
                    <Text>
                        Skills
                    </Text>
                </Title>

                <BoxImage>
                    <ImageSkill src={html}/>
                    <ImageSkill src={css}/>
                    <ImageSkill src={javascript}/>
                    <ImageSkill src={react}/>
                </BoxImage>

            </Right>
        </Container>
    )
}

export default Skills

const Container = styled.div`
    height: 100%;
    display: flex;
    z-index: -1;
    @media only screen and (max-width: 680px){
       flex-direction: column;
       align-items: center;
       justify-content: center;
    }
`
const Left = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    width: 75%;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    @media only screen and (max-width: 680px){
      display: none;
    }
`
//////////////////////////////////////// Right
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 680px){
        width: 100%;
        height: 100%;
        align-items: center;
    }
`
const Title = styled.div`
   margin-bottom: 50px;
`
const Text = styled.span`
     font-size: 70px;
    font-weight: bold;
    text-decoration: underline salmon;
    font-style: italic;
`
const BoxImage = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    @media only screen and (max-width: 680px){
        display: grid;
        grid-template-columns: auto auto;
    }
    `
const ImageSkill = styled.img`
    width: 150px;
    margin: 0 20px 20px 0;
    @media only screen and (max-width: 680px) and (max-width: 480px){
        margin-bottom: 50px;
        width: 110px;
    }
`