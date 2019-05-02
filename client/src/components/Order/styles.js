import styled from 'styled-components/macro'

const Order = styled.div`
  background-color: white;
  padding: 1rem;
`

const OrderItem = styled.div`
  padding: 1rem 0;
  color: hsl(0, 0%, 10%);
  border-bottom: 1px solid hsl(0, 0%, 10%);
`

const OrderContent = styled.div`
  display: flex;
`

const OrderItemTotal = styled.div`
  align-self: flex-end;
`

const OrderTotal = styled.div`
  padding-top: 1rem;
  font-size: 1.4rem;
  color: hsl(0, 0%, 10%);
  font-weight: bold;
  border-top: 1px solid hsl(0, 0%, 10%);
  display: flex;
  justify-content: space-between;
`

const OrderItemDetails = styled.div`
  font-size: 1rem;
  color: hsl(0, 0%, 40%);
  flex: 1;
  display: flex;
  align-items: center;
`

const Color = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 3px;
  background-color: ${props => props.color};
`

const Label = styled.div`
  font-style: italic;
  margin-right: 0.2rem;
  &:not(:first-of-type) {
    margin-left: 0.3rem;
  }
`

const OrderItemHeader = styled.div`
  display: flex;
`

const RemoveButton = styled.button`
  background-color: white;
  cursor: pointer;
  border: 0;
  align-self: flex-start;
  font-weight: bold;
  padding: 0;
`

const WidgetName = styled.div`
  flex: 1;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const OrderWrapper = styled.div`
  margin: 4rem auto;
  width: 600px;
`

export {
  Order,
  OrderItem,
  OrderContent,
  OrderItemHeader,
  OrderItemTotal,
  OrderItemDetails,
  OrderTotal,
  Label,
  Color,
  RemoveButton,
  WidgetName,
  LoaderWrapper,
  OrderWrapper
}
