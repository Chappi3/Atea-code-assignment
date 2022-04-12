import React, { useState } from 'react'
import * as S from './styled'

const Dashboard = () => {
  const [games, setGames] = useState([
    { name: 'Satisfactory', company: 'Coffee stain studios', price: 3.55 },
    { name: 'SnowRunner', company: 'Something', price: 4.55 },
    { name: 'Rocket League', company: 'Psyonix', price: 5.55 },
    { name: 'World of Tanks', company: 'Wargaming', price: 0.0 },
    { name: 'Farming Simulator', company: 'Giants', price: 6.55 },
  ])

  const renderGames = () => {
    return games.map((g) => {
      return (
        <S.Card>
          <div>{g.name}</div>
          <div>{g.company}</div>
          <div>price €{g.price}</div>
        </S.Card>
      )
    })
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <h1>My Games</h1>
      </S.HeaderContainer>
      <S.CardsContainer>{renderGames()}</S.CardsContainer>
    </S.Container>
  )
}

export default Dashboard
