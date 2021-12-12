import React from 'react'
import './header.scss'
const Header = () => {
    return (
        <div className='header'>
            <div className="logoContainer">
                <img src={require('../../assets/header/cryptopunk-logo.png').default} className='punkLogo' alt="" />
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={require('../../assets/header/search.png').default} alt="" />
                </div>
                <input type="text" placeholder='Collection, item or user' className='searchInput' />
            </div>
            <ul className="headerItems">
                <li>Drops</li>
                <li>Marketplace</li>
                <li>Create</li>
            </ul>
            <div className="headerAction">
                <div className="themeSwitchContainer">
                <img src={require('../../assets/header/theme-switch.png').default} alt="" />
                </div>
            </div>
            <button className="loginButton">getin</button>
        </div>
    )
}

export default Header
