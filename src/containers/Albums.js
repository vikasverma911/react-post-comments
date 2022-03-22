import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Albums = () => {
    const [albums, setalbums] = useState([])
    const id = useParams().id
    useEffect(() => {
        async function fetchalbums() {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums')
            console.log(data)
            setalbums(data)
        }
        fetchalbums()
    }, [])
    return (
        <div>
            <h1>albums</h1>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {albums.map(album => 
                            (id === undefined || String(id) === String(album.userId)) ? (
                                <tr key={album.id} sm={12} md={6} lg={4} xl={3}>
                                    <td>{album.id}</td>
                                    <td>{album.title}</td>
                                    <td>
                                        <Link to={`/${album.userId}`}>
                                            <Button variant="outline-info" size="sm">User</Button>
                                        </Link>
                                        <Link to={`${album.id}`}>
                                            <Button variant="outline-info" size="sm">Photos</Button>
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

export default Albums