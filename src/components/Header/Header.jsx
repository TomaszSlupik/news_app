import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Circle from '../../styles/Circle';
import InfoIcon from '@mui/icons-material/Info';
import Infouser from '../Infouser/Infouser';
import { useNavigate } from 'react-router-dom';
import theme from '../../theme/breakpoints';
import { ThemeProvider } from '@emotion/react';
import LanguageIcon from '@mui/icons-material/Language';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



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

let navigate = useNavigate()

const goToHome = () => {
    navigate('/')
    window.location.reload(true)
}


const [openLanguage, setOpenLanguage] = useState(null)

const open = Boolean(openLanguage);

const handleClickOpenLang = (event) => {
    setOpenLanguage(event.currentTarget);
  };

const handleClickCloseLang = () => {
setOpenLanguage(null);
};

const handleClickCloseLangPL = () => {
    props.setLanguage ('pl')
    setOpenLanguage(null);
};
const handleClickCloseLangEN = () => {
    props.setLanguage ('en')
    setOpenLanguage(null);
};

const handleClickCloseLangFR = () => {
    props.setLanguage ('fr')
    setOpenLanguage(null);
};

const handleClickCloseLangDE = () => {
    props.setLanguage ('de')
    setOpenLanguage(null);
};


  return (
    <div className='header'>
        <ThemeProvider theme={theme}>
        <div className="header__box">
            <div className="header__box-title"
            onClick={goToHome}
            >
                gn<span className="header__box-title--news">News</span> 
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
            <Circle>
            
                <LanguageIcon
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickOpenLang}
                    style={{ fontSize: '100%', color:'#fff'}}
                    />
               
                <Menu
                    id="basic-menu"
                    anchorEl={openLanguage}
                    open={open}
                    onClose={handleClickCloseLang}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                     <MenuItem onClick={handleClickCloseLangPL}>
                    <img src={process.env.PUBLIC_URL + '/img/assets/poland.png'} className="header__box-flag" alt="Flaga polski" />
                        PL
                    </MenuItem>
                    <MenuItem onClick={handleClickCloseLangEN}>
                    <img src={process.env.PUBLIC_URL + '/img/assets/unitedkingdom.png'} className="header__box-flag" alt="Flaga UK" />
                        EN
                    </MenuItem>
                    <MenuItem onClick={handleClickCloseLangFR}>
                    <img src={process.env.PUBLIC_URL + '/img/assets/france.png'} className="header__box-flag" alt="Flaga francji" />
                        FR</MenuItem>
                        <MenuItem onClick={handleClickCloseLangDE}>
                    <img src={process.env.PUBLIC_URL + '/img/assets/germany.png'} className="header__box-flag" alt="Flaga niemiec" />
                        DE</MenuItem>
      </Menu>
            </Circle>
            <Nav 
            clickCountry={props.clickCountry}
            />
        </div>
        </ThemeProvider>
    </div>
  )
}
