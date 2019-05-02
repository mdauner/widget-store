const { gql } = require('apollo-server-express')

const mutation = gql`
  type Mutation {
    order(variants: [ID!]!): Order!
  }
`

module.exports = {
  mutation
}
