import React from 'react'
import "../components/NavBar.css";

function NavBar() {
  return (
    <nav>
        <div className='nav-logo'>
            <p>E-Store LOGO</p>
        </div>
        <div className='nav-list'>
            <ul>
                <li>Shop</li>
                <li>On Sale</li>
            </ul>
        </div>
        <div className='nav-cart-box'>
            <p>Search</p>
            <p>Cart</p>
        </div>
    </nav>
  )
}

export default NavBar