import styled from 'styled-components/macro'

const ListWrapper = styled.div`
  height: calc(100% - 8rem);
  padding: 4rem 0;
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const WidgetWrapper = styled.div`
  border-radius: 5px 5px 10px 10px;
  margin: 1rem 0;
  background-color: hsl(0, 0%, 20%);
  display: flex;
  flex-direction: column;
  &:first-of-type {
    margin-top: 0;
  }
`

const Row = styled.div`
  background-color: hsl(0, 0%, 40%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`

const WidgetContent = styled.div`
  padding: 1rem;
  background-color: hsl(0, 0%, 30%);
  color: white;
  border-radius: 0 0 5px 5px;
`

const OrderRow = styled.div`
  background-color: hsl(0, 0%, 60%);
  color: hsl(0, 0%, 20%);
  flex-direction: row;
  padding: 1rem;
  border-radius: 0 0 5px 5px;
  align-items: center;
  color: white;

  .react-numeric-input {
    width: 80px;
    margin-left: 1rem;
    input {
      width: 100%;
      padding: 0.3rem;
    }
  }
`

const RowHeader = styled.div`
  padding: 0.7rem 1rem;
  background-color: hsl(0, 0%, 50%);
  border-radius: 5px 5px 0 0;
  text-transform: uppercase;
`

const WidgetHeader = styled(RowHeader)`
  font-size: 1.5rem;
  padding: 1rem 1rem 0 1rem;
  background-color: hsl(0, 0%, 30%);
  color: white;
`

const Options = styled.div`
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
`

const Color = styled.div`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${props => props.color};
  border: ${props =>
    props.selected
      ? '3px solid  hsl(0, 0%, 100%)'
      : '3px solid  hsl(0, 0%, 70%)'};
`

const Size = styled.div`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props =>
    props.selected
      ? '3px solid  hsl(0, 0%, 100%)'
      : '3px solid  hsl(0, 0%, 70%)'};
  color: white;
  font-size: 0.8rem;
  background-color: hsl(0, 0%, 60%);
`

const OrderButton = styled.button`
  background-color: green;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  padding: 0.5rem;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export {
  ListWrapper,
  WidgetWrapper,
  WidgetHeader,
  WidgetContent,
  Row,
  RowHeader,
  Options,
  Color,
  Size,
  OrderRow,
  OrderButton,
  LoaderWrapper
}
