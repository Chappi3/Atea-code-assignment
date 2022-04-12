import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetGamesRequest } from '../../Store/Actions/GamesActions'
import logo from '../../logo.svg'
import * as S from './styled'
import AddGame from './Components/AddGame'
import Button from '../../Global/Components/Button'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pending, games, error } = useSelector((state) => state.Games)
  const [showAddGame, setShowAddGame] = useState(false)

  useEffect(() => {
    dispatch(GetGamesRequest(null))
  }, [])

  const onClickGameCard = (id) => {
    navigate(`/game/${id}`)
  }

  const renderGames = () => {
    return games.map((g) => {
      return (
        <S.Card key={g.id} onClick={() => onClickGameCard(g.id)}>
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

  const handleAddOnClick = () => {
    setShowAddGame(true)
  }

  const handleRefetch = () => {
    dispatch(GetGamesRequest(null))
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
        <Button text={'Add Game'} onClick={handleAddOnClick} />
      </S.HeaderContainer>
      {pending ? (
        <img src={logo} className="App-logo" />
      ) : (
        <>
          {error !== '' ? (
            <div>
              {error}
              <Button text={'Refetch'} onClick={handleRefetch} />
            </div>
          ) : (
            <>
              <S.CardsContainer>{renderGames()}</S.CardsContainer>
              {showAddGame && <AddGame onCancel={setShowAddGame} />}
            </>
          )}
        </>
      )}
    </S.Container>
  )
}

export default Dashboard
