import { useState } from 'react'
import styled from 'styled-components'

const LayerWindow = styled.div`
  width: ${props=>props.fullScreenMode ? `100vw` : `500px`};
  height: ${props=>props.fullScreenMode ? `100vw` : `300px`};
  position: absolute;
  top: ${props=>props.fullScreenMode ? `0` : `30%`};
  left: ${props=>props.fullScreenMode ? `0` : `20%`};
  border-radius: ${props=>props.fullScreenMode ? `0` : `15px`};
  overflow: hidden;
  border: 3px black solid;
  display: flex;
  flex-direction: column;
`

const TopBar = styled.ul`
  width: 100%;
  height: 40px;
  background-color: rgb(162, 180, 254);
  list-style: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  column-gap: 0.3rem;
  border-bottom: 3px black solid;

  li {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    border: 3px solid rgb(106, 123, 196);
    color: #fff;
    display: grid;
    place-content: center;
  }
`

const Contents = styled.div`
  flex: 1 1 auto;
  background-color: #fff;
`

export default function Layer( {closeMyFolder}) {
  const [fullScreenMode, setFullScreenMode] = useState(false)

  const closeLayer = () => {
    closeMyFolder()
  }

  const changeToFullScreen = () => {
    setFullScreenMode(!fullScreenMode)
  }

  return (
    <LayerWindow fullScreenMode={fullScreenMode}>
      <TopBar>
        <li onClick={closeLayer}>X</li>
        <li>-</li>
        <li onClick={changeToFullScreen}>뇸</li>
      </TopBar>
      <Contents>
        <p>ㄴr는 ㄱr끔 눈물을 흘린ㄷr...</p>
      </Contents>
    </LayerWindow>
  )
}
