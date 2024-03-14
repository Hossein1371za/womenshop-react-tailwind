import React from 'react'
import Header from './componenets/header/Header'
import { BrowserRouter } from 'react-router-dom'

const Home = () => {
  return (
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  )
}

export default Home