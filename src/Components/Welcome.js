import { useState } from 'react'
import styled from 'styled-components'
import { LayerWindow, TopBar, Contents} from './Layer.style.js'
import cloud1 from '../assets/cloud.png'
import cloud2 from '../assets/cloud2.png'


const WelcomeWindow = styled(LayerWindow)`
  top: 2rem;
  left: 7rem;
  height: 60vh;
  width: 800px;
  
  #clouds {
    list-style: none;
    display: flex;
    

    span {
      position: absolute;
      &:first-child {
        bottom: 5rem;
        left: -3rem;
      }
      &:nth-child(2) {
        right: -3rem;
        top: 3rem;
      }
      &:last-child {
        right: 1rem;
        bottom: 1rem;
      }
    }
  }
`
const WelcomeContents = styled(Contents)`
  padding: 2rem;
  div {
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(69, 121, 231), rgb(254, 198, 233));
    border: 3px solid black;
    padding: 2rem;

    h1 {
      color: #fff;
      font-size: 2.5rem;
      line-height: 1.6;
    }
  }
`

export default function Welcome( {closeWelcomeWindow} ) {
  const [fullScreenMode, setFullScreenMode] = useState(false)

  const closeLayer = () => {
    closeWelcomeWindow()
  }

  const changeToFullScreen = () => {
    setFullScreenMode(!fullScreenMode)
  }

  return (
    <WelcomeWindow fullScreenMode={fullScreenMode}>
      <TopBar>
        <li onClick={closeLayer}></li>
        <li></li>
        <li onClick={changeToFullScreen}></li>
      </TopBar>
      <WelcomeContents>
        <div>
          <h1>안녕하세요!</h1>
          <h1>프론트엔드 개발자 김서연입니다.</h1>

        </div>
      </WelcomeContents>
      <div id="clouds">
        <span id="cloud1"><img src={cloud1} alt="cloud"/></span>
        <span id="cloud2"><img src={cloud2} alt="cloud"/></span>
        <span id="cloud3"><img src={cloud2} alt="cloud"/></span>
      </div>
    </WelcomeWindow>
  )
}
