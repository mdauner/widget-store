import React from 'react'
import { fireEvent, render, cleanup } from 'react-testing-library'
import 'jest-styled-components'
import { Detail } from '../'

afterEach(cleanup)

describe('DetailOrder', () => {
  test('displays items', async () => {
    const { container } = render(
      <Detail
        id={'1'}
        items={[
          {
            widget: { name: 'Widget Prime' },
            id: '1',
            size: 'XS',
            color: '#F00',
            price: 9.99
          },
          {
            widget: { name: 'Widget Basic' },
            id: '2',
            size: 'XL',
            color: '#00F',
            price: 0.99
          }
        ]}
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  test('calls remove callback on click', async () => {
    const removeItem = jest.fn()
    const { getByTestId } = render(
      <Detail
        items={[
          {
            widget: { name: 'Widget Prime' },
            id: '2',
            size: 'XS',
            color: '#F00',
            price: 9.99
          },
          {
            widget: { name: 'Widget Basic' },
            id: '3',
            size: 'XL',
            color: '#00F',
            price: 0.99
          }
        ]}
        removeItem={removeItem}
      />
    )
    const variantId = '2'

    const removeButton = getByTestId(`removeButton-${2}`)
    fireEvent.click(removeButton)
    expect(removeItem).toHaveBeenCalledWith(variantId)
  })
})
