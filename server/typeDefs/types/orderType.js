import { gql } from 'apollo-server-express'

const orderType = gql`
  type Order {
    id: ID!
    items: [OrderItem!]!
  }

  type OrderItem {
    variant: WidgetVariant!
  }
`

module.exports = {
  orderType
}
