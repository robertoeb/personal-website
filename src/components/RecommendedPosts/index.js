import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import propTypes from "prop-types"

import * as S from "./styled.js"

const RecommendedPosts = ({ next, previous }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.RecommendedWrapper>
      {previous && (
        <S.RecommendedLink
          cover
          direction="left"
          bg={colors.background}
          duration={0.6}
          to={previous.fields.slug}
          className="previous"
        >
          {previous.frontmatter.title}
        </S.RecommendedLink>
      )}
      {next && (
        <S.RecommendedLink
          cover
          direction="right"
          bg={colors.background}
          duration={0.6}
          to={next.fields.slug}
          className="next"
        >
          {next.frontmatter.title}
        </S.RecommendedLink>
      )}
    </S.RecommendedWrapper>
  )
}

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
