import { useState } from 'react'
import styled from 'styled-components'
import { LayerWindow, TopBar, Contents} from './Layer.style.js'

const MyFolderWindow = styled(LayerWindow)`
  top: 2rem;
  z-index: 50;
`

export default function ProjectsLayer ( {closeProjects}) {
  const [fullScreenMode, setFullScreenMode] = useState(false)
  
  const closeLayer = () => {
    closeProjects()
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
        <div>
          <h2>Project: 사각사각</h2>
        </div>
      </Contents>
    </MyFolderWindow>
  )
}
