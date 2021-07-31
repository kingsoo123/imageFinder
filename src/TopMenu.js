import React from 'react'

const TopMenu = ({searchImage, findImage})=>{
    return(
        <div className="top_menu">
            <div className="search_box">
            <i className="fa fa-search fa-2x" aria-hidden="true" ></i>
            <input type="text" placeholder="Find Something..." className="menu_input" onChange={(e)=>{searchImage(e)}}/>
            <button className="menu_butt" onClick={findImage}>Search</button>
            </div>
            <div className="person">
            <i className="fa fa-bell fa-2x" aria-hidden="true"></i>
            <i className="fa fa-user-o fa-1x" aria-hidden="true"></i>
            


    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Abigail
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <small>Action</small>
    <small>Another action</small>
    <small>Something else here</small>
  </div>
</div>

            </div>
        </div>
    )
}

export default TopMenu