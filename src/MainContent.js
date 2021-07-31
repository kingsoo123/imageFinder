import React, {useState, useEffect} from 'react'
import TopMenu from './TopMenu'
import NavMenu from './NavMenu'
import Content from './Content'


const names = ["chinedu", "aminat", "chidi", "yazid", "jide", "sayo", "obong", "kemi"]

const MainContent = ()=>{
    const [searchName, setSearchName] = useState([])
    const [keyword, setKeyword] = useState('')
    const searchImage = (e)=>{
        setKeyword(e.target.value)
    }


    console.log(keyword === '')

    const compare =  searchName.filter(name=>{
        return keyword === name
    })

    const findImage = ()=>{
        if(searchName.length === 0 & keyword === ''){
            setSearchName(names)
        }else{
            setSearchName(compare)
        }
    }


    useEffect(()=>{
        if(keyword === ''){
            setSearchName(names)
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