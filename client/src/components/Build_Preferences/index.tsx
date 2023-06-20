import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    background-color: #153662;
    padding: 17rem 10rem;
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

export default function Build_Preferences() {
  return (
    <Wrapper>
        <Header>Select your budget range and additional preferences</Header>
    </Wrapper>
  )
}
