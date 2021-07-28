import React from 'react'
import styled from 'styled-components'
import MyFolder from './MyFolder'
import Welcome from './Welcome'

const LayersWrapper = styled.div`
`

export default function OpenedLayers({ openMyFolder, closeMyFolder, welcomeMode, closeWelcomeWindow }) {
  return (
    <LayersWrapper>
      {
        openMyFolder && <MyFolder closeMyFolder={closeMyFolder} />
      }
      {
        welcomeMode && <Welcome closeWelcomeWindow={closeWelcomeWindow} />
      }
    </LayersWrapper>
  )
}
