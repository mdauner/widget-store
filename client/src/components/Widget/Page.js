import React, { useState } from 'react'
import { useQuery } from 'react-apollo-hooks'
import Loader from 'react-loader-spinner'
import { useLocalStorage } from '../../utils/hooks'
import { List as WidgetList } from './'
import { Cart } from '../Cart'
import { GET_ALL_WIDGETS } from '../../graphql/queries'
import { LoaderWrapper } from './styles'

function WidgetPage() {
  const [cartItems, setCartItems] = useLocalStorage('cart-items', {})
  const [isCartOpen, setIsCartOpen] = useState(false)
  const {
    data: { widgets },
    error,
    loading
  } = useQuery(GET_ALL_WIDGETS)

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader type="Puff" color="#00BFFF" height="100" width="100" />
      </LoaderWrapper>
    )
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  function addToCart(variantId, name, size, color, price) {
    setCartItems({
      ...cartItems,
      [variantId]: {
        widget: {
          name
        },
        id: variantId,
        size,
        color,
        price
      }
    })
    setIsCartOpen(true)
  }

  function removeFromCart(variantId) {
    const items = { ...cartItems }
    delete items[variantId]
    setCartItems(items)
  }

  function clearCart() {
    setCartItems({})
  }

  return (
    <>
      <Cart
        items={cartItems}
        clearCart={clearCart}
        isCartOpen={isCartOpen}
        onStateChange={({ isOpen }) => setIsCartOpen(isOpen)}
        removeFromCart={removeFromCart}
      />
      <WidgetList widgets={widgets} addToCart={addToCart} />
    </>
  )
}

export default WidgetPage
