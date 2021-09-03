import React from 'react'
import styled from 'styled-components'


const Nav = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>2Pepo</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem >Skill</MenuItem>
                    <MenuItem>Project</MenuItem>
                    <MenuItem>Education</MenuItem>
                    <MenuItem>Experience</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
                </Left>
            </Wrapper>
        </Container>
    )
}
export default Nav

///////////////////////////////// Container
const Container = styled.div`
  height: 50px;
  position: fixed;
  width: 100%;
  z-index: 100;
  `
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `
///////////////////////////////// Nav
const Left = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    `
const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline salmon;
    `
const Menu = styled.ul`
    display: flex;
    list-style: none;
    `
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    `




