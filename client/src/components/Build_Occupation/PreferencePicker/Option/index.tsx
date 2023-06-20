import styled from 'styled-components'
import React, { useState } from 'react'
import check from '../../../../assets/components/check.png'

interface Props {
    option : {
        name: string;
        image_: string;
    }
}

const Wrapper = styled.div<{ isSelected: boolean; }>`
    margin: 1rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    background-color: ${props => props.isSelected ? '#ca7b7b' : '#fff'};
    color: ${props => props.isSelected ? '#fff' : '#000'};
    min-width: 8rem;
    border-radius: 10px;
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
    :hover {
        filter: drop-shadow(0px 12px 12px rgba(0, 0, 0, 0.25));
        cursor: pointer;
    }
`

const OptionName = styled.p`
    text-align: center;
    margin-top: 1rem;
`

const SelectMark = styled.div`
    width: 30px;
    background-color: #DB4343;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -1rem;
    right: -1rem;
`


export default function Option({ option }: Props) {

    const [selected, setSelected] = useState(false)

    const onOptionClick = (e: any) => {
        setSelected(!selected)
    }

  return (
    <Wrapper isSelected={selected} onClick={(e) => onOptionClick(option)}>
       <OptionName>{option.name}</OptionName>
       <img src={option.image_} alt={option.name} />
       { selected && <SelectMark ><img src={check} /></SelectMark>}
    </Wrapper>
  )
}
