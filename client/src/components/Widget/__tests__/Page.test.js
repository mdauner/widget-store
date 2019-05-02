import React from 'react'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { MockLink } from 'apollo-link-mock'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-styled-components'
import { Page } from '../'
import { GET_ALL_WIDGETS } from '../../../graphql/queries'

afterEach(cleanup)

const ALL_WIDGET_MOCK = [
  {
    request: {
      query: GET_ALL_WIDGETS
    },
    result: {
      data: {
        widgets: [
          {
            id: '1',
            name: 'Widget Prime',
            variants: [
              {
                id: '2',
                color: '#F00',
                price: 9.99,
                size: 'XL',
                __typename: 'WidgetVariant'
              }
            ],
            __typename: 'Widget'
          }
        ]
      }
    }
  }
]

function createClient(mocks) {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new MockLink(mocks)
  })
}

const waitForNextTick = () => new Promise(resolve => setTimeout(resolve))

describe('WidgetPage', () => {
  test('displays items', async () => {
    const client = createClient(ALL_WIDGET_MOCK)
    const { queryByText } = render(
      <ApolloProvider client={client}>
        <Page />
      </ApolloProvider>
    )

    // We have to wait for the next tick for the queries to be fetched
    await waitForNextTick()
    expect(queryByText('Widget Prime')).not.toBe(null)
  })

  test('shows sizes with selected color', async () => {
    const client = createClient(ALL_WIDGET_MOCK)
    const { getByTestId, getByText, queryByText, debug } = render(
      <ApolloProvider client={client}>
        <Page />
      </ApolloProvider>
    )

    // We have to wait for the next tick for the queries to be fetched
    await waitForNextTick()

    expect(queryByText(/cart is empty/i)).not.toBe(null)

    //select color
    const colorButton = getByTestId('1-color-#F00')
    fireEvent.click(colorButton)

    //select size
    expect(queryByText('XL')).not.toBe(null)
    const sizeButton = getByTestId('1-size-XL')
    fireEvent.click(sizeButton)

    //add to cart
    const addButton = getByText(/add/i)
    fireEvent.click(addButton)
    expect(queryByText(/cart is empty/i)).toBe(null)
  })
})
