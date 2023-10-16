// frontend/src/components/Navigation/index.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Search from "./Search";
import Menu from "./Menu";



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);


  return (
    <div className='nav-bar'>
      <div className='nav-bar-contents'>
        <div className='nav-bar-left'>
          <NavLink exact to="/">
            {/* <i className="logo-left fa-solid fa-brands fa-airbnb"></i> */}
            <i className="fa-solid logo-text"><h1>DormBnB</h1></i>
            {/* <i className="logo-right fa-solid fa-brands fa-airbnb"></i> */}
          </NavLink>
        </div>
        <div className='nav-bar-center'>
          <Search />
        </div>
        <div className='nav-bar-right'>
          {sessionUser ? <NavLink to='/spot/createSpotForm' className='create-new-spot'>Create a New Spot</NavLink> : null}
          {isLoaded && (
            <div className='profile-button'>
              {/* <ProfileButton user={sessionUser} /> */}
              <Menu user={sessionUser} />
            </div>
          )}
        </div>
      </div>
      {/* <div className="nav-bar-contents">
        <CategoryPills
        categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div> */}
    </div>
  );
}


export default Navigation;
