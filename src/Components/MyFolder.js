import { useState } from 'react'
import styled from 'styled-components'
import { LayerWindow, TopBar, Contents} from './Layer.style.js'
import smile from '../assets/smile.png'

const MyFolderWindow = styled(LayerWindow)`
  z-index: 50;
`

export default function MyFolder( {closeMyFolder, closeWelcomeWindow}) {
  const [fullScreenMode, setFullScreenMode] = useState(false)
  
  const closeLayer = () => {
    closeMyFolder()
  }

  const changeToFullScreen = () => {
    setFullScreenMode(!fullScreenMode)
  }

  
  return (
    <MyFolderWindow 
      fullScreenMode = {fullScreenMode} 
    >
      <TopBar>
        <li onClick={closeLayer}></li>
        <li></li>
        <li onClick={changeToFullScreen}></li>
      </TopBar>
      <Contents>
        <div className="icon-box">
          <img src={smile} alt="smile icon"></img>
          <span>About me</span>
        </div>
      </Contents>
    </MyFolderWindow>
  )
}
