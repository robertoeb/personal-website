import styled from "styled-components"

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.borders};
  color: ${props => props.theme.colors.texts};
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  a {
    color: ${props => props.theme.colors.texts};
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`
