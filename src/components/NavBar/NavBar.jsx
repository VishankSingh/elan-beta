import './NavBar.css';
import {gsap} from 'gsap';
import {useRef, useState} from 'react';
import {useGSAP} from '@gsap/react';

function NavBar() {
  const navMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const logo = 'src/assets/logo/white horizontal no bg cropped left.png';
  const tl = gsap.timeline();

  function onHoverIn(color) {
    gsap.to(navMenuRef.current, {
      backgroundColor: color,
      duration: 0.3
    });
  }

  function onHoverOut() {
    gsap.to(navMenuRef.current, {
      backgroundColor: '#000000',
      duration: 0.3
    });
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useGSAP(() => {
    if (menuOpen === true) {
      document.body.style.overflow = 'hidden';
      navMenuRef.current.style.zIndex = 50;
      tl.to(navMenuRef.current, {
        opacity: '1',
        duration: 0.3
      });
      tl.to('.menu-close', {
        opacity: 1,
        duration: 0.5
      }, '<');
    } else if (menuOpen === false) {
      document.body.style.overflow = 'auto';
      tl.to(navMenuRef.current, {
        opacity: '0',
        duration: 0.3
      });
      tl.to('.menu-close', {
        opacity: 0,
        duration: 0.3
      }, '<');
      tl.to(navMenuRef.current, {
        zIndex: '-1',
        duration: 0
      }, '>');
    }
  }, [menuOpen]);


  return (
    <div className='nav-cont' id='nav-cont'>
      <div className='nav-top'>
        <a className='logo' href='/'>
          <img src={logo} alt='Elan & nVision'/>
        </a>

        <div className='nav-links'>
          <div className='mobile-hide'>
            <a href='/events'>
              <span className='nav-links__span'>EVENTS</span></a>
          </div>
          <div className='mobile-hide'>
            <a href='/competitions'>
              <span className='nav-links__span'>COMPETITIONS</span></a>
          </div>
          <div className='mobile-hide'>
            <a href='/workshops'>
              <span className='nav-links__span'>WORKSHOPS</span></a>
          </div>
          <div className='mobile-hide'>
            <a href='#footer'>
              <span className='nav-links__span'>CONTACT US</span></a>
          </div>
          <div className='menu-open' onClick={toggleMenu}>
            <span className='nav-links__span'>MENU</span>
          </div>
        </div>
      </div>

      <div className='nav-menu' ref={navMenuRef}>
        <div className='menu-close' onClick={toggleMenu}>
          <span className=''>CLOSE</span>
        </div>
        <div className='menu'>
          <div className='menu-link'
               onMouseEnter={() => {onHoverIn('#ff5959')}}
               onMouseLeave={onHoverOut}>
            <a href='/'>Home</a>
          </div>
          <div className='menu-link'
               onMouseEnter={() => {onHoverIn('#ffb900')}}
               onMouseLeave={onHoverOut}>
            <a href='/events'>Events</a>
          </div>
          <div className='menu-link'
               onMouseEnter={() => {onHoverIn('#ffffff')}}
               onMouseLeave={onHoverOut}>
            <a href='/competitions'>Competitions</a>
          </div>
          <div className='menu-link'
               onMouseEnter={() => {onHoverIn('#ffffff')}}
               onMouseLeave={onHoverOut}>
            <a href='/workshops'>Workshops</a>
          </div>
          <div className='menu-link'
               onMouseEnter={() => {onHoverIn('#ffffff')}}
               onMouseLeave={onHoverOut}>
            <a href='/socialcause'>Social Cause</a>
          </div>
          <div className='menu-link'
               onMouseEnter={() => {onHoverIn('#ffffff')}}
               onMouseLeave={onHoverOut}>
            <a href='/accommodation'>Accommodation</a>
          </div>
          <div className='menu-link'
               onMouseEnter={() => {onHoverIn('#ffffff')}}
               onMouseLeave={onHoverOut}>
            <a href='/team'>Team</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;