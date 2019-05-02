import React from 'react'
import PropTypes from 'prop-types'
import { Widget } from './'
import { ListWrapper } from './styles'

function WidgetList({ widgets, addToCart }) {
  return (
    <ListWrapper>
      <h1>Widget Store</h1>
      {widgets.map(widgetData => (
        <Widget key={widgetData.name} addToCart={addToCart} {...widgetData} />
      ))}
    </ListWrapper>
  )
}

WidgetList.propTypes = {
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

export default WidgetList
