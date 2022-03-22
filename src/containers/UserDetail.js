import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import axios from 'axios'

const UserDetail = () => {
  const {id} = useParams();
  const [user, setuser] = useState([])
  const [userAddress, setUserAddress] = useState([])
  const [userCompany, setUserCompany] = useState([])
  useEffect(() => {
    async function fetchuser() {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      console.log(data)
      setuser(data)
      setUserAddress(data.address)
      setUserCompany(data.company)
    }
    fetchuser()
  }, [])
  

  return (
    <div>
          <h3>Details</h3>
          <ListGroup variant='flush'>
              <ListGroup.Item>
                  <p>name : {user.name}</p>
                  <p>username : {user.username}</p>
                  <p>email : {user.email}</p>
                  <p>contact : {user.phone}</p>
                  <p>website : {user.website}</p>

                  <p>city : {userAddress.city}</p>
                  <p>street : {userAddress.street}</p>
              </ListGroup.Item>
  
              <ListGroup.Item>
                  <p>company :</p>
                  <p>name : {userCompany.name}</p>
                  <p>type : {userCompany.bs}</p>
                  <p>{userCompany.catchPhrase}</p>
              </ListGroup.Item>
          </ListGroup>
        <Link to={`/${user.id}/post`}>
          <Button variant="outline-success">Posts</Button>
        </Link>
      <Link to={`/${user.id}/albumn`}>
        <Button variant="outline-success">Albums</Button>
      </Link>
    </div>
  )
}

export default UserDetail