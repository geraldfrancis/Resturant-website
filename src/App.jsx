
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';
import Backyard from './Pages/Backyard/Backyard';
import Dinning from './Pages/Dinning/Dinning';
import Bedroom from './Pages/Bedroom/Bedroom';
import Kitchen from './Pages/Kitchen/Kitchen';
import Watchmore from './Pages/Watch/Watchmore';
import Subscribe from './Pages/Subscribe/Subscribe';



function App() {
  return (
    <>

      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Backyard' element={<Backyard />}/>
          <Route path='/Dinning' element={<Dinning />}/>
          <Route path='/Bedroom' element={<Bedroom  />}/>
          <Route path='/Kitchen' element={<Kitchen />}/>
          <Route path='/Watchmore' element={<Watchmore />}/>
          <Route path='/Subscribe' element={<Subscribe />}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App;
