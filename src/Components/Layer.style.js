import styled from 'styled-components'

export const LayerWindow = styled.div`
width: ${props=>props.fullScreenMode ? `100vw` : `500px`};
height: ${props=>props.fullScreenMode ? `100vw` : `300px`};
position: absolute;
top: ${props=>props.fullScreenMode ? `0` : `30%`};
left: ${props=>props.fullScreenMode ? `0` : `20%`};
border-radius: ${props=>props.fullScreenMode ? `0` : `15px`};
border: 3px black solid;
display: flex;
flex-direction: column;
`

export const TopBar = styled.ul`
width: 100%;
height: 40px;
background-color: rgb(162, 180, 254);
list-style: none;
display: flex;
align-items: center;
padding: 1rem;
column-gap: 0.3rem;
border-bottom: 3px black solid;
border-top-left-radius: 15px;
border-top-right-radius: 15px;

li {
  width: 25px;
  height: 25px;
  border-radius: 9999px;
  border: 3px solid rgb(106, 123, 196);
  color: #fff;
  display: grid;
  place-content: center;
}
`

export const Contents = styled.div`
  flex: 1 1 auto;
  background-color: #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`