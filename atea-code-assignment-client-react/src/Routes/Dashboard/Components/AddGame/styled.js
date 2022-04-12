import styled from 'styled-components'

export const Container = styled.div``

export const Backdrop = styled.div`
  backdrop-filter: blur(5px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`
export const Wrapper = styled.div`
  background: #2d2d2d;
  border: 1px solid #a6a6a6;
  box-shadow: 0px 0px 0px 3px rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  z-index: 700;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Content = styled.div`
  padding: 10px;
  max-height: 100%;
`

export const MainContainer = styled.div`
  align-items: center;
  margin: 20px;
`
export const ButtonContainer = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
  width: 470px;
`

export const TextContainer = styled.div`
  width: 470px;
  height: 20px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
  justify-content: center;
  width: 470px;
  height: 50px;
  border: 1px solid #a6a6a6;
  border-radius: 10px;
  margin-bottom: 40px;
`

export const Input = styled.input`
  outline: 0px;
  width: 420px;
  height: 35px;
  border: 0px;
  border-radius: 10px;
  background: #2d2d2d;
  color: #fff;
`
