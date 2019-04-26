const { gql } = require('apollo-server-express')

const query = gql`
    type Query {
        widgets: [Widget!]!
    }
`

module.exports = {
    query,
}
