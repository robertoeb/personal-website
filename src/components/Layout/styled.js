import styled from "styled-components"

export const LayoutWrapper = styled.section`
  display: flex;
`

export const LayoutMain = styled.main`
  background: ${props => props.theme.colors.background};
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  main#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
`
