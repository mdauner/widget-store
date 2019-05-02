import gql from 'graphql-tag'

const GET_ORDER_QUERY = gql`
  query order($id: ID!) {
    order(id: $id) {
      id
      items {
        variant {
          widget {
            name
          }
          color
          size
          price
        }
      }
    }
  }
`

const GET_ALL_WIDGETS = gql`
  query allWidgets {
    widgets {
      id
      name
      variants {
        id
        color
        price
        size
      }
    }
  }
`

export { GET_ORDER_QUERY, GET_ALL_WIDGETS }
