import './CustomCursor.css'

import {useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';
import {useGSAP} from "@gsap/react";

import './CustomCursor.css'

const CustomCursor = ({color}) => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    if (isHovered === true) {
      gsap.to(".cursor", {
        scale: 1,
        duration: 0.1,
      });
    } else if (isHovered === false) {
      gsap.to(".cursor", {
        scale: 1,
        duration: 0.1,
      });
    }
  }, [isHovered]);

  const lastMousePosition = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handleMouseMove = (e) => {
      const currentTime = Date.now();

      const deltaX = e.clientX - lastMousePosition.current.x;

      const rotationAngle = deltaX * 0.9;

      const x = e.clientX - cursorRef.current.offsetWidth / 2 - window.innerWidth / 2;
      const y = e.clientY - cursorRef.current.offsetHeight / 2 - window.innerHeight / 2;

      gsap.to(cursorRef.current, {
        x: x,
        y: y,
        rotate: rotationAngle,
        duration: 0.2,
      });
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
      lastTime.current = currentTime;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {window.removeEventListener('mousemove', handleMouseMove)};
  }, []);

  useEffect(() => {
    const hoverElements = document.querySelectorAll('.link-out');
    const onMouseEnter = () => {setIsHovered(true)};
    const onMouseLeave = () => {setIsHovered(false)};

    hoverElements.forEach(elem => {
      elem.addEventListener("mouseenter", onMouseEnter);
      elem.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      hoverElements.forEach(elem => {
        elem.removeEventListener("mouseenter", onMouseEnter);
        elem.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [])

  return (
    <div className="cursor" id="cursor" ref={cursorRef} style={{ backgroundColor: color }}>
      <div className="cursor-text" id="cursor-text">
      </div>
    </div>
  );
};

export default CustomCursor;