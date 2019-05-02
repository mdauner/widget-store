const { query } = require('./query')
const { mutation } = require('./mutation')
const { widgetType, orderType } = require('./types')

const typeDefs = [query, mutation, widgetType, orderType]

module.exports = {
  typeDefs
}
