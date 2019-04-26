const { gql } = require('apollo-server-express')

const widgetType = gql`
    enum Color {
        GREEN
        RED
        BLUE
    }

    enum Size {
        SMALL
        MEDIUM
        LARGE
    }

    type WidgetVariant {
        color: Color!
        size: Size!
        numAvailable: Int!
        price: Float!
    }

    type Widget {
        name: String!
        variants: [WidgetVariant!]!
    }
`

module.exports = {
    widgetType,
}
