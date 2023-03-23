import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'
import mykey from '../../api/mykey'
import Header from '../Header/Header'


export default function Main() {


const [news, setNews] = useState([])

useEffect (()=> {
    const getNews = async () => {
        const {data: res} = await axios.get(mykey)
        setNews(res.articles)
    }
    getNews()
}, [])

console.log(news)


  return (
    <div>
      <Header />
    </div>
  )
}
