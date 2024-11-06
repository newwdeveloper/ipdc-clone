import logo from "../utils/website-logo.png";
import Search from "./Search";

function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar">
        <ul>
          <li>RETAIL</li>
          <li>SME</li>
          <li>CORPORATE</li>
          <li>ABOUT US</li>
          <li>COVID 19</li>
          <li>CAMPAINS</li>
        </ul>
      </div>
      <Search />
    </header>
  );
}

export default Header;
