import styled from "styled-components"

export const ListWrapper = styled.section`
  main#grid & {
    background-color: ${props => props.theme.colors.borders};
    border-bottom: 1px solid ${props => props.theme.colors.borders};
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`
