import cell from "../utils/phone.png";
import facebook from "../utils/facebook.png";
import youtube from "../utils/youtube.png";
import linkdin from "../utils/linkedin.png";
import insta from "../utils/instagram.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="emergency">
        <img src={cell} alt="cellphone" />
        <p>1659</p>
      </div>
      <div className="footer-logos">
        <img src={facebook} alt="facebook logo" />
        <img src={youtube} alt="youtube logo" />
        <img src={linkdin} alt="linkdin logo" />
        <img src={insta} alt="insta logo" />
      </div>
    </footer>
  );
}
export default Footer;
