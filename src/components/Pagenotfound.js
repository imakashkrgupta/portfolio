import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

export default function Pagenotfound() {
  return (
    <div className="pagenotfound_wrapper">
        <div className="pagenotfound_container">
            <div className="pagenotfound_pic"></div>
            <h2>I Think You Are Lost!</h2>
            <span>Let's go back to <NavLink to="/">Home</NavLink></span>
        </div>
    </div>
    
  )
}
