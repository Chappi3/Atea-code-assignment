import React, { useState } from 'react'
import Button from '../../../../Global/Components/Button'
import * as S from './styled'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { AddGameRequest } from '../../../../Store/Actions/GamesActions'

const AddGame = ({ onCancel }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [price, setPrice] = useState(0)

  const handleOnCancel = () => {
    onCancel(false)
  }

  const onConfirm = () => {
    const payload = {
      name: name,
      company: company,
      price: price,
      id: uuidv4(),
    }
    dispatch(AddGameRequest(payload))
    onCancel(false)
  }

  return (
    <S.Container>
      <S.Backdrop />
      <S.Wrapper>
        <S.Content>
          <S.MainContainer>
            <S.TextContainer>
              <div>Name:</div>
            </S.TextContainer>
            <S.InputContainer>
              <S.Input
                type={'text'}
                onChange={({ target }) => setName(target.value)}
              />
            </S.InputContainer>
            <S.TextContainer>
              <div>Company:</div>
            </S.TextContainer>
            <S.InputContainer>
              <S.Input
                type={'text'}
                onChange={({ target }) => setCompany(target.value)}
              />
            </S.InputContainer>
            <S.TextContainer>
              <div>Price:</div>
            </S.TextContainer>
            <S.InputContainer>
              <S.Input
                type={'number'}
                onChange={({ target }) => setPrice(target.value)}
              />
            </S.InputContainer>
            {/* <S.TextContainer>
              {errorMessage && (
                <CustomText fontSize={13}>{errorMessage}</CustomText>
              )}
            </S.TextContainer> */}
            <S.ButtonContainer>
              <Button text={'Cancel'} onClick={handleOnCancel} />
              <Button text={'Add'} onClick={onConfirm} />
            </S.ButtonContainer>
          </S.MainContainer>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default AddGame
