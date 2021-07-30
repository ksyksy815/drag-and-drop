import styled from 'styled-components'

export const LayerWindow = styled.div`
  width: ${props=>props.fullScreenMode ? `100vw` : `500px`};
  height: ${props=>props.fullScreenMode ? `100vw` : `auto`};
  position: absolute;
  top: ${props=>props.fullScreenMode ? `0` : `300px`};
  right: ${props=>props.fullScreenMode ? `0` : `100px`};
  border-radius: ${props=>props.fullScreenMode ? `0` : `15px`};
  border: 3px black solid;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 40px 20px rgba(0,0,0,0.1);
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
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    .icon-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    row-gap: 0.5rem;
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        transform: translateY(-5px);
    }
    
    img {
      max-width: 55px;
      max-height: 55px;
      position: relative;
      transition: 0.2s;
    }

    span {
      font-weight: bold;
    }
  }
`