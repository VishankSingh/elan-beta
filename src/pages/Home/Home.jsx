import './Home.css'
import {gsap} from "gsap";

import VerticalMarquee from "../../components/VerticalMarquee/VerticalMarquee.jsx";
import {useGSAP} from "@gsap/react";
import {useEffect, useRef, useState} from "react";
import {ScrollTrigger} from 'gsap/all';
import Marquee from "react-fast-marquee";

function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const elanRef = useRef(null);
  const nvisionRef = useRef(null);
  const [currentTime, setCurrentTime] = useState('');
  const cursorTextRef = useRef(null);
  const cursorRef = useRef(null);
  const sponsorMarqueeRef = useRef(null);


  useEffect(() => {
    cursorTextRef.current = document.getElementById("cursor-text");
    cursorRef.current = document.getElementById("cursor");
  }, []);

  useEffect(() => {
    function setTime() {
      const ISTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
      const now = new Date(ISTime);
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const isAm = hours < 12;
      hours = hours % 12 || 12;
      const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${isAm ? 'A.M' : 'P.M'} IST`;
      setCurrentTime(formattedTime);
    }

    setTime()
    const interval = setInterval(setTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const padZero = (number) => {
    return number < 10 ? '0' + number : number;
  };

  const onMouseEnter = () => {
    if (cursorTextRef.current) {
      cursorTextRef.current.style.fontSize = '0.04vw';
      cursorTextRef.current.innerHTML = "Register for workshops &#8599;";
    }
    if (cursorRef.current) {
      cursorRef.current.style.mixBlendMode = "exclusion";
      cursorRef.current.classList.add('rotate');
    }
    gsap.to(".cursor", {
      scale: 25,
      duration: 0.3,
    });
  };

  const onMouseLeave = () => {
    gsap.to(".cursor", {
      scale: 1,
      duration: 0.3,
      onComplete: () => {
        cursorRef.current.style.mixBlendMode = "exclusion";
        cursorTextRef.current.innerHTML = "";
        cursorRef.current.classList.remove('rotate');
      }
    });
  };

  useGSAP(() => {
    if (window.innerWidth > 992) {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: ".home-bg",
          scroller: "body",
          start: "top top",
          end: "100% 20%",
          scrub: true,
          markers: false,
        },
        backgroundColor: "rgba(0,0,0,1)",
        duration: 1,
      });
    }

  }, []);

  useGSAP(() => {
    gsap.to(elanRef.current, {
      left: "6vw",
      duration: 4,
      scrollTrigger: {
        trigger: elanRef.current,
        scroller: "body",
        markers: false,
        start: "top 48%",
        end: "bottom -20%",
        scrub: true,
      },
    });
  }, []);

  /*
    useEffect(() => {
      const splitText = new SplitType(".about-text-para", {
        type: 'lines',
      })
      console.log(splitText)
      gsap.from(".line", {
        transform: "translateY(70%)",
        opacity: 0,
        scrollTrigger: {
          trigger: ".about-text-para",
          markers: true,
          start: "top 50%",
          end: "bottom -20%",
          scrub: true,
        }
      })
      return () => {
        splitText.revert()
      }
    }, []);
  */




  return (
    <>
      <VerticalMarquee/>
      <div className="home-bg"></div>
      <div className="container" ref={containerRef}>

        <a href="/workshops" rel="noopener noreferrer" className="mobile-hide">
          <div className="hero" onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
            <div className="hero-text">
              <span ref={elanRef} className="elan-text">Elan &<br/></span>
              <span ref={nvisionRef}><span className="eta">&eta;</span>Vision</span>
            </div>
            <div className="hero-sub-text">
              <div className="mobile-hide">{currentTime}</div>
              <div>IIT HYDERABAD</div>
            </div>
          </div>
        </a>

          <div className="hero desktop-hide" onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
            <div className="hero-text">
              <span className="elan-text">Elan &<br/></span>
              <span><span className="eta">&eta;</span>Vision</span>
            </div>
            <div className="hero-sub-text">
              <div className="mobile-hide">{currentTime}</div>
              <div>IIT HYDERABAD</div>
            </div>
            <div className="about-mobile">
              <p className="about-mobile-text">
                Elan & nVision is the annual techno-cultural fest of IIT Hyderabad. It is a celebration of
                the stories, the melodies, and the memories that bring us together, as well as the
                technology and innovation that propels us forward. Elan & nVision offers to all those
                who attend, the exciting opportunity to witness some of the best aspects of student life,
                including, but not limited to, enthralling competitions, exhilarating performances and
                electrifying concerts, all jam-packed into three days.
              </p>
            </div>
          </div>

        <div className="about mobile-hide">
          <div className="about-text" id="about-text">
            <p className="about-text-para">
              Elan & nVision is the annual techno-cultural fest of IIT Hyderabad. It is a celebration of
              the stories, the melodies, and the memories that bring us together, as well as the
              technology and innovation that propels us forward. Elan & nVision offers to all those
              who attend, the exciting opportunity to witness some of the best aspects of student life,
              including, but not limited to, enthralling competitions, exhilarating performances and
              electrifying concerts, all jam-packed into three days.
            </p>
          </div>
        </div>

        {/*
        TODO: complete gallery layout for desktop and mobile,
              add gallery title for mobile (and desktop?)
        */}
        <div className="gallery-cont">
          <div className="gallery-title">Gallery</div>
          <div className="gallery">
            <div className="gallery-item gallery-1"></div>
            <div className="gallery-item gallery-2"></div>
            <div className="gallery-item gallery-3"></div>
            <div className="gallery-item gallery-4"></div>
            <div className="gallery-item gallery-5"></div>
            <div className="gallery-item gallery-6"></div>
            <div className="gallery-item gallery-7"></div>
            <div className="gallery-item gallery-8"></div>
            <div className="gallery-item gallery-9"></div>
            <div className="gallery-item gallery-10"></div>
            <div className="gallery-item gallery-11"></div>
            <div className="gallery-item gallery-12"></div>
            <div className="gallery-item gallery-13"></div>
            <div className="gallery-item gallery-14"></div>
            <div className="gallery-item gallery-15"></div>
            <div className="gallery-item gallery-16"></div>
            <div className="gallery-item gallery-17"></div>
            <div className="gallery-item gallery-18"></div>
            <div className="gallery-item gallery-19"></div>
            <div className="gallery-item gallery-20"></div>
            <div className="gallery-item gallery-21"></div>
            <div className="gallery-item gallery-22"></div>
            <div className="gallery-item gallery-23"></div>
            <div className="gallery-item gallery-24"></div>
          </div>
        </div>
      </div>

      <div className="sponsors-cont">
        <div className="sponsor-title">
          Our partners
        </div>

        <div className="marquee">
          <Marquee autoFill speed={150} ref={sponsorMarqueeRef} direction={'right'}>
            <div className="marquee-inner">
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Banna.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Blend360.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Coca%20Cola.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/EMT.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Forge%20Alumnus.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Gaana.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Godrej.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Greenko.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Hitachi.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Honey%20Twigs.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/IBM.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Indian%20Oil.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/jio.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/KLA.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/KTM.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/L&T.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Maybelline.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Microsoft.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/MTV.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/ola.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Realme.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Safexpress.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Stockedge.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Tinder.png' alt=''/>
              </div>
              <div className="sponsors-box">
                <img src='src/assets/sponsors_images/Uniball.png' alt=''/>
              </div>


            </div>
          </Marquee>
        </div>
      </div>

    </>
  )
}

export default Home;
