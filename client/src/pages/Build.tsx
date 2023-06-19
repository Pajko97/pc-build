import React from 'react'
import BuildStep_SelectPurpose from '../components/BuildProccess_Step_1'
import styled from 'styled-components'

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
    <div>
      <BuildStep_SelectPurpose />
      <ControlButton>CONTINUE</ControlButton>
    </div>
  )
}
