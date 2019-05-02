import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  WidgetWrapper,
  WidgetHeader,
  WidgetContent,
  Row,
  RowHeader,
  Options,
  Color,
  Size,
  OrderRow,
  OrderButton
} from './styles'

function Widget({ id, name, variants, addToCart }) {
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)

  const availableColors = [
    ...variants.reduce((v, curr) => v.add(curr.color), new Set())
  ]

  const colorSizes = useMemo(
    () =>
      variants.reduce(
        (v, curr) => (curr.color === selectedColor ? [...v, curr.size] : v),
        []
      ),
    [selectedColor, variants]
  )

  function selectColor(color) {
    setSelectedColor(color)
    setSelectedSize(null)
  }

  function resetWidget() {
    setSelectedColor(null)
    setSelectedSize(null)
  }

  function add() {
    const variant = variants.find(
      variant =>
        variant.color === selectedColor && variant.size === selectedSize
    )
    addToCart(variant.id, name, selectedSize, selectedColor, variant.price)
    resetWidget()
  }

  return (
    <WidgetWrapper>
      <WidgetHeader>{name}</WidgetHeader>
      <WidgetContent>
        <Row>
          <RowHeader>Color</RowHeader>
          <Options>
            {availableColors.map(color => (
              <Color
                key={color}
                data-testid={`${id}-color-${color}`}
                onClick={() => selectColor(color)}
                selected={selectedColor === color}
                color={color}
              />
            ))}
          </Options>
        </Row>
        {selectedColor && (
          <Row>
            <RowHeader>Size</RowHeader>
            <Options>
              {colorSizes.map(size => (
                <Size
                  key={size}
                  data-testid={`${id}-size-${size}`}
                  onClick={() => setSelectedSize(size)}
                  selected={selectedSize === size}
                >
                  {size}
                </Size>
              ))}
            </Options>
          </Row>
        )}
      </WidgetContent>
      {selectedSize && (
        <OrderRow>
          <div
            css="flex: 1; justify-self: flex-end;   display: flex;
  justify-content: flex-end;"
          >
            <OrderButton onClick={add}>Add To Cart</OrderButton>
          </div>
        </OrderRow>
      )}
    </WidgetWrapper>
  )
}

Widget.propTypes = {
  widgets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      variants: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          size: PropTypes.oneOf(['XS', 'SM', 'MD', 'LG', 'XL']),
          color: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired
        })
      ).isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
}

export default Widget
