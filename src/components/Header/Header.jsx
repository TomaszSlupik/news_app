import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Circle from '../../styles/Circle';
import InfoIcon from '@mui/icons-material/Info';
import Infouser from '../Infouser/Infouser';
import { Link } from 'react-router-dom';
import theme from '../../theme/breakpoints';
import { ThemeProvider } from '@emotion/react';

export default function Header(props) {


const [infoUserWindow, setInfoUserWindow] = useState(false)

  const openWindowforUser = () => {
    setInfoUserWindow(true)
  }
  const closeWindowforUser = () => {
    setInfoUserWindow(false)
}

const changeView = () => {
    if (props.listView === true) {
        props.setListView(false)
    }
    else {
        props.setListView(true)
    }
    
}

  return (
    <div className='header'>
        <ThemeProvider theme={theme}>
        <div className="header__box">
            <div className="header__box-title">
                <Link to="/" style={{textDecoration: 'none', color:'#fff'}}>
                gn<span className="header__box-title--news">News</span> 
                </Link>
            </div>
            <Circle>
                <ChangeCircleIcon 
                onClick={changeView}
                style={{ fontSize: '100%', color:'#fff'}}/>
            </Circle>
            <Circle>
                <InfoIcon 
                onClick={openWindowforUser}
                style={{ fontSize: '100%', color:'#fff'}}/>
                <Infouser 
                infoUserWindow={infoUserWindow}
                openWindowforUser={openWindowforUser}
                closeWindowforUser={closeWindowforUser}
                />
            </Circle>
            <Nav 
            clickCountry={props.clickCountry}
            />
        </div>
        </ThemeProvider>
    </div>
  )
}
