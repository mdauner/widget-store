import styled from 'styled-components/macro'

const CartHeader = styled.h3`
  color: hsl(0, 0%, 100%);
`

const CartButtonBar = styled.div`
  display: flex !important;
  justify-content: space-evenly;
  margin-top: 2rem;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 3px;
  border: 1px solid white;
  cursor: pointer;
`

const ClearButton = styled(Button)`
  background-color: hsl(0, 50%, 30%);
`

const OrderButton = styled(Button)`
  background-color: hsl(100, 50%, 30%);
`

const CartContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

export { CartContainer, OrderButton, ClearButton, CartButtonBar, CartHeader }
