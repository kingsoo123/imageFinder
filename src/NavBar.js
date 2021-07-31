import React from 'react'
import Logo from './Logo'
import "./style.scss"

const NavBar = ()=>{
    return(
        <div className="col-md-2 col-sm-12 navMenu">
        <Logo/>
        <ul className="nav_UL">
        <li className="nav_active"><i className="fa fa-home" aria-hidden="true"></i> Home</li>
        <li> <i className="fa fa-envelope" aria-hidden="true"></i> Message</li>
        <li style={{fontWeight: 'bolder'}}>SHARE</li>
        <li><i className="fa fa-bar-chart" aria-hidden="true"></i> Ranking</li>
        <li><i className="fa fa-arrows-alt" aria-hidden="true"></i> Challenge</li>
        <li><i className="fa fa-grav" aria-hidden="true"></i> Party</li>
        <li> <i className="fa fa-plug" aria-hidden="true"></i> Connect</li>
        <li><i className="fa fa-motorcycle" aria-hidden="true"></i> Parade</li>
        <li><i className="fa fa-users" aria-hidden="true"></i> Group</li>
        </ul>
        </div>
    )
}


export default NavBar