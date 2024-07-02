import './Accommodation.css'
import VerticalMarquee from "../../components/VerticalMarquee/VerticalMarquee.jsx";
import {useState} from "react";

function Accommodation() {


  return (
    <>
      <VerticalMarquee textColor={"#000000"} bgColor={"#ffffff"}/>
      <div className="accommodation">
        <div className="accommodation-title">Accommodation</div>
        <div className="accommodation-desc">
          The main fest is still quite a ways away. In the meantime, we have a number of exciting
          workshops planned for anyone and everyone looking to upskill themselves. The
          accommodation details for the workshop attendees are mentioned below.
        </div>
        <div className="general-info-title">General information</div>
        <div className="general-info-desc">
          <span className="general-info-desc-subtitle">Charges</span>
          <p>
            The workshops will take place over the weekend, so we are offering
            accommodation for one night at Rs999 (Check-in at 5pm Saturday, check-out at
            9:30am Sunday).
          </p>
          <span className="general-info-desc-subtitle">Identification</span>
          <p>
            You will be required to produce a valid government ID at the campus gate,
            failure to do so will result in denial of entry to the campus. (So please make sure
            to carry a government ID with you.)
          </p>
          <span className="general-info-desc-subtitle">Getting to IITH</span>
          <p>
            The main gate lies on the road from Patancheru to Kandi. There’s a bunch
            of large signs and boards, so you can’t miss it. Refer to &nbsp;
            <a
              href="https://www.google.co.in/maps/place/Indian+Institute+of+Technology+Hyderabad/@17.5878164,78.1185007,16z/data=!4m12!1m6!3m5!1s0x3bcbefdc136bffbb:0x73414ff6594c9191!2sIndian+Institute+of+Technology+Hyderabad!8m2!3d17.5910124!4d78.1221056!3m4!1s0x3bcbefdc136bffbb:0x73414ff6594c9191!8m2!3d17.5910124!4d78.1221056?hl=en&shorturl=1"
              target="_blank"
              className="underline-white map-link">
              Google maps<span className="map-link-arrow">&#8599;</span>
            </a>
            &nbsp; for the exact address. One can reach Patancheru by either bus or train. From
            Patancheru, one can reach the IIT main gate by either bus or auto. Refer to this &nbsp;
            <a
              href="https://docs.google.com/document/d/1ZQ-3vjjTGqcrJz5AlP-OnhCsuWZ6kTPfUqWmgh8EG2E/edit#heading=h.a3fdoraw0z8d"
              target="_blank"
              className="underline-white reach-doc-link">
              document<span className="reach-doc-link-arrow">&#8599;</span>
            </a>
            &nbsp; for more details.
          </p>


        </div>
        {/*
        TODO: Add FAQ section and complete accommodation page
        */}
        <div className="faq-title">FAQs</div>
        <div className="faq-accordion-cont">
          <div className="faq-top">
            <div className="faq-question">
              Is it possible for me to share a room with a friend?
            </div>
            <div className="faq-arrow">&#9661;</div>
          </div>
          <div className="faq-bottom" id="acc-1">
            A form will be floated for those who opted for accommodations. If friends want to
            stay together it is requested to make sure that at least one of you fills the form, else
            rooms will be allotted randomly.
          </div>
        </div>

      </div>
    </>
  )
}

export default Accommodation;