import React, { useState } from 'react'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

import './Navbar.css';

const Navbar = () => {

  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return;

    navigate(`/search?q=${search}`);

    setSearch('');
  }

  return (
    <nav className='nav_header'>
        <h1>
            <Link to='/'> <BiCameraMovie /> MoviesLib </Link>
        </h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Busque um filme...' onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button type="submit"> <BiSearchAlt2 /> </button>
        </form>
    </nav>
  )
}

export default Navbar