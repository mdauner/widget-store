import gql from 'graphql-tag'

const ORDER_MUTATION = gql`
  mutation order($variants: [ID!]!) {
    order(variants: $variants) {
      id
    }
  }
`
export { ORDER_MUTATION }
