import { useEffect, useState } from "react";
import {LOGO_URL} from "../utils/contants"

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
            <li className="headerList">Home</li>
            <li className="headerList">About Us</li>
            <li className="headerList">Contact</li>
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
  