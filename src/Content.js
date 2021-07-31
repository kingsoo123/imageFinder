import React from 'react'
const Content = ({names})=>{
    return(
        <div className="content_div">
        {names.map((item, index)=>{
            return(
                <div className="image_wrap" key={index}>
                <p>{item}</p>
                </div>
            )
        })}
        </div>
    )
}

export default Content