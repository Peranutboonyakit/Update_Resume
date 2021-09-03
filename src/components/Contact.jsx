import React from 'react'
import styled from 'styled-components'
import cafe from '../img/cafe.jpg'

const Contact = () => {
    return (
        <Container>
            <Left></Left>


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
    width: 50%;
`

const Image = styled.img`
    clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    height: 75%;
    width: 75%;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`


//const Container = styled.div``
//const Container = styled.div``
//const Container = styled.div``