import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import axios from 'axios'


const AlbumDetail = () => {
  const {id} = useParams();
  const [album, setAlbum] = useState([])
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    async function fetchAlbum() {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      console.log(data)
      setAlbum(data)
    }
    fetchAlbum()
  }, [])

  useEffect(() => {
    async function fetchphotos() {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      console.log(data)
      setPhotos(data)
    }
    fetchphotos()
  }, [])


  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Title : {album.title}</Card.Title>
        </Card.Body>
      </Card>
      <Row>
      {photos.map(photo => (
        <Col>
        <Card style={{ width: '10rem' , margin: '10px' }} key={photo.id}>
          <Card.Img variant="top" src={photo.url} />
          <Card.Body>
            <Card.Title>{photo.title}</Card.Title>
          </Card.Body>
        </Card>
        </Col>
      ))} 
      </Row>
    </div>
  )
}

export default AlbumDetail