
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  HashRouter  as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import DataProvider from './context/Dataprovider';

const App =()=> {
  const pagesize=9;

  const [progress, setprogress] = useState(0);

    return (
     
      <div>
        <DataProvider>
         <Router>
        <Navbar/>
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
                />
        <Routes>
          <Route exact path="/" element={<News setprogress={setprogress} key="general" pagesize={pagesize} category="general"/>}></Route>
          <Route exact path="/business" element={<News setprogress={setprogress} key="business" pagesize={pagesize} category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setprogress={setprogress} key="entertainment" pagesize={pagesize} category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News setprogress={setprogress} key="health" pagesize={pagesize} category="health"/>}></Route>
          <Route exact path="/science" element={<News setprogress={setprogress} key="science" pagesize={pagesize} category="science"/>}></Route>
          <Route exact path="/sports" element={<News setprogress={setprogress} key="sports" pagesize={pagesize} category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setprogress={setprogress} key="technology" pagesize={pagesize} category="technology"/>}></Route>
          

        
        </Routes>
        </Router>
        </DataProvider>
      </div>
    );
  
}

export default App;

