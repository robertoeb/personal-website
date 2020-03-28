import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { string, number } from "prop-types"

import * as S from "./styled"

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => {
  const { colors } = useContext(ThemeContext)

  return (
    <S.PostItemLink
      cover
      direction="right"
      bg={colors.background}
      duration={0.6}
      to={slug}
    >
      <S.PostItemWrapper>
        <S.PostItemTag background={background}>{category}</S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} • {timeToRead} min de leitura
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

PostItem.propTypes = {
  slug: string.isRequired,
  background: string,
  category: string.isRequired,
  date: string.isRequired,
  timeToRead: number.isRequired,
  title: string.isRequired,
  description: string.isRequired,
}

export default PostItem
