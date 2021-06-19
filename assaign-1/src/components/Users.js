import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const UsersQuery = gql`
query getItems {
    catogery,
    name,
    calories,
    fat,
    carbs,
    protiens,
    id
}`

const Users = () => {
  const { loading, error, data } = useQuery(UsersQuery)

  if (loading) return <div>'loading users...'</div>
  if (error) return <div>'error while loading users'</div>

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          {data.itemss.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users