import React from 'react'
import styled from 'styled-components'
import ocupationimg from '../../../assets/components/3d.png'
import Option from './Option'

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

const options = [
  { name: 'Gaming', image_: 'https://cdn.discordapp.com/attachments/1050547427993714741/1120484364552245298/3d-modeling_1.png' },
  { name: '3D Modeling', image_: 'https://cdn.discordapp.com/attachments/1050547427993714741/1120484364552245298/3d-modeling_1.png' },
  { name: 'Streaming', image_: 'https://cdn.discordapp.com/attachments/1050547427993714741/1120484364552245298/3d-modeling_1.png' },
  { name: 'Streaming', image_: 'https://cdn.discordapp.com/attachments/1050547427993714741/1120484364552245298/3d-modeling_1.png' },
  { name: 'Streaming', image_: 'https://cdn.discordapp.com/attachments/1050547427993714741/1120484364552245298/3d-modeling_1.png' },
  { name: 'Streaming', image_: 'https://cdn.discordapp.com/attachments/1050547427993714741/1120484364552245298/3d-modeling_1.png' },
  { name: 'Streaming', image_: 'https://cdn.discordapp.com/attachments/1050547427993714741/1120484364552245298/3d-modeling_1.png' },
  { name: 'Sound Engineer', image_: 'https://cdn.discordapp.com/attachments/1050547427993714741/1120484364552245298/3d-modeling_1.png' }
]


export default function PreferencePicker() {
  return (
    <Wrapper>
        {options.map( (option) => {
            return <Option option={option}  />
        })}
    </Wrapper>
  )
}
