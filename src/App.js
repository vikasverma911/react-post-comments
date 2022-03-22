import React from 'react'
import Header from './components/Header'
import Footer from "./components/Footer"
import {Container} from 'react-bootstrap'
import HomeScreen from './containers/HomeScreen'
import UserDetail from './containers/UserDetail'
import Posts from './containers/Posts'
import PostDetail from './containers/PostDetail'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Albums from './containers/Albums'
import AlbumDetail from './containers/AlbumDetail'

const App = () => {
  return (
    <Router>
      <Header />
        <main>
          <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact/>
            <Route path='/:id' element={<UserDetail />} exact />
            <Route path='/:id/post' element={<Posts/>} exact />
            <Route path='/posts' element={<Posts />} exact />
            <Route path='/posts/:id' element={<PostDetail />} exact />
            <Route path='/albums' element={<Albums />} exact />
            <Route path='/albums/:id' element={<AlbumDetail />} exact />
            <Route path='/:id/albums' element={<Albums />} exact />
          </Routes>
          </Container>
        </main>
      <Footer />
    </Router>
  )
}

export default App