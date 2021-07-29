import { useState } from 'react'
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle'
import Window from './Components/Window'
import OpenedLayers from './Components/OpenedLayers'
import plaids from './assets/plaid3.png'
import Nav from './Components/Nav';
import ContactForm from './Components/ContactForm';


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
  const [openProjects, setOpenProjects] = useState(false)
  const [welcomeMode, setWelcomeMode] = useState(true)
  const [formOpen, setFormOpen] = useState(false)

  const toggleMyFolder = () => {
    setOpenMyFolder(!openMyFolder)
  }

  const toggleProjects = () => {
    setOpenProjects(!openProjects)
  }

  const closeWelcomeWindow = () => {
    setWelcomeMode(false)
  }

  const openWelcomeMessage = () => {
    setWelcomeMode(true)
  }

  const openContactForm = () => {
    setFormOpen(true)
  }

  const closeContactForm = () => {
    setFormOpen(false)
  }

  return (
    <>
      <GlobalStyle/>
      <MainWrapper>
        <Window 
          openMyFolder={openMyFolder} 
          showMyFolder={toggleMyFolder} 
          openProjects={openProjects}
          showProjects={toggleProjects}
        />
        <OpenedLayers 
          openMyFolder={openMyFolder} 
          closeMyFolder={toggleMyFolder}
          openProjects={openProjects}
          closeProjects={toggleProjects}
          welcomeMode={welcomeMode}
          closeWelcomeWindow={closeWelcomeWindow}
          formOpen={formOpen}
        />
        {formOpen && <ContactForm closeContactForm={closeContactForm}/>}
        <Nav 
          openWelcomeMessage={openWelcomeMessage}
          openContactForm={openContactForm}
        />
      </MainWrapper>
    </>
  );
}

export default App;
