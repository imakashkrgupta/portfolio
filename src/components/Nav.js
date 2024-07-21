import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function Nav() {

  let nav_click_count = 0;
  function menuClicked(){
    if(nav_click_count % 2 == 0){
      document.querySelector(".links_subwrap").style.display="flex";
      nav_click_count++;
    }
    else{
      document.querySelector(".links_subwrap").style.display="none";
      nav_click_count++;
    }
  }

  return (
    <>
      <div className="nav_wrapper">
        <div className="links_wrapper">
          <div className="nav_menu" onClick={menuClicked}><i class='bx bx-menu'></i></div>
          <NavLink to="/"><div className="nav_logo"><span>A</span>kash.</div></NavLink>
          <div className="links_subwrap">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
