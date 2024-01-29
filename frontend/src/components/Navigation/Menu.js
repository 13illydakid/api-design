import "./Menu.css";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';
import { Link, useHistory } from "react-router-dom";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { FaUserCircle } from "react-icons/fa";

function Menu({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  // const openMenu = () => {
  //   //if (showMenu) return;
  //   setShowMenu(true);
  // };
  const openMenu = useCallback(() => {
    setShowMenu((value) => !value);
  }, []);


  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    history.push('/')
  };

  // const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <div className="menu-container-outer">
        <div className="menu-container-inner">
          <div className="bnb-prompt-text">
            Dormbnb your home
          </div>
          <div onClick={openMenu} className="menu-icon">
            <AiOutlineMenu />
            <div className="menu-user-image">
              <div className="user-image">
                {/* <img src="/images/placeholder.jpg" alt="" /> */}
                <FaUserCircle size={26} />
              </div>
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="menu-open-outer">
            <div className="menu-open-inner">
              {user ? (
                <>
                  <div className="username-container">
                    <div>Hello, {user.firstName}</div>

                  </div>

                  <div className="email-container">
                    <div>EMAIL:</div>
                    <div>{user.email}</div>
                  </div>

                  <Link to='/spots/current' className="manage-spots-link" onClick={closeMenu}>
                    <div className="profile-buttons">
                      MANAGE SPOTS
                    </div>
                  </Link>

                  <p>
                    <button className="profile-buttons" onClick={logout}>LOGOUT</button>
                  </p>
                </>
              ) : (
                <>
                  <div className="bg-gray-700 w-auto block justify-center items-center">
                    <div className="flex justify-center items-center">
                      <button className="login-button">
                        <OpenModalMenuItem
                          className="login"
                          itemText="LOGIN"
                          onItemClick={closeMenu}
                          modalComponent={<LoginFormModal />}
                        />
                      </button>
                    </div>
                    <div className="flex justify-center items-center">
                      <button className="signup-button">
                        <OpenModalMenuItem
                          itemText="SIGN UP"
                          onItemClick={closeMenu}
                          modalComponent={<SignupFormModal />}
                        />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
      {/* <div className="fixed top-0 bottom-0 left-0 right-0" onClick={closeMenu}>
      </div> */}
          </div>
        )}

      </div>
    </>
  );
}


export default Menu;
