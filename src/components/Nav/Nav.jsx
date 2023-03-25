import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.scss'
import Navigation from '../../styles/Navigation';
import { useState, useEffect } from 'react';
import Country from '../../data/country.json'
import Flag from '../../styles/Flag';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme/breakpoints';
import { Link } from 'react-router-dom';


export default function Nav(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const style ={
    burger: {cursor: 'pointer', fontSize: '5rem', color: '#064e58', position: 'fixed', right: '2%', top: '0%', zIndex: 30}, 
    link: {textDecoration: 'none', color: '#064e58', textAlign: 'center'},
    flag: {width: '100%', height: '100%'}
  }

  

  const [w, setW] = useState(window.innerWidth)
  useEffect(()=> {
    const handleReasize = () => {
      
      setW(window.innerWidth)
    }
    window.addEventListener("resize", handleReasize)
    return () => {
      window.removeEventListener("resize", handleReasize)
    }
  }, [])

 
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const clickCountryDetails = (nameCountry, id) => {
    props.clickCountry(nameCountry, id)
  }


  
  const list = (anchor) => (
   
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List>
        {Country.map((el, index) => (
          <ListItem key={index} disablePadding>
            <Navigation>
                <ThemeProvider theme={theme}>
                <div className="box">
                    <div className="box__country">
                        <Flag>
                        <img className="box__country-img" src={process.env.PUBLIC_URL + el.flag} alt={el.country} style={style.flag}/>
                        </Flag>
                        <div>
                            <Link 
                            onClick={() => clickCountryDetails (el.country, el.lp)}
                            to={`/country/[${el.country}]`} style={style.link}>
                                {el.country}
                            </Link>
                        </div>
                    </div>
                </div>
               
                </ThemeProvider>
            </Navigation>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='nav'>
         {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon style={style.burger} onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}