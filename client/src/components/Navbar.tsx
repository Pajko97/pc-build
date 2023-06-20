import React from 'react'
import logo from '../assets/shared/logo.svg'
import styled from 'styled-components'

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    width: 3rem; 
    height: 3.5rem;
`

const Text = styled.div`
    display: flex;
    font-family: 'Jockey One';
    flex-direction: column;
    margin-left: 2rem;
`

const CompanyName = styled.p`
    font-size: 3rem;
    color: white;
    margin:0;
`

const CompanySlogan = styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: white;
    font-family: 'Roboto Flex';
    margin:0;
`

const Highlighted = styled.span`
    color: #D84747;
`

const NavWrapper = styled.div`
    display: flex;
    padding: 3rem 10rem;
    position: fixed;
`

export default function Navigation () {
  return (
    <NavWrapper>
        <LogoWrapper>
            <Text>
                <CompanyName>OP<Highlighted>Build</Highlighted></CompanyName>
            </Text>
        </LogoWrapper>



    </NavWrapper>
  )
}
