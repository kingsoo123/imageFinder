import React from 'react'

const NavMenu = ()=>{

    const menuArray = ['World','Following','Popular','Post','Gender', 'Location', 'Professional']
    return(
        <div className="nav_menu">
        {menuArray.map((item, index)=>{
            return(
            <div className="dropdown" key={index}>
            <button className="btn btn-secondary dropdown-toggle menu_drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {item}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <small>Action</small>
            </div>
            </div>
            )
        })}
         
        </div>
    )
}


export default NavMenu