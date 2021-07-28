import { useState } from 'react'
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle'
import Window from './Components/Window'
import OpenedLayers from './Components/OpenedLayers'
import plaids from './assets/plaid3.png'
import Nav from './Components/Nav';


const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background:
    url(${plaids}),
    linear-gradient(rgb(255, 180, 212), rgb(166,197, 244));
`
function App() {
  const [openMyFolder, setOpenMyFolder] = useState(false)
  const [welcomeMode, setWelcomeMode] = useState(true)

  const toggleMyFolder = () => {
    setOpenMyFolder(!openMyFolder)
  }

  const closeWelcomeWindow = () => {
    setWelcomeMode(false)
  }

  const openWelcomeMessage = () => {
    setWelcomeMode(true)
  }

  return (
    <>
      <GlobalStyle/>
      <MainWrapper>
        <Window openMyFolder={openMyFolder} showMyFolder={toggleMyFolder} />
        <OpenedLayers 
          openMyFolder={openMyFolder} 
          closeMyFolder={toggleMyFolder}
          welcomeMode={welcomeMode}
          closeWelcomeWindow={closeWelcomeWindow}
        />
        <Nav openWelcomeMessage={openWelcomeMessage} />
      </MainWrapper>
    </>
  );
}

export default App;
