import React, { useMemo } from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'
import mykey from '../../api/mykey'
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
import Button from '@mui/material/Button';
import { TransitionProps } from '@mui/material/transitions';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { FormattedMessage } from 'react-intl';
import './Maincontent.scss'


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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


// Zliczanie wszystkich artykułów
const countListMeal = (news) => {
  for (let i = 0; i < news.length; i++) {}
  return news
}

const count = useMemo(() => {
  return  countListMeal (news.length)
}, [news.length])

props.newsLength(count)


const [openWindowInfo, setOpenWindowInfo] = useState(false)
const [author, setAuthor] = useState("")
const [url, setUrl] = useState()
const [description, setDescription] = useState()

const openDetailNewsArticle = (author, url, description) => {
  setAuthor(author)
  setUrl(url)
  setDescription(description)
  setOpenWindowInfo(true)
}

const closeDetailNewsArticle = () => {
  setOpenWindowInfo(false)
}

  return (
    <div style={{marginTop: '2em'}}>
      {
        props.listView === true ?
        (
          
            news.map((el, index) => {
              return (
                  <List
                  key={index}
                  sx={{ width: '100%', bgcolor: 'background.paper' }}  component="nav" aria-label="mailbox folders">
                  <ListItem 
                  onClick={() => openDetailNewsArticle(el.author, el.url, el.description)}
                  button style={{display: 'flex', flexDirection: 'column', alignItems: 'baseline', height: '100%', paddingTop: '8px',
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
          <div className='titles'>
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
                            {
                              el.urlToImage !== null ?
                              <img className='titles__img' src="" alt={el.title} />
                              :
                              <div></div>
                            }
                          <CardContent>
                            <Typography 
                            style={{fontWeight: '700', fontFamily: 'Open Sans'}}
                            color="primary"
                            variant="body1">
                              {el.title}
                            </Typography>
                          </CardContent>
                          <div className='titles__publishedAt'>{el.publishedAt}</div>
                          <div className='titles__sourceName'>{el.source.name}</div>
                          <Button 
                          onClick={() => openDetailNewsArticle(el.author, el.url, el.description)}
                          style={{cursor: 'pointer', position: 'absolute', right: '2%', bottom: '3%'}} variant='contained'>
                            <FormattedMessage id="look" defaultMessage="Zobacz" />
                          </Button>
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

            <Dialog
                        open={openWindowInfo}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={closeDetailNewsArticle}
                        aria-describedby="alert-dialog-slide-description"
                      >
                        <DialogTitle style={{color: '#064e58'}}>{author}</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-slide-description">
                            
                            {url}
                            {description === null ?
                            (
                              <div className='describe'>
                                <FormattedMessage className='describe' id="noDescription" defaultMessage="Brak opisu" />
                              </div>
                            )
                            :
                            (
                              description
                            )
                          }
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <ThemeProvider theme={themeColor}>
                        <Button 
                          variant='outlined'
                          onClick={closeDetailNewsArticle}>
                             <FormattedMessage id="close" defaultMessage="Zamknij" />
                          </Button>
                        </ThemeProvider>
                        </DialogActions>
                </Dialog>
  
    </div>
  )
}
