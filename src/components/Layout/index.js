import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import usePersistedState from "../../utils/usePersistedState"

import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"
import dark from "../../styles/themes/dark"
import light from "../../styles/themes/light"

const Layout = ({ children }) => {
  const [isDarkTheme, setTheme] = usePersistedState("darkTheme", true)

  const toggleTheme = () => setTheme(!isDarkTheme)

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <S.LayoutWrapper>
        <GlobalStyles />
        <Sidebar />
        <S.LayoutMain>{children}</S.LayoutMain>
        <MenuBar toggleTheme={toggleTheme} />
      </S.LayoutWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
