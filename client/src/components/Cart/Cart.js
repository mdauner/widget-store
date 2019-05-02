import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { slide as Menu } from 'react-burger-menu'
import { useMutation } from 'react-apollo-hooks'
import { Dialog } from '@reach/dialog'
import shoppingCartIcon from './shopping-cart.svg'
import { Detail as OrderDetail } from '../Order'
import './sidebar.css'
import './dialog.scss'
import { ORDER_MUTATION } from '../../graphql/mutations'
import {
  CartHeader,
  CartContainer,
  CartButtonBar,
  OrderButton,
  ClearButton
} from './styles.js'

function Cart({ items, clearCart, isCartOpen, onStateChange, removeFromCart }) {
  const [showOrderDialog, setShowOrderDialog] = useState(false)
  const [orderNumber, setOrderNumber] = useState(null)
  const order = useMutation(ORDER_MUTATION, {
    update: (
      proxy,
      {
        data: {
          order: { id }
        }
      }
    ) => {
      setOrderNumber(id)
      clearCart()
      onStateChange({ isOpen: false })
      setShowOrderDialog(true)
    },
    variables: {
      variants: Object.keys(items)
    }
  })

  return (
    <>
      <Dialog className="dialog" isOpen={showOrderDialog}>
        <button
          className="close-button"
          onClick={() => setShowOrderDialog(false)}
        >
          <span aria-hidden>×</span>
        </button>
        <p>
          Your order <b>{orderNumber}</b> has been received successfully.
        </p>
        <p>
          You can see your order{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`/orders/${orderNumber}`}
          >
            here
          </a>
          .
        </p>
      </Dialog>
      <Menu
        right
        isOpen={isCartOpen}
        width={400}
        disableAutoFocus
        onStateChange={onStateChange}
        customBurgerIcon={<img src={shoppingCartIcon} alt="Shopping Cart" />}
      >
        <CartHeader>My Cart</CartHeader>
        <CartContainer>
          {Object.keys(items).length > 0 ? (
            <OrderDetail
              items={Object.values(items)}
              removeItem={removeFromCart}
            />
          ) : (
            <div>Cart is empty</div>
          )}
        </CartContainer>
        {Object.keys(items).length > 0 && (
          <CartButtonBar>
            <ClearButton onClick={clearCart}>Clear cart</ClearButton>
            <OrderButton onClick={order}>Order now</OrderButton>
          </CartButtonBar>
        )}
      </Menu>
    </>
  )
}

Cart.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      widget: PropTypes.shape({
        name: PropTypes.string.isRequired
      }),
      id: PropTypes.string.isRequired,
      size: PropTypes.oneOf(['XS', 'SM', 'MD', 'LG', 'XL']).isRequired,
      color: PropTypes.string,
      price: PropTypes.number
    })
  ).isRequired,
  clearCart: PropTypes.func.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  onStateChange: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

export default Cart
