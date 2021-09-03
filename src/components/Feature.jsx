import React from 'react'
import styled from 'styled-components'
import Shenzhen from '../img/Shenzhen.jpg'
import html from '../img/Image/html.png'
import javascript from '../img/Image/javascript.png'
import css from '../img/Image/css.png'
import react from '../img/Image/react.png'


const Feature = () => {
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

export default Feature

const Container = styled.div`
    height: 100%;
    display: flex;
    z-index: -1;
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
`
//////////////////////////////////////// Right
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    display: flex;
    `
const ImageSkill = styled.img`
    width: 150px;
    margin-right: 20px;
`