import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../Global/Components/Button'
import * as S from './styled'

const Game = () => {
  const { gameId } = useParams()
  const navigate = useNavigate()
  const { games } = useSelector((state) => state.Games)
  const game = games.find((g) => g.id === gameId)

  const handleOnClickMyGames = () => {
    navigate('/')
  }

  return (
    <S.Container>
      <S.GameContainer>
        <S.HeaderContainer>
          <h1>{game.name}</h1>
        </S.HeaderContainer>
        <S.CompanyContainer>
          <h4>Developers: {game.company}</h4>
        </S.CompanyContainer>
        <S.PriceContainer>
          <h4>Price: €{game.price}</h4>
        </S.PriceContainer>
      </S.GameContainer>
      <S.BackButtonContainer>
        <Button text={'My Games'} onClick={handleOnClickMyGames} />
      </S.BackButtonContainer>
    </S.Container>
  )
}

export default Game
