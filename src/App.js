//default imports
import logo from './logo.svg';
import './App.css';

//additional imports...
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Account from './components/Account';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Deposit" element={<Deposit />} />
            <Route path="/Withdraw" element={<Withdraw />} />
            <Route path="/AllData" element={<AllData />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

export default App;
