import React from 'react'
import styled from 'styled-components'


function Price({link, img}) {
    return (
        <Container>
            <Box href={`${link}`} target='_blank'>
                <Image src={img} />
            </Box>
        </Container>
    )
}

export default Price
const Container = styled.div`
    margin: 30px;
    box-shadow: 2px 5px 15px gray;
    width: 200px;
    height: 250px;
    border-radius: 20px;
     display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    overflow: hidden;
    @media only screen and (max-width: 680px){
        width: 150px;
        height: 155px;
    }
`
const Box = styled.a`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    
`
const Image = styled.img`
    height: 100%;
`
