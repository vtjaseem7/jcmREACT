import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
    <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    </>
  );
}

export default App;
