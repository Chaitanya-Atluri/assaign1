import Product from '../src/components/Items'
import { withApollo } from '../apollo/client'

const Index = () => {
  return (
    <Product />
  )
}

export default withApollo(Index)