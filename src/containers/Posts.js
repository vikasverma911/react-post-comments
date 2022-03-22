import React, { useState, useEffect } from 'react'
import { Table , Button} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Posts = () => {
  const [posts, setposts] = useState([])
  const id = useParams().id
  console.log(id)
  useEffect(() => {
    async function fetchposts() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(data)
      setposts(data)
    }
    fetchposts()
  }, [])
  return (
    <div>
      <h1>Posts</h1>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => 
              (id === undefined || String(id) === String(post.userId)) ?
            (
              <tr key={post.id} sm={12} md={6} lg={4} xl={3}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <Link to={`/${post.userId}`}>
                    <Button variant="outline-info" size="sm">User</Button>
                  </Link>
                  <Link to={`${post.id}`}>
                    <Button variant="outline-info" size="sm">Comments</Button>
                  </Link>
                </td>
              </tr>
            ) : (
              <p></p>
            )
            )}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Posts