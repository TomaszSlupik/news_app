import './App.scss';
import Maincontent from './components/Maincontent/Maincontent';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Svgimage from './components/Svgimage/Svgimage';
import Footer from './components/Footer/Footer';

function App() {

  const [detailCountry, setDetailCountry] = useState("")
  const [detailId, setDetailId] = useState("")

  console.log(detailCountry)
  const clickCountry = (nameCountry, id) => {
    setDetailId(id)
    setDetailCountry(nameCountry)
  }

  const [listView, setListView] = useState(true)

  return (
    <div>
      <Router>
          <Header 
          listView={listView}
          setListView={setListView}
          clickCountry={clickCountry}/>
        <Routes>
          <Route path='/' element={<Svgimage />} />
          <Route path={`/country/[${detailCountry}]`} element={< Maincontent
          listView={listView}
          detailId={detailId}
          detailCountry={detailCountry}/>} />
          
        </Routes> 
        <Footer />
      </Router>
             
    </div>
  );
}

export default App;
