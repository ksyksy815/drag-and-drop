import React from 'react'
import styled from 'styled-components'
import heart from '../assets/heart.png'
import document from '../assets/document.png'

const NavWrapper = styled.nav`
  width: 50vw;
  position: fixed;
  bottom: 0;
  padding: 2rem 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  column-gap: 1.5rem;

  .icon-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    row-gap: 0.5rem;
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        transform: translateY(-5px);
    }
    
    img {
      max-width: 55px;
      max-height: 55px;
      position: relative;
      transition: 0.2s;
    }

    span {
      font-family: 'Poppins', sans-serif;
    }
  }
`

export default function Nav( {openWelcomeMessage} ) {
  return (
    <NavWrapper>
      <div className="icon-box" onDoubleClick={openWelcomeMessage}>
        <img src={document} alt="Welcome message icon"/>
        <span>Welcome</span>
      </div>
      <div className="icon-box">
        <img src={heart} alt="heart icon"></img>
        <span>Contact me</span>
      </div>
    </NavWrapper>
  )
}
