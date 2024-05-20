import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Viewdata from './components/Viewdata';
import { Route, Router, Routes } from 'react-router-dom';
import Use from './components/Use';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path='/reg' element={<Viewdata/>}/>
         <Route path='/t' element={<Use/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
