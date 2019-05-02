import models from '../models'

const orderResolvers = {
  Query: {
    order: async (parent, { id }) =>
      models.Order.findOne({
        where: {
          id
        },
        include: [
          {
            model: models.OrderItem,
            include: [
              {
                model: models.WidgetVariant,
                include: [{ model: models.Widget }]
              }
            ]
          }
        ]
      })
  },
  Mutation: {
    order: (parent, { variants }) =>
      models.Order.create(
        {
          items: variants.map(variantId => ({ variantId }))
        },
        {
          include: [models.OrderItem]
        }
      )
  }
}

module.exports = {
  orderResolvers
}
