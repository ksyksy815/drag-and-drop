import { useState } from 'react'
import styled from 'styled-components'
import { LayerWindow, TopBar, Contents} from './Layer.style.js'
import Welcome from './Welcome'

export default function MyFolder( {closeMyFolder, closeWelcomeWindow}) {
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
        <li onClick={closeLayer}></li>
        <li></li>
        <li onClick={changeToFullScreen}></li>
      </TopBar>
      <Contents>
        
      </Contents>
    </LayerWindow>
  )
}
