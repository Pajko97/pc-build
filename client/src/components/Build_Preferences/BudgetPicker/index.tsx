import React from 'react'
import styled from 'styled-components'
import RangeSlider from './RangeSlider'

const Wrapper = styled.div`
    background-color: white;
    margin-top: 2.5rem;
    width: 45rem;
    height: 25rem;
    border-radius: 20px;
    display: flex;
    padding: 2rem;
    flex-wrap: wrap;

`

const Slider = styled.input`
    width: 100%;
    height: 2rem;
    border-radius: 10px;
    background-color: red;
`


export default function PreferencePicker() {
  return (
    <Wrapper>
      <RangeSlider defaultValue={[25, 75]} />
    </Wrapper>
  )
}
