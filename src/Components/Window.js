import React from 'react'
import styled from 'styled-components'
import Folder from './Folder'

const WindowWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 1.5rem;
`

export default function Window( {openMyFolder, showMyFolder} ) {
  
  return (
    <WindowWrapper>
      <Folder 
        name={`내 폴더`} 
        openMyFolder={openMyFolder} 
        showMyFolder={showMyFolder}
      />
    </WindowWrapper>
  )
}
