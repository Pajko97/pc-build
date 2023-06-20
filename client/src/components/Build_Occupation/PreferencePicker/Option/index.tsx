import styled from 'styled-components'

interface Props {
    option : {
        name: string;
        image_: string;
    }
}

const Wrapper = styled.div`
    border: 1px solid black;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    min-width: 6rem;
    border-radius: 10px;
    border: 1px solid #FFFFFF;
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
`

const OptionName = styled.p`
    text-align: center;
    margin-bottom: 1rem;
`

const onOptionClick = (e: any) => {
    console.log(e.target)
}
export default function Option({ option }: Props) {
    console.log('Rendered one option', option)
  return (
    <Wrapper onClick={(e) => onOptionClick(e)}>
       <OptionName>{option.name}</OptionName>
       <img src={option.image_} alt={option.name} />
    </Wrapper>
  )
}
