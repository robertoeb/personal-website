import styled from "styled-components"

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid ${props => props.theme.colors.borders};
  background: ${props => props.theme.colors.mediumBackground};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
`
