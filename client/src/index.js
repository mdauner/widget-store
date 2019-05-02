import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo-hooks'
import ApolloClient from 'apollo-boost'
import { Router } from '@reach/router'
import { Page as WidgetPage } from './components/Widget'
import { Page as OrderPage } from './components/Order'
import './index.css'
import '@reach/dialog/styles.css'

const client = new ApolloClient({
  uri: '/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <WidgetPage path="/" />
      <OrderPage path="/orders/:orderId" />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
