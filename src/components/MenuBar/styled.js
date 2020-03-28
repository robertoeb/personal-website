import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: ${props => props.theme.colors.mediumBackground};
  border-left: 1px solid ${props => props.theme.colors.borders};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;

  ${media.lessThan("large")`
    border: none;
    border-top: 1px solid ${props => props.theme.colors.borders};
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    width: 100%
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

export const MenuBarItem = styled.span`
  color: ${props => props.theme.colors.texts};
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.highlight};
  }

  .themeIcon {
    color: ${props => props.theme.colors.yellow};

    &:hover {
      color: ${props => props.theme.colors.lightYellow};
    }
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  ${media.greaterThan("large")`
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  `}

  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`
