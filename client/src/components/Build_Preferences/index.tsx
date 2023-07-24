import React from 'react'
import styled from 'styled-components'
import BudgetPicker from './BudgetPicker'


const Wrapper = styled.div`
    background-color: #153662;
    padding: 13rem 10rem 5rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.h1`
    color: white;
    font-family: 'Roboto Flex';
`

const Paragraph = styled.p`
    color: white;
`

const PreferenceTable = styled.div`
    display: flex;
`

const ControlButton = styled.button`
    background-color: #DB4343;
    padding: 1rem 3rem;
    border-radius: 1rem;
    color: white;
    margin-top: 2rem;
    border: none;
`

export default function BuildStep_Preferences() {
  return (
    <Wrapper>
        <Paragraph>Select your budget range, and additional preferences</Paragraph>
        <BudgetPicker />
        <ControlButton>CONTINUE</ControlButton>
    </Wrapper>
  )
}
