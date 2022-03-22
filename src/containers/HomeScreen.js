import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Table , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomeScreen = () => {
  const [users, setusers] = useState([])

  useEffect(() => {
    async function fetchusers() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(data)
      setusers(data)
    }
    fetchusers()
  }, [])
  return (
    <div>
      <h1>Users</h1>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} sm={12} md={6} lg={4} xl={3}>
                <td>{user.id}</td>
                <Link to={`/${user.id}`} style={{ textDecoration: 'none' }}>
                  <td>{user.name}</td>
                </Link>
                <td>{user.email}</td>
                <td>
                  <Link to={`/${user.id}/post`}>
                    <Button variant="outline-info" size="sm">Posts</Button>
                  </Link> 
                  <Link to={`albums/${user.id}`}>
                    <Button variant="outline-info" size="sm">Albums</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default HomeScreen