import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav-left'>
        <Link to="/" className='nav-logo'>
          <img src="https://png.pngtree.com/element_our/20190603/ourmid/pngtree-movie-board-icon-image_1455346.jpg" alt="Logo" />
        </Link>
      </div>
     
      <div className='nav-right'>
        <div className='nav-center'>
         <Link to="/favorite" className='nav-link'>
             Favorite
           </Link>
        </div>

        <header>
          <SignedOut>
            <SignInButton className='nav-button' />
          </SignedOut>
          <SignedIn>
            <UserButton className='nav-button' />
          </SignedIn>
        </header>
      </div>
    </nav>
  );
}

export default Nav;
