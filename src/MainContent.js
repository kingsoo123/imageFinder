import React, {useState, useEffect} from 'react'
import TopMenu from './TopMenu'
import NavMenu from './NavMenu'
import Content from './Content'


const URL = 'https://api.unsplash.com/'
const searchUrl = 'https://api.unsplash.com/search/photos/?query'

const MainContent = ()=>{
    const [searchName, setSearchName] = useState([])
    const [keyword, setKeyword] = useState('')
    const searchImage = (e)=>{
        setKeyword(e.target.value)
    }


    const findImage = ()=>{
        fetch(`${searchUrl}=${keyword}`, {
            headers:{
                Authorization : `Client-ID s10j5eZNtp2NrdTQH6vV8bXkQjk_UdAOq5QjiJpN6-8`,
                'Accept-Version': 'v1'
            }
        })
        .then(response => response.json())
        .then(data => setSearchName(data?.results));
    }


    useEffect(()=>{
        if(keyword === ''){
            fetch(`${URL}/photos`, {
                headers:{
                    Authorization : `Client-ID s10j5eZNtp2NrdTQH6vV8bXkQjk_UdAOq5QjiJpN6-8`,
                    'Accept-Version': 'v1'
                }
            })
            .then(response => response.json())
            .then(data => setSearchName(data));
        }
    }, [keyword])
    return(
        <div className="col-md-10 col-sm-12 main_content">
        <TopMenu searchImage={searchImage} findImage={findImage}/>
        <NavMenu/>
        <Content names={searchName}/>
        </div>
    )
}

export default MainContent