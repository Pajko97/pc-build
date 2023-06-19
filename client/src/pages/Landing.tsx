import React from 'react'
import styled from 'styled-components'

import brain from '../assets/pages/Landing/ai_brain.png'
import choice from '../assets/pages/Landing/choice.png'
import lines from '../assets/pages/Landing/lines.png'
import truck from '../assets/pages/Landing/truck.png'



const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const FirstSection = styled.div`
    width: 50%;
    background-color: #171515;
    padding:15rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const SecondSection = styled.div`
    width: 50%;
    height: 100vh;
    background-color: #fff;
`

const Header = styled.h1`
    font-size: 5rem;
    color: #fff;
    align-self: flex-start;
    padding:.5rem 0;
`

const Highlight = styled.span`
    color: #E41D26;
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
    width:100%;
    max-width: 40rem;
    margin-top: 5rem;
`

const Image = styled.img`
    width: 5rem;
    height: 5rem;
    margin-right: 2rem;
`

export default function Landing() {
  return (
    <Wrapper>
        <FirstSection>  
            <Header><Highlight>Generate</Highlight> ideal <br/><Highlight>PC</Highlight> configuration<br/>in 30 seconds.</Header>
            <Paragraph>Generate configurations based on your
preferences. Tell us what you need, we take care of the rest.</Paragraph>
        <Images>
            <Image src={brain} />
            <Image src={choice} />
            <Image src={lines} />
            <Image src={truck} />
        </Images>
        </FirstSection>
        <SecondSection>

        </SecondSection>
    </Wrapper>
  )
}
