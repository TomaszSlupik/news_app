import './App.scss';
import Maincontent from './components/Maincontent/Maincontent';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Svgimage from './components/Svgimage/Svgimage';
import Footer from './components/Footer/Footer';
import { IntlProvider } from 'react-intl';
import translationsEN from './language/englishTranslation.json'
import translationsPL from './language/polishTranslation.json'
import translationsFR from './language/franchTranslation.json'
import translationsDE from './language/germanyTranslation.json'
import { Provider } from 'react-redux';
import store from './store/configureStore'
import ViewReducer from './components/ViewReducer/ViewReducer';

function App() {

  const [detailCountry, setDetailCountry] = useState("")
  const [detailId, setDetailId] = useState("")


  const clickCountry = (nameCountry, id) => {
    setDetailId(id)
    setDetailCountry(nameCountry)
    
  }

  const [listView, setListView] = useState(true)

  // Liczba artykułów 
  const [newsLengthDetails, setNewsLengthDetails] = useState("0")
  const newsLength = (number) => {
    setNewsLengthDetails(number)
  }


  const [language, setLanguage] = useState('pl');

  return (
    <IntlProvider locale={language} messages={language === "pl" ? translationsPL : language === "en"  ? translationsEN : language ==="fr" ? translationsFR :
    language === 'de' ? translationsDE : translationsPL}>
    <div>
      <Router>
          <Header 
          listView={listView}
          setListView={setListView}
          clickCountry={clickCountry}
          language={language}
          setLanguage={setLanguage}
          />

          {/* Wyświetlenie Newsów za pomocą Reduxa */}
          {/* <Provider store={store}>
              <ViewReducer />
          </Provider> */}

        <Routes>
          <Route path='/' element={<Svgimage />} />
          <Route path={`/country/[${detailCountry}]`} element={< Maincontent
          listView={listView}
          detailId={detailId}
          detailCountry={detailCountry}
          newsLength={newsLength}
          />} 
          />
          
        </Routes> 
        <Footer 
        newsLengthDetails={newsLengthDetails}
        />
      </Router>
    </div>
    </IntlProvider>
  );
}

export default App;
