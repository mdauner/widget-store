import colors from './colors'
import models from '../models'

const createWidgets = async () => {
  ;[
    { name: 'Widget Basic', price: 9.99 },
    { name: 'Widget Prime', price: 59.99 },
    { name: 'Widget Elite', price: 79.99 },
    { name: 'Widget Extreme Edition', price: 99.99 }
  ].forEach(async ({ name, price }) => {
    await models.Widget.create(
      {
        name,
        variants: [
          ...[colors.TEAL, colors.RED, colors.PINK, colors.PURPLE].map(
            color => ({
              color,
              size: 'XS',
              price
            })
          ),
          ...[colors.RED, colors.BLUE, colors.CYAN, colors.TEAL].map(color => ({
            color,
            size: 'SM',
            price
          })),
          ...[colors.TEAL, colors.LIME, colors.YELLOW, colors.AMBER].map(
            color => ({
              color,
              size: 'MD',
              price
            })
          ),
          ...[colors.AMBER, colors.ORANGE, colors.BROWN, colors.GREY].map(
            color => ({
              color,
              size: 'LG',
              price
            })
          ),
          ...[colors.GREY, colors.INDIGO, colors.GREEN].map(color => ({
            color,
            size: 'XL',
            price
          }))
        ]
      },
      {
        include: [models.WidgetVariant]
      }
    )
  })
}

export { createWidgets }
