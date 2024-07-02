import './Footer.css'
import {Link} from "react-router-dom";
import {useEffect} from "react";

function Footer({textColor, secondTextColor, bgColor}) {
  useEffect(() => {
    const footer = document.getElementById('footer');
    const headings = document.querySelectorAll('.heading');
    const mail = document.getElementById('mail');

    footer.style.color = textColor
    footer.style.backgroundColor = bgColor
    headings.forEach(elem => {
      elem.style.color = secondTextColor
    })
    mail.style.color = textColor
  }, [textColor, secondTextColor, bgColor]);

  return (
    <>
      <div className="footer" id="footer">
        <div className="upper-footer">
          <span className="heading">SEND US A MAIL</span>
          <span className="mail" id="mail">
            <a href="mailto:elan@iith.ac.in">ELAN@IITH.AC.IN</a>
          </span>
        </div>
        <div className="middle-footer">
          <div className="contact-poc">
          <div className="heading poc-heading">CONTACT US</div>
            <div className="poc">
              <div className="poc-inner poc-1">
                <span className="poc-name">Xxxxxxxxx Xxxxxxxx</span>
                <span>Xxxxxxx Xxxxxxxxxxx </span>
                <span>+91 XXXXXXXXXX</span>
              </div>
              <div className="poc-inner poc-2">
                <span className="poc-name">Xxxxxx Xxxxxxxx</span>
                <span>Xxxx xx Xxxxxx Xxxxxxxxx </span>
                <span>+91 XXXXXXXXXX</span>
              </div>
            </div>

          </div>
          <div className="contact-socials">
            <div className="heading socials-heading">SOCIALS</div>
            <div className="social-link link-red"><Link target={"_blank"} to="https://www.instagram.com/elan_nvision.iith">INSTAGRAM</Link></div>
            <div className="social-link link-green"><Link target={"_blank"} to="https://x.com/elan_nvision?mx=2">TWITTER</Link></div>
            <div className="social-link link-yellow"><Link target={"_blank"} to="https://www.facebook.com/elannvision.iithyderabad/">FACEBOOK</Link></div>
            <div className="social-link link-orange"><Link target={"_blank"} to="https://www.linkedin.com/company/elan-nvision-iith/">LINKEDIN</Link></div>
          </div>
        </div>
        <div className="bottom-footer"></div>
      </div>
    </>
  )
}

export default Footer;