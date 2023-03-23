import React from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Circle from '../../styles/Circle';

export default function Header() {
  return (
    <div className='header'>
        <div className="header__box">
            <div className="header__box-title">
                gn<span className="header__box-title--news">News</span> 
            </div>
            <Circle>
                <ChangeCircleIcon style={{ fontSize: '100%'}}/>
            </Circle>
            <Nav />
        </div>
    </div>
  )
}
