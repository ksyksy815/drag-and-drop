import { useState } from 'react'
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle'
import Window from './Components/Window'
//import OpenedLayers from './Components/OpenedLayers'
import Layer from './Components/Layer'

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgb(255, 180, 212), rgb(166,197, 244));
`
function App() {
  const [openMyFolder, setOpenMyFolder] = useState(false)
  const toggleMyFolder = () => {
    setOpenMyFolder(!openMyFolder)
  }

  return (
    <>
      <GlobalStyle/>
      <MainWrapper>
        <Window openMyFolder={openMyFolder} showMyFolder={toggleMyFolder} />
        {openMyFolder && <Layer closeMyFolder={toggleMyFolder} />}
      </MainWrapper>
    </>
  );
}

export default App;
