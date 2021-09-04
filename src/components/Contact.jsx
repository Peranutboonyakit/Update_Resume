import React from 'react'
import styled from 'styled-components'
import cafe from '../img/cafe.jpg'
import facebook from '../img/Image/facebook.png'
import instagram from '../img/Image/instagram.png'
import line from '../img/Image/line.png'
import github from '../img/Image/github.svg'
const Contact = () => {
    return (
        <Container>
            <Left>
                <Title>
                    <b style={{ color: "purple" }}>C</b>ontact <b style={{ color: "purple" }}>M</b>e
                </Title>

                <Content>
                    <Text><b>Address :</b> 28/897 Politan rive soi Nonthaburi 15 Nonthaburi 11000</Text>
                    <Text><b>Phone &nbsp;&nbsp;&nbsp;&nbsp;:</b> 062-525-3851</Text>
                    <Text><b>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> peranut.pepo@hotmail.com</Text>
                </Content>

                <Footer>
                    <Icon href='https://github.com/Peranutboonyakit' target='_blank'>
                        <Social src={github} />
                    </Icon>
                    <Icon href='https://web.facebook.com/PEPO.demonic/' target='_blank'>
                        <Social src={facebook} />
                    </Icon>
                    <Icon href='https://line.me/ti/p/kUdXU71nK9' target='_blank'>
                        <Social src={line} />
                    </Icon>
                    <Icon href='https://www.instagram.com/2pepo/' target='_blank'>
                        <Social src={instagram} />
                    </Icon>
                </Footer>
            </Left>


            <Right>
                <Image src={cafe} />
            </Right>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    display: flex;
    height: 100vh;
`
const Left = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;
    @media only screen and (max-width: 680px){
        width: 100%;
    }
    
`
const Title = styled.p`
    font-weight: bold;
    font-size: 70px;
    font-style: italic;
`
const Content = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
`
const Text = styled.p`
    font-size: 25px;
    line-height: 50px;
`
const Footer = styled.div``
const Icon = styled.a`
    margin-right: 50px;
    @media only screen and (max-width: 680px){
       margin-right: 40px;
    }
`
const Social = styled.img`
    width: 60px;
    height: 60px;
    transition: transform 200ms;
    :hover{
        transform: translateY(-10px);
    }
`
////////////////////////////////////// Right
const Right = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    @media only screen and (max-width: 680px){
        display: none;
    }
`
const Image = styled.img`
    clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    height: 75%;
    width: 65%;
    @media only screen and (max-width: 680px){
        display: none;
    }
`



//const Container = styled.div``