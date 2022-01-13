//default imports
import './App.css'; //contains custom styling for navbar background and 'body' for App

//additional imports...
import 'bootstrap/dist/css/bootstrap.css'; //contains default styling for the navbar and cards
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Context from './components/Context';
import Home from './components/Home';
import Account from './components/Account';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Context>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Deposit" element={<Deposit />} />
        <Route path="/Withdraw" element={<Withdraw />} />
        <Route path="/AllData" element={<AllData />} />
      </Routes>
      </Context>
  </BrowserRouter> 
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

export default App;
