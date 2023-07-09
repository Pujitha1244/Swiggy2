import { useEffect, useState } from "react";
import {LOGO_URL} from "../utils/contants"
import { Link } from "react-router-dom";

const Header = () => {
  const[btnName,setBtnName] = useState("LogIn")

  useEffect(()=>{

  },[])
    return (
      <div className="header">
        <>
          <img className="logo"
            src={LOGO_URL} />
        </>
        <div className="nav-items">
          <ul>
            <li className="headerList"><Link to="/">Home</Link></li>
            <li className="headerList"><Link to="/about">About Us</Link></li>
            <li className="headerList"><Link to="/contact">Contact</Link></li>
            <li className="headerList">Cart</li>
            <button className="login" onClick={()=>{
              btnName === "LogIn"? setBtnName("LogOut"): setBtnName("LogIn")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header
  