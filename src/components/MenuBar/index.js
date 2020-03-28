import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import PropTypes from "prop-types"

import { Home, Grid } from "@styled-icons/boxicons-solid"
import {
  SearchAlt2 as Search,
  UpArrowAlt as Arrow,
  Bulb as Light,
} from "@styled-icons/boxicons-regular"
import { ThList as List } from "@styled-icons/typicons/ThList"

import * as S from "./styled"

const MenuBar = ({ toggleTheme, toggleBlogList, isList }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          cover
          direction="right"
          bg={colors.background}
          duration={0.6}
          to="/"
          title="Voltar para Home"
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          cover
          direction="right"
          bg={colors.background}
          duration={0.6}
          to="/search/"
          title="Pesquisar"
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem title="Mudar o tema" onClick={toggleTheme}>
          <Light className="themeIcon" />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={toggleBlogList}
          className="display"
        >
          {isList ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o Topo">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

MenuBar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  toggleBlogList: PropTypes.func.isRequired,
  isList: PropTypes.bool.isRequired,
}

export default MenuBar
