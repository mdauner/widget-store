import { gql } from 'apollo-server-express'

const widgetType = gql`
  enum Size {
    XS
    SM
    MD
    LG
    XL
  }

  type WidgetVariant {
    id: ID!
    widget: Widget!
    color: String!
    size: Size!
    price: Float!
  }

  type Widget {
    id: ID!
    name: String!
    variants: [WidgetVariant!]!
  }
`

module.exports = {
  widgetType
}
