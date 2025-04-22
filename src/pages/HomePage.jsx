import React from 'react'
import Form from '../components/Form'
import SearchBar from '../components/SearchBar'
import CardList from '../components/CardList'
import Navi from '../components/Navi'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="main-page">
    {/* <Form></Form> */}
    <Navi/>
    <Outlet/>
    <SearchBar/>
    <CardList/>
  </div>
  )
}

export default HomePage