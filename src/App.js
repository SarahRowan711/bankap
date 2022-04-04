//default imports
import './App.css'; //contains custom styling for navbar background and 'body' for App

//additional imports...
import 'bootstrap/dist/css/bootstrap.css'; //contains default styling for the navbar and cards
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ContextProvider from './components/Context';
import Home from './components/Home';
import SignIn from './components/SignIn'
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import UserData from './components/UserData';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ContextProvider>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Deposit" element={<Deposit />} />
        <Route path="/Withdraw" element={<Withdraw />} />
        <Route path="/UserData" element={<UserData />} />
        <Route path="/UpdateProfile" element={<UpdateProfile />} />
      </Routes>
      </ContextProvider>
  </BrowserRouter> 
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

export default App;
