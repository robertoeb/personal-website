import React, { useContext } from "react"
import { ThemeContext } from "styled-components"

import links from "./content"

import * as S from "./styled"

const MenuLinks = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink
              cover
              direction="left"
              bg={colors.background}
              duration={0.6}
              to={link.url}
              activeClassName="active"
            >
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}
export default MenuLinks
