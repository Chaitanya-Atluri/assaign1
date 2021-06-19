import Head from 'next/head'
import Users from '../src/components/Users'
import { withApollo } from '../apollo/client'

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Users />


      

      
    </div>
  )
}

export default withApollo(Index)