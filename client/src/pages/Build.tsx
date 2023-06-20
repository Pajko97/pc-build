import React from 'react'
import BuildStep_SelectPurpose from '../components/Build_Occupation'
import styled from 'styled-components'
import BuildStep_Preferences from '../components/Build_Preferences'

const Wrapper = styled.div`
    background-color: #153662;
    height: 100vh;
    width: 100vw;
`

const ControlButton = styled.button`
  background-color: #DB4343;
  padding: 1rem 3rem;
 
`
export default function Build() {
  return (
    <Wrapper>
      <BuildStep_Preferences />
    </Wrapper>
  )
}
