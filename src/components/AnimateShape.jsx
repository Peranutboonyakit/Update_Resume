import React from 'react'
import styled from 'styled-components'

const AnimateShape = () => {
    return (
        <>
            <Square />
            <Rect />
            <Circle />
        </>
    )
}

export default AnimateShape

const Rect = styled.div`
    width: 60px;
    height: 90px;
    background-color: #1dfbff;
    opacity: 0.7;
    position: absolute;
    top: 400px;
    left: -90px;
    z-index: -1;

    animation: rect 10s linear alternate infinite;
    @keyframes rect {
        to{
            transform: translate(90vw, -20vh);
        }
    }
`
const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: #4e6bff;
    opacity: 0.7;
    position: absolute;
    top: -60px;
    left: -60px;
    z-index: -1;

    animation: square 15s linear alternate infinite;
    @keyframes square {
        to{
            transform: translate(90vw, 100vh);
        }
    }
`
const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ff3cf5;
    opacity: 0.7;
    position: absolute;
    top: 500px;
    left: -110px;
    z-index: -1;

    animation: circle 15s linear alternate infinite;
    @keyframes circle {
        to{
            transform: translate(80vw, -100vh);
        }
    }
`
