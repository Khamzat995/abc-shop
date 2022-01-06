import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Band from './components/headers/Band';
import LowerAnnouncement from './components/headers/LowerAnnouncement';
import Slider from './components/headers/Slider';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
            <Band />
              <LowerAnnouncement />
                <Slider />
                 <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
