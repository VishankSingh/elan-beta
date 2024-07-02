import './Workshops.css'
import VerticalMarquee from "../../components/VerticalMarquee/VerticalMarquee.jsx";

function Workshops() {
  return (
    <>
      <VerticalMarquee textColor={"#000000"} bgColor={"#ffffff"}/>
      <div className="workshops">
        <div className="top">
          <div className="title">Workshops</div>
          <div className="workshop-description">
            <p>
              Workshops are intended for hands-on experiential learning in coming-of-age topics like
              cybersecurity and generative AI. They are designed and planned in such a way that
              they improve student’s critical thinking skills along with the technical takeaways. But
              that's not all, we believe a good break makes learning easier and one more focused,
              which is why we have a whole set of numerous games set up for the participants during
              the break and a catch-up session with the students of IIT-Hyderabad at the end of the
              workshops.
            </p>
            <p>
              Is distance and time taken to reach our campus the one last thing stopping you from
              attending our amazing workshops? Well, don't worry because we got you covered there
              too! We arrange in-campus accommodation during the workshops for participants at
              extremely affordable costs. Stay overnight in our campus and experience life at an IIT.
              There are also transport services arranged for your ease on both the days of the
              workshop from in-demand stops in the city to our campus at economical prices. So
              what's stopping you from attending these workshops! Take a look at the next scheduled
              workshop below and fix your spot!
            </p>
          </div>
        </div>
        {/*
        TODO: Create workshop template
        */}
      </div>
    </>
  )
}

export default Workshops;