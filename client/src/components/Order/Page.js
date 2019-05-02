import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-apollo-hooks'
import Loader from 'react-loader-spinner'
import { Detail } from './'
import { GET_ORDER_QUERY } from '../../graphql/queries'
import { LoaderWrapper, OrderWrapper } from './styles'

function OrderPage({ orderId }) {
  const {
    data: { order },
    error,
    loading
  } = useQuery(GET_ORDER_QUERY, {
    variables: {
      id: orderId
    }
  })

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

  return (
    <OrderWrapper>
      <Detail id={order.id} items={order.items.map(item => item.variant)} />
    </OrderWrapper>
  )
}

OrderPage.propTypes = {
  orderId: PropTypes.string
}

export default OrderPage
