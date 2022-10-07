import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Currency from './component/Сurrency';
import ChartName from './component/ChartName';
import Disclaimer from './component/Disclaimer';
import Times from './component/Times';
import { fetchCurrentPrice } from './redux/currentPriceSlice';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchCurrentPrice())
  },[dispatch])
  
  return (
      <div className="wrapper clear">
        <div>
          <Link to="/">Time</Link>
          <Link to="/disclaimer"> Disclaimer</Link>
          <Link to="/chartName"> ChartName</Link>
          <Link to="/currency"> Валюта</Link>
        </div>
        
        <Routes>
          <Route path="/" exact element={<Times/>}/>
        </Routes>

        <Routes>
          <Route path="/disclaimer" element={<Disclaimer/>}/>
        </Routes>
        <Routes>
          <Route path="/chartName" element={<ChartName/>}/>
        </Routes>

        <Routes>
          <Route path="/currency" element={<Currency/>}/>
        </Routes>

      </div>
  );
}

export default App;
