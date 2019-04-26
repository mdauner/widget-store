const { gql } = require('apollo-server-express')

const widgetType = gql`
    type Widget {
        name: String!
    }
`

module.exports = {
    widgetType,
}
