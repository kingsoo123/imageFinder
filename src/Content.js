import React from 'react'
const Content = ({names})=>{
    return(
        <div className="content_div">
         {
             names.length=== 0 ? 'Loading...' : 
             names.map((image, index)=>{
                 return(
                     <div key={index} className="image_wrap">
                    <img src={image.urls.small} alt={image.alt_description} width="100%" height="350px" className="image"/>
                    <div className="middle">
                        <div className="text">
                       <p> {image?.user?.first_name}, {image?.user?.total_photos}</p>
                        <small><i className="fa fa-map-marker" aria-hidden="true"></i>{' '}{image?.user?.location ?? 'New York'}</small>
                        </div>
                    </div>
                    </div>
                 )
             })
         }
        </div>
    )
}

export default Content