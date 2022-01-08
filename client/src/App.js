import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
// import Band from './components/headers/Band';
import LowerAnnouncement from './components/headers/LowerAnnouncement';
//import Slider from './components/headers/Slider';
import Banner from './components/mainpages/banner/Banner';
import BannerOne from './components/mainpages/bannerOne/BannerOne';
import Footer from './components/mainpages/footer/Footer';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
            {/*<Band />*/}
              <LowerAnnouncement />
                <Banner />
                 <MainPages />
            <BannerOne />
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
