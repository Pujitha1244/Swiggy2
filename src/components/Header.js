import {LOGO_URL} from "../utils/contants"

const Header = () => {
    return (
      <div className="header">
        <>
          <img className="logo"
            src={LOGO_URL} />
        </>
        <div className="nav-items">
          <ul>
            <li className="headerList">Home</li>
            <li className="headerList">About Us</li>
            <li className="headerList">Contact</li>
            <li className="headerList">Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header
  