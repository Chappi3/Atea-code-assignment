import React from 'react'
import * as S from './styled'

const Button = ({ text, onClick }) => {
  return <S.Container onClick={onClick}>{text}</S.Container>
}

export default Button
