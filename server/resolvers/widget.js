import models from '../models'

const widgetResolvers = {
  Query: {
    widgets: async () =>
      models.Widget.findAll({
        include: [
          {
            model: models.WidgetVariant
          }
        ]
      })
  }
}

module.exports = {
  widgetResolvers
}
