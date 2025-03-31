import { useState } from 'react'
import styled from 'styled-components'
import requests from './api/requests'
import Banner from './components/Banner'
import Category from './components/Category'
import Row from './components/Row'

import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Login from './pages/LoginPage'
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage'
import DetailPage from './pages/DetailPage'

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Login />} />
          <Route path="main" element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App

