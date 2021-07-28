import { useState } from 'react'
import styled from 'styled-components'
import { LayerWindow, TopBar, Contents} from './Layer.style.js'
import cloud1 from '../assets/cloud.png'
import cloud2 from '../assets/cloud2.png'
import sparkle from '../assets/sparkle.png'
import constellation2 from '../assets/constellation2.png'
import constellation3 from '../assets/constellation3.png'

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
        bottom: 2rem;
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
    background:
      url(${sparkle}), url(${sparkle}), url(${sparkle}), 
      url(${constellation2}), url(${constellation3}),
      linear-gradient(rgb(69, 121, 231), rgb(254, 198, 233));
    background-repeat: no-repeat;
    background-position: 
      top 5% left 2%, bottom 5% center, top 20% right 5%,
      bottom 20% right 2%, top 10% right 20%, 0 0;
    border: 3px solid black;
    padding: 2rem;
    position: relative;

    h1 {
      font-family: 'Do Hyeon', sans-serif;
      color: #fff;
      letter-spacing: 2px;
      font-size: 3rem;
      transition: 0.2s;
      position: relative;
    }
    p {
      margin-top: 1rem;
      color: #fff;
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
          <p>
            React 및 Vanilla JavaScript로 웹앱을 개발하는 새내기 프론트엔드 개발자입니다. <br/>
            새로운 기술의 습득을 언제나 반기며, 더욱 다양한 개발 경험을 쌓기 위해 노력하고 있습니다. <br/>
          </p>
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
