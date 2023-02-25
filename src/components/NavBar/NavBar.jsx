import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
// import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)

  }, [windowWidth,windowHeight]);

  return (
    <div className="nav_bar">
      <div className="nav_logo">
        <NavLink className="brand_logo">
          <span>LoGo</span>
        </NavLink>
      </div>

      <nav className={toggle ? "nav_list active" : " nav_list"}>
        <LinkScroll className="nav_item" to="home" smooth="true"onClick={()=>setToggle(!toggle)}>
          home
        </LinkScroll>
        <LinkScroll className="nav_item" to="about" smooth="true" onClick={()=>setToggle(!toggle)}>
          About
        </LinkScroll>
        <LinkScroll className="nav_item" to="education" smooth="true"onClick={()=>setToggle(!toggle)}>
          Education
        </LinkScroll>
        <LinkScroll className="nav_item" to="skills" smooth="true"onClick={()=>setToggle(!toggle)}>
          skills
        </LinkScroll>
        <LinkScroll className="nav_item" to="contact" smooth="true"onClick={()=>setToggle(!toggle)}>
          Contact
        </LinkScroll>
        <Link to="/product">product</Link>
      </nav>
      <div className="nav_btn">
        <button>Nav Button</button>
      </div>
      <div className="nav_toggle" >
        {windowWidth <= "600" && (<div onClick={()=>(setToggle(!toggle))}>{toggle ? <FaTimes /> :<FaBars /> }</div>)}
        {
          windowHeight > "20" && (()=>setToggle(!toggle))
        }
      </div>
    </div>
  );
};

export default NavBar;



