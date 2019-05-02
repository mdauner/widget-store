const { gql } = require('apollo-server-express')

const query = gql`
  type Query {
    widgets: [Widget!]!
    order(id: ID!): Order!
  }
`

module.exports = {
  query
}
