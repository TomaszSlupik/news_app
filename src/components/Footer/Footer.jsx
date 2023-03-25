import React, { useEffect, useState } from 'react'
import './Footer.scss'
import ArticleIcon from '@mui/icons-material/Article';
import Badge from '@mui/material/Badge';
import { FormattedMessage } from 'react-intl';

export default function Footer(props) {

const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);

const leading0 = num => num < 10 && num > 0 ? '0' + num : num;

const timer = () => {
    const measureTime = Date.parse(new Date());
    const seconds = Math.floor((measureTime/1000)%60);
    const minutes = Math.floor((measureTime/1000/60)%60);
    const hours = Math.floor(measureTime/(1000*60*60) % 24 + 1);

    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
}

useEffect(() => {
    timer()
    setInterval(() => timer(), 1000);
  });

  return (
    <div className='footer'>
        <div className="footer__countnews">
            <div className="footer__countnews-number">
            <FormattedMessage id="numberOfArticles" defaultMessage="Liczba artykułów" />
            </div>
        <Badge badgeContent={props.newsLengthDetails} color="primary">
            <ArticleIcon style={{color: '#fff'}} />
        </Badge>
        </div>
        
        <div className="footer__time">
            <div>{leading0(hours)}:</div>
            <div>{leading0(minutes)}:</div>
            <div>{leading0(seconds)}</div>
        </div>
    </div>
  )
}
