import React from 'react'
import styled from 'styled-components'

import brain from '../assets/pages/Landing/ai_brain.png'
import choice from '../assets/pages/Landing/choice.png'
import lines from '../assets/pages/Landing/lines.png'
import truck from '../assets/pages/Landing/truck.png'
import AuthForm from '../components/shared/AuthForm'



const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #153662;
`

const FirstSection = styled.div`
    width: 50%;
    padding:15rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const SecondSection = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Header = styled.h1`
    font-size: 5rem;
    color: #fff;
    font-weight: 400;
    align-self: flex-start;
    padding:.5rem 0;
`

const Highlight = styled.span`
    color: #D84747;
`

const Paragraph = styled.p`
    font-size: 1.5rem;
    font-family: 'Roboto Flex';
    text-align: left;
    margin: 2rem 0;
    color: white;
`

const Images = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width:100%;
    max-width: 70rem;
    margin-top: 5rem;
`

const Image = styled.img`
    width: 5rem;
    height: 5rem;
    margin-right: 2rem;
`

const PageLinks = styled.div`
    display: flex;
`

const PageLink = styled.a`
    color: black;
    background-color: white;
    border-radius:20px;
    border:1px solid black;
    padding:.75rem 2rem;
    margin:0 1rem;
`

export default function Landing() {
  return (
    <Wrapper>
        <FirstSection>  
            <Header><Highlight>Generate</Highlight> ideal <br/><Highlight>PC</Highlight> configuration<br/>in 30 seconds.</Header>
            <Paragraph>Generate configurations based on your
preferences. Tell us what you need, we take care of the rest.</Paragraph>
        </FirstSection>
        <SecondSection>
            <PageLinks>
                <PageLink>About</PageLink>
                <PageLink>Funding</PageLink>
                <PageLink>Contact</PageLink>
            </PageLinks>
            <AuthForm/>
        </SecondSection>
    </Wrapper>
  )
}
