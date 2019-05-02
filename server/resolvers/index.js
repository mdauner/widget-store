const { widgetResolvers } = require('./widget')
const { orderResolvers } = require('./order')

const resolvers = [widgetResolvers, orderResolvers]

module.exports = {
  resolvers
}
