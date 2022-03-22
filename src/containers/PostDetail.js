import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import axios from 'axios'


const PostDetail = () => {
  const {id} = useParams();
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  useEffect(() => {
    async function fetchpost() {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      console.log(data)
      setPost(data)
    }
    fetchpost()
  }, [])

  useEffect(() => {
    async function fetchpost() {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      console.log(data)
      setComments(data)
    }
    fetchpost()
  }, [])
  console.log(comments)

  return (
    <div>
          <Card.Header>Post</Card.Header>
      <Card>
        
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.body}
          </Card.Text>
        </Card.Body>
      </Card>
          <Card.Header>Comments</Card.Header>

      
              {comments.map(comment => (
                  <Card key={comment.id}>
                <Card.Body>
                    <Card.Title>{comment.name}</Card.Title>
                    <Card.Title>{comment.email}</Card.Title>
                <Card.Text>
                    {comment.body}
                </Card.Text>
                </Card.Body>
                </Card>
              ))}
      
    </div>
  )
}

export default PostDetail