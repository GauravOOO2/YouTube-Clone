import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../util/appSlice';
import { Link } from 'react-router-dom';
import { addSearchText } from '../util/appSlice';
import { YOUTUBE_SEARCH_URL } from '../util/constants';
import appStore from '../util/appStore';
import {cacheResults}  from '../util/searchSlice'

const Header = () => {

  const dispatch = useDispatch();
  const searchQuery = useSelector((store)=>store.app.searchText)
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store)=>store.search)

  const handlemenubar = () => {
    console.log("dispatch before");
    dispatch(toggleMenu())
  }

  const getSearchSuggestion = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_URL+searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1])
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))

  }


  


  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      } 
      else{  
        getSearchSuggestion()
      }
    },300)
    return()=>{
      clearTimeout(timer)
    }
  },[searchQuery])



  const searchText = useRef('')

  return (
    <div className=' grid grid-cols-12 shadow-lg ' >
      <div className=' col-span-3 flex pl-3 pt-3  ' >
        <img className=' h-10 cursor-pointer  ' onClick={handlemenubar} src='https://th.bing.com/th/id/OIP.uwR4Qb-1cRgTN8aXQ6Ui6QHaHa?rs=1&pid=ImgDetMain'
          alt='Hamburger Menu'
        />
        
          <img className='pl-6 h-14 pb-4' src='https://th.bing.com/th/id/R.1b1f83d5865411960498580b20d0ac95?rik=Hn1mQxA%2bFFxDUA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fyoutube-logo-transparent-png%2fyoutube-logo-transparent-png-23.png&ehk=drIJjiijljpWioLcAwpzY6Sznq%2bzITPpttYeBZIv%2fv4%3d&risl=&pid=ImgRaw&r=0'
            alt='Logo'
          />
    
      </div>
      <div className=' col-span-6  pt-3 ' >
        < input ref={searchText} onChange={() => dispatch(addSearchText(searchText.current.value))} className=' border border-black ' />
        <button className=' bg-gray-400 p-1 m-1 rounded-lg ' >
          Button
        </button>
        <ul> {
          suggestions?.map((data,index)=>
          <li key={index} >{data}</li>
          )
          }
  
        </ul>

      </div>
      <div className=' col-span-3 pt-3 ' >
        <img className=' h-10 ' src='https://clipground.com/images/account-logo-png-7.png'
          alt='Account'
        />
      </div>

    </div>
  )
}

export default Header