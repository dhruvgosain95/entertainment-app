import React from 'react'
import logo from '../../assets/logo.svg'
import homeIcon from '../../assets/icon-nav-home.svg'
import movieIcon from '../../assets/icon-nav-movies.svg'
import tvIcon from '../../assets/icon-nav-tv-series.svg'
import bookmarkIcon from '../../assets/icon-nav-bookmark.svg'
import avatar from '../../assets/image-avatar.png'
import './Header.scss'

const Header = () => {
  return (
    <nav className='navigation'>
        <a className='brand-logo' href="#">
            <img src={logo} alt="brand-logo"/>
        </a>
        <ul className='nav-list'>
            <li className="nav-list-item">
                <a className='home-icon' href="#">
                    <img src={homeIcon} alt="home"/>
                </a>
            </li>
            <li className="nav-list-item movie-icon">
                <a className='movie-icon' href="#">
                    <img src={movieIcon} alt="movie"/>
                </a>
            </li>
            <li className="nav-list-item tv-icon">
                <a className='tv-icon' href="#">
                    <img src={tvIcon} alt="tv"/>
                </a>
            </li>
            <li className="nav-list-item bookmark-icon">
                <a className='bookmark' href="#">
                    <img src={bookmarkIcon} alt="bookmark"/>
                </a>
            </li>
        </ul>
        <a className='user-profile'>
            <img src={avatar} alt="profile"/>
        </a>
    </nav>
  )
}

export default Header