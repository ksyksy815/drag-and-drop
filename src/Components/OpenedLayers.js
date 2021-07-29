import React from 'react'
import styled from 'styled-components'
import MyFolder from './MyFolder'
import Welcome from './Welcome'
import ProjectsLayer from './ProjectsLayer'

const LayersWrapper = styled.div`
`

export default function OpenedLayers({ openMyFolder, closeMyFolder, openProjects, closeProjects, welcomeMode, closeWelcomeWindow }) {
  return (
    <LayersWrapper>
      {
        openMyFolder && <MyFolder closeMyFolder={closeMyFolder}/>
      }
      {
        openProjects && <ProjectsLayer closeMyFolder={closeMyFolder}/>
      }
      {
        welcomeMode && <Welcome closeWelcomeWindow={closeWelcomeWindow}/>
      }
    </LayersWrapper>
  )
}
