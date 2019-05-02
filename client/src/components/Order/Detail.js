import React from 'react'
import PropTypes from 'prop-types'
import {
  Order,
  OrderItem,
  OrderContent,
  OrderItemHeader,
  OrderItemTotal,
  OrderItemDetails,
  OrderTotal,
  Color,
  Label,
  RemoveButton,
  WidgetName
} from './styles'

function OrderDetail({ id, items, removeItem }) {
  const totalAmount = items.reduce((v, curr) => v + curr.price, 0.0)

  return (
    <Order>
      {id && <h3>Order {id}</h3>}
      {items.map(({ id: variantId, widget: { name }, size, color, price }) => (
        <OrderItem key={variantId}>
          <OrderItemHeader>
            <WidgetName>{name}</WidgetName>
            {!id && removeItem && (
              <RemoveButton
                data-testid={`removeButton-${variantId}`}
                onClick={() => removeItem(variantId)}
              >
                x
              </RemoveButton>
            )}
          </OrderItemHeader>
          <OrderContent>
            <OrderItemDetails>
              <Label>Size:</Label> <b>{size}</b>
              <Label>Color:</Label> <Color color={color} />
            </OrderItemDetails>
            <OrderItemTotal>
              {price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
            </OrderItemTotal>
          </OrderContent>
        </OrderItem>
      ))}
      <OrderTotal>
        <div>Total</div>
        <div>
          {totalAmount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}
        </div>
      </OrderTotal>
    </Order>
  )
}

OrderDetail.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      widget: PropTypes.shape({
        name: PropTypes.string.isRequired
      }),
      id: PropTypes.string.isRequired,
      size: PropTypes.oneOf(['XS', 'SM', 'MD', 'LG', 'XL']).isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
  removeItem: PropTypes.func
}

export default OrderDetail
