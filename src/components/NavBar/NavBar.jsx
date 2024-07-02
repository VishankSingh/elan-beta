import './NavBar.css'
import {gsap} from "gsap";
import {useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";

function NavBar({textColor}) {
  const navMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [favicon, setFavicon] = useState('src/assets/logo/logo reduced white.png');

  useEffect(() => {
    const navCont = document.getElementById("nav-cont");
    navCont.style.color = textColor
    if (textColor === "#ffffff") {
      setFavicon("src/assets/logo/logo reduced white.png")
    }
    else if (textColor === "#000000") {
      setFavicon("src/assets/logo/logo reduced black.png")
    }
  }, [textColor]);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useGSAP(() => {
    if (menuOpen === true) {
      document.body.style.overflow = "hidden";
      navMenuRef.current.style.zIndex = 50;
      gsap.to(navMenuRef.current, {
        opacity: "1",
        duration: 0.3,
      });
      gsap.to(".menu-close", {
        opacity: 1,
        duration: 0.5,
      }, "<");
    }
    else if (menuOpen === false) {
      document.body.style.overflow = "auto";
      gsap.to(navMenuRef.current, {
        opacity: "0",
        duration: 0.3,
      });
      gsap.to(".menu-close", {
        opacity: 0,
        duration: 0.3,
      }, "<");
      gsap.to(navMenuRef.current, {
        zIndex: "-1",
        duration: 0,
      }, ">");

    }
  }, [menuOpen]);



  return (
    <div className="nav-cont" id="nav-cont">
      <div className="nav-top">
        <a className="logo" href="/">
          <img src={favicon} alt="Elan & nVision" />
        </a>

        <div className="nav-links">
          <div className="mobile-hide">
            <a href="/events">
              <span className="nav-links__span">EVENTS</span></a>
          </div>
          <div className="mobile-hide">
            <a href="/competitions">
              <span className="nav-links__span">COMPETITIONS</span></a>
          </div>
          <div className="mobile-hide">
            <a href="/workshops">
              <span className="nav-links__span">WORKSHOPS</span></a>
          </div>
          <div className="mobile-hide">
            <a href="#footer">
              <span className="nav-links__span">CONTACT US</span></a>
          </div>
          <div className="menu-open" onClick={toggleMenu}>
            <span className="nav-links__span">MENU</span>
          </div>
        </div>
      </div>

      <div className="nav-menu" ref={navMenuRef}>
        <div className="menu-close" onClick={toggleMenu}>
          <span className="">CLOSE</span>
        </div>
        <div className="menu">
          <div className="menu-link">
            <div className="menu-link-inner">
              <a href="/">Home</a>
            </div>
            <div className="menu-link-inner">
              <a href="/">Home</a>
            </div>
            <div className="blur-overlay"></div>
          </div>
          <div className="menu-link">
            <div className="menu-link-inner">
              <a href="/events">Events</a>
            </div>
            <div className="menu-link-inner">
              <a href="/events">Events</a>
            </div>
            <div className="blur-overlay"></div>
          </div>
          <div className="menu-link">
            <div className="menu-link-inner">
              <a href="/competitions">Competitions</a>
            </div>
            <div className="menu-link-inner">
              <a href="/competitions">Competitions</a>
            </div>
            <div className="blur-overlay"></div>
          </div>
          <div className="menu-link">
            <div className="menu-link-inner">
              <a href="/workshops">Workshops</a>
            </div>
            <div className="menu-link-inner">
              <a href="/workshops">Workshops</a>
            </div>
            <div className="blur-overlay"></div>
          </div>
          <div className="menu-link">
            <div className="menu-link-inner">
              <a href="/socialcause">Social Cause</a>
            </div>
            <div className="menu-link-inner">
              <a href="/socialcause">Social Cause</a>
            </div>
            <div className="blur-overlay"></div>
          </div>
          <div className="menu-link">
            <div className="menu-link-inner">
              <a href="/accommodation">Accommodation</a>
            </div>
            <div className="menu-link-inner">
              <a href="/accommodation">Accommodation</a>
            </div>
            <div className="blur-overlay"></div>
          </div>
          <div className="menu-link">
            <div className="menu-link-inner">
              <a href="/team">Team</a>
            </div>
            <div className="menu-link-inner">
              <a href="/team">Team</a>
            </div>
            <div className="blur-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;