import React from 'react'
import styled from 'styled-components'

const Education = () => {
    return (
        <Container>
            <Left>
                <Title>Education</Title>
                <SubTitle>
                    King Mongkut's University of<br />&nbsp;&nbsp; Technology North Bangkok, Thailand
                    (2014-2017)
                </SubTitle>
                <Decs>Bachelor Degree in Applied Science,<br /> Major Industrial Physics and
                    Medical Instrumenttation(2.9)
                </Decs>
                <SubTitle>
                    High school St.Joseph <br />&nbsp;&nbsp;sriphetchabun School,<br/>&nbsp;&nbsp; Phetchabun,Thailand
                    (2011-2013)
                </SubTitle>
                <Decs>Mathematics - Science(3.5)</Decs>
            </Left>


            <Right>
                <Title>Experience</Title>
                <SubTitle>
                    Biomedical Engineeing<br />&nbsp;&nbsp;National Healthcare Systems Co.Ltd (2019-2021)
                </SubTitle>
                <Decs>Preventive maintenance medical equipment<br />&nbsp;&nbsp;Corrective maintenance medical equipment</Decs>

                <SubTitle>
                    Service Engineering<br />&nbsp;&nbsp;Hires-Imaging(2018-2019)
                </SubTitle>
                <Decs>Installation DR detector and CR detector X-ray<br/>&nbsp;&nbsp;
                    Corrective and Preventive maintenance
                </Decs>
            </Right>
        </Container>
    )
}

export default Education
const Container = styled.div`
    display: flex;
    @media only screen and (max-width: 680px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
    @media only screen and (max-width: 680px){
        margin-top: 10px;
        height: 50%;
        width: 100%;
    }
`
const Title = styled.h1`
    margin-bottom: 50px;
    text-decoration: underline salmon;
    font-style: italic;
    font-size: 70px;
    @media only screen and (max-width: 680px){
        margin-bottom: 20px;
    }
`
const SubTitle = styled.h5`
    font-size: 25px;
    margin-bottom: 10px;
    @media only screen and (max-width: 680px){
        font-size: 20px;
        margin-bottom: 0;
    }
`
const Decs = styled.p`
    font-size: 20px;
    margin-bottom: 50px;
    @media only screen and (max-width: 680px){
        font-size: 15px;
        margin-bottom: 20px;
    }
`

/////////////////////////// Right
const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
    @media only screen and (max-width: 680px){
        margin-top: 20px;
        height: 50%;
        width: 100%;
    }
`
//const Container = styled.div``