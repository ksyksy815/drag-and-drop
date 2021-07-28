import React from 'react'
import styled from 'styled-components'
import Layer from './Layer'

const LayersWrapper = styled.div`
`

export default function OpenedLayers({ openMyFolder, toggleMyFolder }) {
  return (
    <LayersWrapper>
      {
        openMyFolder && <Layer />
      }
    </LayersWrapper>
  )
}
