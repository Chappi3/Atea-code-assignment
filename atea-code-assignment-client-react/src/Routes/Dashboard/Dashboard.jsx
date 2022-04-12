import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetGamesRequest } from '../../Store/Actions/GamesActions'
import logo from '../../logo.svg'
import * as S from './styled'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { pending, games, error } = useSelector((state) => state.Games)

  useEffect(() => {
    dispatch(GetGamesRequest(null))
  }, [])

  const renderGames = () => {
    return games.map((g) => {
      return (
        <S.Card key={g.id}>
          <div>{g.name}</div>
          <div>{g.company}</div>
          <div>price €{g.price}</div>
        </S.Card>
      )
    })
  }

  const handleSearch = (value) => {
    dispatch(GetGamesRequest(value))
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Header>
          <h1>My Games</h1>
        </S.Header>
        <S.SearchContainer>
          <S.SearchLabel>Search:</S.SearchLabel>
          <S.SearchInput
            type={'text'}
            onChange={({ target }) => handleSearch(target.value)}
          />
        </S.SearchContainer>
      </S.HeaderContainer>
      {pending ? (
        <img src={logo} className="App-logo" />
      ) : (
        <>
          {error != '' ? (
            <div>{error}</div>
          ) : (
            <S.CardsContainer>{renderGames()}</S.CardsContainer>
          )}
        </>
      )}
    </S.Container>
  )
}

export default Dashboard
