import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'
import mykey from '../../api/mykey'
import Country from '../../data/country.json'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Cardnews from '../../styles/Cardnews'
import theme from '../../theme/breakpoints'
import { ThemeProvider } from '@emotion/react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import themeColor from '../../theme/themeColor'


export default function Maincontent(props) {

const api = `https://newsapi.org/v2/top-headlines?country=${props.detailId}&apiKey=${mykey}`


const [news, setNews] = useState([])
const [id, setId] = useState("")


useEffect(() => {
  setId(props.detailId)
}, [props.detailId])


useEffect (()=> {
    const getNews = async () => {
        const {data: res} = await axios.get(api)
        setNews(res.articles)
        
    }
    getNews()
}, [id])



  return (
    <div>
      {
        props.listView === true ?
        (
          
            news.map((el, index) => {
              return (
                  <List
                  key={index}
                  sx={{ width: '100%', bgcolor: 'background.paper' }}  component="nav" aria-label="mailbox folders">
                  <ListItem button style={{display: 'flex', flexDirection: 'column', alignItems: 'baseline', height: '100%', paddingTop: '8px',
                    paddingBottom: '8px'}}>
                    <ListItemText primary={el.title}
                    style={{fontWeight: '700', fontFamily: 'Open Sans', color: "#064e58" }}
                    secondary={el.publishedAt} />
                    <Typography gutterBottom component="div" style={{textAlign: 'left', fontSize: '0.8rem'}}>
                    {el.source.name}
                  </Typography>
                  </ListItem>
                  <Divider />
                </List>
              )
            })
          
        )
        :
        (
          <div>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }} > 
              <ThemeProvider theme={theme, themeColor}>
              {
                  news.map((el, index) => {
                      return (
                          <Grid
                          key={index}
                          item xs={12} sm={12} lg={4} style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0em'}}>
                          <Cardnews>
                          <Card style={{ position: 'relative', width: '100%', minHeight: '200px' }}>
                          <CardContent>
                            <Typography 
                            style={{fontWeight: '700', fontFamily: 'Open Sans'}}
                            color="primary"
                            variant="body1">
                              {el.title}
                            </Typography>
                          </CardContent>
                          <div>{el.publishedAt}</div>
                          <div>{el.source.name}</div>
                          </Card>
                        </Cardnews>
                        </Grid>
                    )
                })
            }
                </ThemeProvider>
              </Grid>
            </Box>
          </div>
         
        )
      }


    </div>
  )
}
