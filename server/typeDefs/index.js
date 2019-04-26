const { query } = require('./query')
const { widgetType } = require('./types')

const typeDefs = [query, widgetType]

module.exports = {
    typeDefs,
}
