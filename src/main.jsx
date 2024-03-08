import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import Movie from './pages/Movie/Movie.jsx'
import Search from './pages/Search/Search.jsx'


import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<Home />}/>
        <Route path='movie/:id' element={<Movie />}/>
        <Route path='search' element={<Search />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
