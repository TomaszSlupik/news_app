
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../store/newSlice'

export default function ViewTest() {


const dispatch = useDispatch();
const newsStatus = useSelector(state => state.news.status);
const articles = useSelector(state => state.news.articles);
const error = useSelector(state => state.news.error);
console.log(fetchNews)

useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);


  return (
    <div style={{color: '#fff'}}>
        testowanie
        {
            articles.map((el) => (
                <div key={el.title}>
                    {el.title}
                </div>
            ))
        }
    </div>
  )
}
