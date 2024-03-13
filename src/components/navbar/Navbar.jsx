import React, { useEffect, useState } from 'react'
import "./Navbar.scss";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const [active,setActive] = useState(false);
  const [open,setOpen] = useState(false);

  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(() => {
    window.addEventListener("scroll",isActive);

    return () => {
      window.removeEventListener("scroll",isActive);
    }
  },[])

  const currentUser = {
    id : 1,
    username : "Suraj Kumar Yadav",
    isSeller : true
  }

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link '>
          <span className='text'>connect</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <div className="links">
          <span>Connect Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button className='buttons'>Join</button>}
          {currentUser && (
            <div className='user' onClick={()=> setOpen(!open)}>
              <img src='/images/Avtar.jpg' alt='.' />
              <span>{currentUser?.username}</span>
              {open && <div className='options'>
                {currentUser?.isSeller && (
                  <>
                  <Link className='link' to='/mygigs'>Gigs</Link>
                  <Link className='link' to='/add'>Add new Gigs</Link>
                  </>
                )}

                <Link className='link' to='/orders'>Order</Link>
                <Link className='link' to='/messages'>Messages</Link>
                <Link className='link' to='/'>Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
        { (active || pathname !== "/") && ( 
        <>
          <hr  className='separator'/>
          <div className="menu">
          <Link className='link' to='/'>
            Graphics and Design
          </Link>
          <Link className='link' to='/'>
            Video and Animations
          </Link>
          <Link className='link' to='/'>
            Writing and Translation
          </Link>
          <Link className='link' to='/'>
            AI Services
          </Link>
          <Link className='link' to='/'>
            Digital Markiting
          </Link>
          <Link className='link' to='/'>
            Music and Audio
          </Link>
          <Link className='link' to='/'>
            Programming and Tech
          </Link>
          <Link className='link' to='/'>
            Business
          </Link>
          <Link className='link' to='/'>
            Lifestyle
          </Link>
          </div>
          <hr  className='separator'/>
        </>
        )}
    </div>
  );
};

export default Navbar
