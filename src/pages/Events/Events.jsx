import './Events.css'
import VerticalMarquee from "../../components/VerticalMarquee/VerticalMarquee.jsx";
import {useEffect, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function Events() {
  const [eventNo, setEventNo] = useState(0);
  const [slider, setSlider] = useState(true);

  const tl = gsap.timeline()

  function handleNextEvent() {
    const prev = document.getElementById('prev')
    const next = document.getElementById('next')

    if (slider === false) return

    if (eventNo === 0) {
      prev.innerHTML = '&#9664; Pronites'
      next.innerHTML = 'Informals &#9654;'
      setEventNo(1)
    } else if (eventNo === 1) {
      prev.innerHTML = '&#9664; Workshops'
      next.innerHTML = 'Pronites &#9654;'
      setEventNo(2)
    } else if (eventNo === 2) {
      prev.innerHTML = '&#9664; Informals'
      next.innerHTML = 'Workshops &#9654;'
      setEventNo(0)
    }
    setSlider(false)
  }

  function handlePrevEvent() {
    const prev = document.getElementById('prev')
    const next = document.getElementById('next')
    if (slider === false) return
    if (eventNo === 0) {
      prev.innerHTML = '&#9664; Workshops'
      next.innerHTML = 'Pronites &#9654;'
      setEventNo(2)
    } else if (eventNo === 1) {
      prev.innerHTML = '&#9664; Informals'
      next.innerHTML = 'Workshops &#9654;'
      setEventNo(0)
    } else if (eventNo === 2) {
      prev.innerHTML = '&#9664; Pronites'
      next.innerHTML = 'Informals &#9654;'
      setEventNo(1)
    }
    setSlider(false)
  }

  useGSAP(() => {
    tl.to('.events-inner', {
      transform: `translateX(-${eventNo * 100}%)`,
      ease: "power3.inOut",
      duration: 0.4,
      onComplete: () => setSlider(true),
    })
  }, [eventNo]);



  return (
    <>
      <VerticalMarquee/>

      <div className="control desktop-hide">
        <div className="prev" id="prev" onClick={handlePrevEvent}>&#9664; Informals</div>

        <div className="next" id="next" onClick={handleNextEvent}>Workshops &#9654;</div>
      </div>

      <div className="events">
        <div className="events-inner">
          <div className="events-desc">
            <span className="event-number mobile-hide">01.</span>
            <div className="events-title">Pronites</div>
            <div className="events-about">
              Pronites are the highlight event of our fest, spanning three captivating evenings
              designed to leave the audience with unforgettable memories. Featuring a diverse array
              of performances by popular singers, musical bands, stand-up comedians and DJs,
              these talented artists bring their unique flair and energy to the stage, ensuring that every
              moment is filled with excitement and wonder. Our meticulously curated line-up, which
              has previously featured the likes of Darshan Raval, Zakir Khan, Divine, Shirley Setia,
              Gajendra Verma, The Local Train, When Chai Met Toast, Aashish Solanki, The Yellow
              Diary and many more, promises not only to entertain but also to create an electrifying
              atmosphere that resonates long after the event concludes.
            </div>
          </div>
          <div className="image-cont">
            <div className="img">
              <img src="src/assets/events_images/pronites3.jpg" alt="" width="100%" height="100%"/>
            </div>
            <div className="img">
              <img src="src/assets/events_images/pronites2.png" alt="" width="100%" height="100%"/>
            </div>
            <div className="img">
              <img src="src/assets/events_images/pronites1.png" alt="" width="100%" height="100%"/>
            </div>
          </div>
        </div>
        <div className="events-inner">
          <div className="events-desc">
            <span className="event-number mobile-hide">02.</span>
            <div className="events-title">Workshops</div>
            <div className="events-about">
              Along with the joy and fun part of our fest their must be some learning cornerstone
              which are the workshops. The workshops help the attendees delve into cutting-edge
              topics in the industry, offering valuable insights and practical skills. They are designed and planned in
              such a way that they improve students&apos; critical thinking skills along with
              the technical takeaways. From emerging trends to established practices, our workshops
              cover a diverse range of subjects, ensuring attendees stay ahead of the curve.
            </div>
          </div>
          <div className="image-cont">
            <div className="img">
              <img src="src/assets/events_images/workshop1.png" alt="" width="100%" height="100%"/>
            </div>
            <div className="img">
              <img src="src/assets/events_images/workshop2.jpg" alt="" width="100%" height="100%"/>
            </div>
            <div className="img">
              <img src="src/assets/events_images/workshop3.jpg" alt="" width="100%" height="100%"/>
            </div>
          </div>
        </div>
        <div className="events-inner">
          <div className="events-desc">
            <span className="event-number mobile-hide">03.</span>
            <div className="events-title">Informals</div>
            <div className="events-about">
              Informals are the place where fun begins. We curate an extensive variety of games like
              scavenger hunt, human knot and much more, ensuring our fest is a joyous and
              unforgettable experience. Every activity is designed for pure enjoyment, ranging from
              crazy antics to simple pleasures. With activities tailored for all, we guarantee every
              moment is filled with excitement and laughter.
            </div>
          </div>
          <div className="image-cont">
            <div className="img">
              <img src="src/assets/events_images/infi1.JPG" alt="" width="100%" height="100%"/>
            </div>
            <div className="img">
              <img src="src/assets/events_images/infi2.jpg" alt="" width="100%" height="100%"/>
            </div>
            <div className="img">
              <img src="src/assets/events_images/infi3.jpg" alt="" width="100%" height="100%"/>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Events;