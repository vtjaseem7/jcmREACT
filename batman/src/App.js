
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Use from './components/Use';
import Viewdata from './components/Viewdata';


function App() {
  return (
    <div className="App">
      
      {/* <Login/> */}
      {/* <Signup/> */}
      <Navbar/>
     <Routes>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/u' element={<StateBasics/>}/>
        <Route path='/v' element={<Counter/>}/>
        <Route path='/t' element={<Use/>}/>
        <Route path='/vd' element={<Viewdata/>}/>
      </Routes>
     
      


      
    </div>
  );
}

export default App;
