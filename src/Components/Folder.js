import React from 'react'
import styled from 'styled-components'
import folder from '../assets/pink_folder.png'

const FolderWrapper = styled.button`
  background: transparent;
  border: none;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.7rem;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  img {
    width: 66px;
    height: 48px;
    position: relative;
    left: 3px;
  }

  span {
    max-width: 80px;
    text-align: center;
    letter-spacing: 1.5px;
    font-weight: bold;
    font-size: 15px;
  }
`

export default function Folder( {name, openMyFolder, showMyFolder} ) {
  const openFolder = () => {
    if (openMyFolder===false) showMyFolder();
  }

  return (
    <FolderWrapper onDoubleClick={openFolder} >
        <img src={folder} alt="pink folder"/>
        <span>{ name }</span>
    </FolderWrapper>
  )
}
