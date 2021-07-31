import React from 'react'
import logo from "./assets/logo.png"
import "./style.scss"

const Logo = ()=>{
    return(
        <div className="row logo_div">
        <img src={logo} alt="BlueCube" width="60px" height="50px"/>
        <h3 className="logo_text">bluecube</h3>
        </div>
    )
}


export default Logo